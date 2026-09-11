"""Generate PNG app icons for Korean SRS PWA using only stdlib (zlib)."""
import struct
import zlib

CHARCOAL = (24, 24, 27)
PINK = (244, 63, 94)
RED = (220, 38, 38)
BG = (248, 249, 250)
WHITE = (255, 255, 255)
RING = (226, 232, 240)


def png_chunk(tag, data):
    payload = tag + data
    return (
        struct.pack(">I", len(data))
        + payload
        + struct.pack(">I", zlib.crc32(payload) & 0xFFFFFFFF)
    )


def write_png(path, size, pixel_fn):
    raw = b""
    for y in range(size):
        raw += b"\x00"
        for x in range(size):
            raw += bytes(pixel_fn(x, y, size))
    ihdr = struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)
    png = b"\x89PNG\r\n\x1a\n"
    png += png_chunk(b"IHDR", ihdr)
    png += png_chunk(b"IDAT", zlib.compress(raw, 9))
    png += png_chunk(b"IEND", b"")
    with open(path, "wb") as f:
        f.write(png)


def make_icon(size, maskable=False):
    if maskable:
        start = 0.0
        end = 1.0
        bg = RED
    else:
        start = 0.08
        end = 0.92
        bg = BG

    def pixel(x, y, n):
        # normalized coords nominally within [0,1]
        nx = (x + 0.5) / n
        ny = (y + 0.5) / n
        if nx < start or nx > end or ny < start or ny > end:
            return bg
        cx = (nx - start) / (end - start)
        cy = (ny - start) / (end - start)
        r = 0.17
        # three circles arranged around center
        centers = [(0.5, 0.36), (0.36, 0.62), (0.64, 0.62)]
        colors = [CHARCOAL, PINK, RED]
        coverage = 0.0
        inside = False
        for i, (ocx, ocy) in enumerate(centers):
            d2 = (cx - ocx) ** 2 + (cy - ocy) ** 2
            if d2 <= r * r:
                inside = True
                # approximate feather
                cov = max(0.0, min(1.0, (r * r - d2) / (r * 0.06)))
                coverage = max(coverage, cov)
                # sample nearest circle color weighted by coverage
        if inside:
            # pick color of circle with max coverage
            best = 0
            best_cov = -1
            for i, (ocx, ocy) in enumerate(centers):
                d2 = (cx - ocx) ** 2 + (cy - ocy) ** 2
                if d2 <= r * r:
                    cov = max(0.0, min(1.0, (r * r - d2) / (r * 0.06)))
                    if cov > best_cov:
                        best_cov = cov
                        best = i
            # blend white ring around circles via light mix
            ring_d = min(
                abs(((cx - 0.5) ** 2 + (cy - 0.36 - 0) ** 2) ** 0.5 - r)
                for _ in [0]
            )
            base = colors[best]
            # apply feather to background
            if best_cov < 1:
                base = tuple(
                    int(base[k] * best_cov + bg[k] * (1 - best_cov)) for k in range(3)
                )
            # center dot
            if (cx - 0.5) ** 2 + (cy - 0.5) ** 2 <= 0.05 ** 2:
                return WHITE
            return base
        return bg

    return pixel


import os

os.makedirs("/Users/katekupav/projects/korean-srs-web/public/icons", exist_ok=True)

for size in (192, 512):
    write_png(
        f"/Users/katekupav/projects/korean-srs-web/public/icons/icon-{size}.png",
        size,
        make_icon(size),
    )

print("icons written")