#!/usr/bin/env python3
"""Download CC-licensed portraits from Wikimedia Commons and crop to a single face."""

from __future__ import annotations

import json
import subprocess
import tempfile
import time
import urllib.parse
from pathlib import Path

import cv2
import numpy as np

ROOT = Path(__file__).resolve().parents[1]
TARGET_W, TARGET_H = 327, 480
VARIANT_SLOTS = range(2, 8)
USER_AGENT = 'korean-srs-web/1.3 portrait-fetch'
WIKI_API = 'https://commons.wikimedia.org/w/api.php'
YUNET_MODEL = ROOT / 'scripts' / 'face_detection_yunet_2023mar.onnx'
YUNET_MODEL_URL = (
    'https://github.com/opencv/opencv_zoo/raw/main/models/'
    'face_detection_yunet/face_detection_yunet_2023mar.onnx'
)
_face_detector: cv2.FaceDetectorYN | None = None

# (output directory relative to repo root, base filename, Wikimedia File: titles)
MEMBERS: list[tuple[str, str, list[str]]] = [
    (
        'public/portraits',
        'bts_rm',
        [
            'File:RM at W Korea Love Your W, November 2023.jpg',
            'File:RM at W Korea Breast Cancer Campaign, 15 October 2025.png',
            'File:RM for BTS 5th anniversary party in LA photoshoot by Dispatch, May 2018 03.jpg',
            'File:RM for BTS 5th anniversary party in LA photoshoot by Dispatch, May 2018 01.jpg',
            'File:1117 RM (BTS) Dispatch Photo Shoot LA (2).png',
            'File:1117 RM (BTS) Dispatch Photo Shoot LA (3).png',
        ],
    ),
    (
        'public/portraits',
        'bts_jin',
        [
            'File:Kim Seok-jin for VT Cosmetics L\'Atelier Perfume 2019.png',
            'File:BTS JIN Airport Departure on 20250223 01.png',
            'File:BTS JIN Airport Departure on 20250223 02.png',
            'File:BTS JIN Airport Departure on 20250223 03.png',
            'File:BTS JIN Airport Departure on 20250223 04.png',
            'File:BTS JIN Airport Departure on 20250223 05.png',
        ],
    ),
    (
        'public/portraits',
        'bts_suga',
        [
            'File:Min Yoon-gi May 2018.jpg',
            'File:SUGA of BTS - Agust D Tour 2023 - UBS Belmont Arena April 27, 2023 Photo 1.jpg',
            'File:SUGA of BTS - Agust D Tour 2023 - UBS Belmont Arena April 27, 2023 Photo 2.jpg',
            'File:SUGA of BTS - Agust D Tour 2023 - UBS Belmont Arena April 27, 2023 Photo 3.jpg',
            'File:SUGA of BTS - Agust D Tour 2023 - UBS Belmont Arena April 27, 2023 Photo 5.jpg',
            'File:SUGA of BTS - Agust D Tour 2023 - UBS Belmont Arena April 27, 2023 Photo 6.jpg',
        ],
    ),
    (
        'public/portraits',
        'bts_jhope',
        [
            'File:BTS J-Hope military discharge, 17 October 2024 01.png',
            'File:BTS J-Hope military discharge, 17 October 2024 02.png',
            'File:J-Hope at W Korea Breast Cancer Campaign, 15 October 2025.png',
            'File:J-Hope for BTS 5th anniversary party in LA photoshoot by Dispatch, May 2018 01.jpg',
            'File:J-Hope for BTS 5th anniversary party in LA photoshoot by Dispatch, May 2018 07.jpg',
            'File:J-Hope for BTS 5th anniversary party in LA photoshoot by Dispatch, May 2018 09.jpg',
        ],
    ),
    (
        'public/portraits',
        'bts_jimin',
        [
            'File:Jimin on the way to SBS Radio, 31 March 2023 (2).jpg',
            'File:Jimin on the way to SBS Radio, 31 March 2023 (1).jpg',
            'File:Park Ji-min for Dispatch White Day Special, 27 February 2019 02.jpg',
            'File:Park Ji-min for Dispatch White Day Special, 27 February 2019 03.jpg',
            'File:Park Ji-min for Dispatch White Day Special, 27 February 2019 04.jpg',
            'File:Park Ji-min for Dispatch White Day Special, 27 February 2019 07.jpg',
        ],
    ),
    (
        'public/portraits',
        'bts_v',
        [
            'File:V (Kim Tae-hyung) performing at the TRB in Taipei 02 (cropped).jpg',
            'File:Taehyung Kim at the Yangzhou Cotton Festival on September 2014 01.jpg',
            'File:V for Dispatch White Day Special, 27 February 2019 03 (cropped).jpg',
            'File:V (Kim Tae-hyung) at Incheon International Airport on March 24, 2016.jpg',
            'File:V (Kim Tae-hyung) at Taiwan Taoyuan International Airport in March 2015 01.jpg',
            "File:BTS's V 20251004 01.jpg",
        ],
    ),
    (
        'public/portraits',
        'bts_jungkook',
        [
            'File:Jeon Jung-kook at BBMAs, 1 May 2019 02.jpg',
            'File:Jungkook for Dispatch White Day Special, 27 February 2019 01.jpg',
            'File:Jungkook for Dispatch White Day Special, 27 February 2019 02.jpg',
            'File:Jungkook for Dispatch White Day Special, 27 February 2019 03.jpg',
            'File:Jungkook for Dispatch White Day Special, 27 February 2019 04.jpg',
            'File:Jungkook for Dispatch photoshoot on "Idol" music video set, 19 July 2018 03.jpg',
        ],
    ),
    (
        'public/skz-portraits',
        'skz_bangchan',
        [
            'File:Bang Chan of Stray Kids, October 15, 2025.png',
            'File:Bang Chan of Stray Kids, October 15, 2025 (2).png',
            'File:Bang Chan of Stray Kids at Incheon Airport, May 3, 2024.png',
            'File:Stray Kids\' Bang Chan at ICN Airport in July 2025 01.jpg',
            'File:Stray Kids\' Bang Chan at ICN Airport in July 2025 02.jpg',
            'File:Stray Kids Bang Chan W Korea October 2024.jpg',
        ],
    ),
    (
        'public/skz-portraits',
        'skz_leeknow',
        [
            'File:20240503 Lee Know of Stray Kids.png',
            'File:Lee Know of Stray Kids, September 2, 2025 (2).png',
            'File:Lee Know of Stray Kids, September 2, 2025 (3).png',
            'File:Lee Know of Stray Kids, September 2, 2025 (4).png',
            'File:Lee Know of Stray Kids, September 2, 2025 (6).png',
            'File:Lee Know of Stray Kids at Incheon Airport, May 3, 2024.png',
        ],
    ),
    (
        'public/skz-portraits',
        'skz_changbin',
        [
            'File:Changbin Stray Kids.jpg',
            'File:Stray Kids Changbin.jpg',
            'File:Changbin of Stray Kids at the 40th Golden Disc Awards, January 10, 2026 (1).png',
            'File:Changbin of Stray Kids on Incheon Airport, May 3, 2024.png',
            'File:20240503 Changbin of Stray Kids.png',
            'File:Changbin of Stray Kids, December 4, 2024.png',
        ],
    ),
    (
        'public/skz-portraits',
        'skz_hyunjin',
        [
            'File:Hyunjin of Stray Kids, December 4, 2024.png',
            'File:Hyunjin of Stray Kids, March 5, 2025.png',
            'File:Hyunjin of Stray Kids at Incheon Airport, May 3, 2024.png',
            'File:Hyunjin of Stray Kids for Marie Claire Korea, March 31, 2025.png',
            'File:Stray Kids Hyunjin.jpg',
            'File:Hyunjin of Stray Kids at the 40th Golden Disc Awards, January 10, 2026 (1).png',
        ],
    ),
    (
        'public/skz-portraits',
        'skz_han',
        [
            'File:20240503 Han of Stray Kids.png',
            'File:20240503 Han of Stray Kids (2).png',
            'File:190106 Stray Kids Han Ji Sung.png',
            'File:Han of Stray Kids at Incheon Airport, May 3, 2024.png',
            'File:Han of Stray Kids at the 40th Golden Disc Awards, January 10, 2026 (1).png',
            'File:Han at Golden Disk Awards on January 6, 2019.jpg',
        ],
    ),
    (
        'public/skz-portraits',
        'skz_felix',
        [
            'File:190824 Stray Kids Felix 01.png',
            'File:Felix of Stray Kids, May 21, 2025.png',
            'File:Felix of Stray Kids at Incheon Airport, May 3, 2024.png',
            'File:Felix of Stray Kids at Incheon Airport, September 7, 2024.png',
            'File:Felix of Stray Kids in Bulgari Photo Call, June 28, 2023.png',
            'File:Felix Lee of Stray Kids, July 8, 2024.png',
        ],
    ),
    (
        'public/skz-portraits',
        'skz_seungmin',
        [
            'File:240919 Stray Kids Seungmin.jpg',
            'File:Seungmin of Stray Kids, October 15, 2025.png',
            'File:Seungmin of Stray Kids at Incheon Airport, May 3, 2024.png',
            'File:Seungmin of Stray Kids on Tasaki Photo Call, September 20, 2024.png',
            'File:Seungmin of Stray Kids at the Incheon Airport, February 21, 2026 (1).png',
            'File:20240503 Kim Seungmin of Stray Kids.png',
        ],
    ),
    (
        'public/skz-portraits',
        'skz_in',
        [
            'File:190419 Stray Kids I.N.png',
            'File:200117 I.N in Pop Quiz by Marie Claire Korea.jpg',
            'File:I.N of Stray Kids at Incheon Airport, May 3, 2024.png',
            'File:I.N of Stray Kids at Incheon Airport, September 20, 2024.png',
            'File:I.N of Stray Kids at the Incheon Airport, February 25, 2026 (1).png',
            'File:190424 Stray Kids The Fact Music Awards (derived).jpg',
        ],
    ),
]

IMAGE_MAGIC = {
    b'\xff\xd8\xff': 'jpeg',
    b'\x89PNG': 'png',
    b'GIF8': 'gif',
    b'RIFF': 'webp',
}
THUMB_WIDTH = 960
DOWNLOAD_DELAY_SEC = 0.85


def wiki_api(params: dict[str, str]) -> dict:
    query = urllib.parse.urlencode({**params, 'format': 'json'})
    raw = subprocess.check_output(
        ['curl', '-s', '-A', USER_AGENT, f'{WIKI_API}?{query}'],
        text=True,
    )
    if not raw.strip():
        raise RuntimeError('empty Wikimedia API response')
    return json.loads(raw)


def resolve_download_urls(file_titles: list[str]) -> dict[str, str]:
    """Resolve many File: titles in batched API calls."""
    resolved: dict[str, str] = {}
    chunk_size = 40
    for i in range(0, len(file_titles), chunk_size):
        chunk = file_titles[i : i + chunk_size]
        titles = '|'.join(
            title if title.startswith('File:') else f'File:{title}' for title in chunk
        )
        data = wiki_api(
            {
                'action': 'query',
                'titles': titles,
                'prop': 'imageinfo',
                'iiprop': 'url|mime|size',
                'iiurlwidth': '1200',
            }
        )
        for page in data.get('query', {}).get('pages', {}).values():
            if 'missing' in page:
                continue
            info = page['imageinfo'][0]
            resolved[page['title']] = to_thumb_url(info['url'].split('?')[0])
        time.sleep(0.35)
    return resolved


def to_thumb_url(upload_url: str, width: int = THUMB_WIDTH) -> str:
    prefix = 'https://upload.wikimedia.org/wikipedia/commons/'
    if not upload_url.startswith(prefix):
        return upload_url
    path = upload_url[len(prefix) :]
    filename = path.rsplit('/', 1)[-1]
    return (
        f'https://thumb.wikimedia.org/wikipedia/commons/thumb/{path}/'
        f'{width}px-{filename}'
    )


def download(url: str, dest: Path) -> None:
    subprocess.run(
        ['curl', '-sL', '-A', USER_AGENT, '-o', str(dest), url],
        check=True,
    )


def looks_like_image(data: bytes) -> bool:
    if data.startswith(b'<!DOCTYPE') or data.startswith(b'<html'):
        return False
    return any(data.startswith(magic) for magic in IMAGE_MAGIC)


def ensure_yunet_model() -> Path:
    if not YUNET_MODEL.exists():
        print('downloading YuNet face model…')
        subprocess.run(
            ['curl', '-sL', '-A', USER_AGENT, '-o', str(YUNET_MODEL), YUNET_MODEL_URL],
            check=True,
        )
    return YUNET_MODEL


def get_face_detector() -> cv2.FaceDetectorYN:
    global _face_detector
    if _face_detector is None:
        _face_detector = cv2.FaceDetectorYN.create(str(ensure_yunet_model()), '', (320, 320))
        _face_detector.setScoreThreshold(0.5)
        _face_detector.setNMSThreshold(0.3)
    return _face_detector


def detect_face_bbox(img: np.ndarray) -> tuple[int, int, int, int] | None:
    h, w = img.shape[:2]
    detector = get_face_detector()
    detector.setInputSize((w, h))
    _, faces = detector.detect(img)
    if faces is None or len(faces) == 0:
        return None
    best = max(faces, key=lambda face: float(face[2]) * float(face[3]))
    return int(best[0]), int(best[1]), int(best[2]), int(best[3])


def fit_crop_box(
    crop_w: int, crop_h: int, cx: int, cy: int, img_w: int, img_h: int
) -> tuple[int, int, int, int]:
    crop_w = min(crop_w, img_w)
    crop_h = min(crop_h, img_h)
    x = max(0, min(cx - crop_w // 2, img_w - crop_w))
    y = max(0, min(cy - int(crop_h * 0.40), img_h - crop_h))
    return x, y, crop_w, crop_h


def crop_single_face(img: np.ndarray) -> np.ndarray:
    """Portrait crop sized from face bbox — zooms in on wide shots, frames head+shoulders."""
    h, w = img.shape[:2]
    aspect = TARGET_W / TARGET_H
    bbox = detect_face_bbox(img)

    if bbox:
        fx, fy, fw, fh = bbox
        face_frac = fh / h
        if face_frac < 0.12:
            scale = 3.4
        elif face_frac > 0.45:
            scale = 2.3
        else:
            scale = 2.9
        crop_h = int(fh * scale)
        crop_w = int(crop_h * aspect)
        if crop_w > w:
            crop_w = w
            crop_h = int(w / aspect)
        if crop_h > h:
            crop_h = h
            crop_w = int(h * aspect)
        cx = fx + fw // 2
        cy = fy + fh // 2
        x, y, crop_w, crop_h = fit_crop_box(crop_w, crop_h, cx, cy, w, h)
    else:
        crop_frac = 0.85 if w > h * 1.15 else 0.68
        crop_h = int(h * crop_frac)
        crop_w = int(crop_h * aspect)
        if crop_w > w:
            crop_w = w
            crop_h = int(w / aspect)
        x = max(0, (w - crop_w) // 2)
        y = max(0, int(h * 0.04))

    crop = img[y : y + crop_h, x : x + crop_w]
    if crop.size == 0:
        crop = img
    return cv2.resize(crop, (TARGET_W, TARGET_H), interpolation=cv2.INTER_AREA)


def process_file(file_title: str, url: str, out_path: Path) -> bool:
    with tempfile.NamedTemporaryFile(suffix='.src', delete=False) as tmp:
        tmp_path = Path(tmp.name)
    try:
        data = b''
        for attempt in range(4):
            download(url, tmp_path)
            data = tmp_path.read_bytes()
            if looks_like_image(data):
                break
            wait = 2 + attempt * 3
            print(f'  rate-limited, retry in {wait}s…')
            time.sleep(wait)
        if not looks_like_image(data):
            print('  skip non-image response for', file_title)
            return False
        img = cv2.imdecode(np.frombuffer(data, np.uint8), cv2.IMREAD_COLOR)
        if img is None:
            print('  skip unreadable', file_title)
            return False
        portrait = crop_single_face(img)
        if not cv2.imwrite(str(out_path), portrait, [cv2.IMWRITE_PNG_COMPRESSION, 9]):
            print('  skip write failed', out_path)
            return False
        return True
    except Exception as exc:  # noqa: BLE001 — batch script logs and continues
        print('  skip error', file_title, '-', exc)
        return False
    finally:
        tmp_path.unlink(missing_ok=True)


def main() -> None:
    meta: dict[str, list[str]] = {}
    ok_count = 0
    fail_count = 0

    all_titles = [title for _, _, files in MEMBERS for title in files]
    print('resolving', len(all_titles), 'Wikimedia files…')
    url_by_title = resolve_download_urls(all_titles)

    for out_dir, base_name, files in MEMBERS:
        base_path = ROOT / out_dir
        base_path.mkdir(parents=True, exist_ok=True)
        meta[base_name] = files
        for slot, file_title in zip(VARIANT_SLOTS, files, strict=False):
            out = base_path / f'{base_name}_{slot:02d}.png'
            print('fetch', out.relative_to(ROOT))
            norm_title = file_title if file_title.startswith('File:') else f'File:{file_title}'
            url = url_by_title.get(norm_title)
            if not url:
                fail_count += 1
                print('  FAILED no URL for', file_title)
                continue
            if process_file(file_title, url, out):
                ok_count += 1
            else:
                fail_count += 1
                print('  FAILED', file_title)
            time.sleep(DOWNLOAD_DELAY_SEC)

    att_path = ROOT / 'public/portraits/ATTRIBUTIONS.json'
    att_path.write_text(
        json.dumps(
            {
                'source': 'Wikimedia Commons',
                'license': 'Various Creative Commons licenses — see file pages on commons.wikimedia.org',
                'note': 'Portrait variants _02–_07 were cropped to a single face for in-app use.',
                'members': meta,
            },
            indent=2,
            ensure_ascii=False,
        ),
        encoding='utf-8',
    )
    print(f'done: {ok_count} ok, {fail_count} failed')
    print('wrote', att_path.relative_to(ROOT))


if __name__ == '__main__':
    main()
