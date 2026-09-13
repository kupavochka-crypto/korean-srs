"""Generate PNG app icons — Woori lettermark (W + 우) on red rounded square."""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "icons"
RED = (220, 38, 38)
WHITE = (255, 255, 255)

FONT_LATIN = "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"
FONT_KOREAN = "/System/Library/Fonts/AppleSDGothicNeo.ttc"


def rounded_rect_mask(size: int, radius: float) -> Image.Image:
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=255)
    return mask


def draw_lettermark(size: int, *, maskable: bool) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    inset = 0 if maskable else int(size * 0.08)
    box = (inset, inset, size - inset - 1, size - inset - 1)
    radius = int((size - inset * 2) * 0.22)
    draw.rounded_rectangle(box, radius=radius, fill=RED)

    inner = size - inset * 2
    w_font = ImageFont.truetype(FONT_LATIN, max(12, int(inner * 0.34)))
    ko_font = ImageFont.truetype(FONT_KOREAN, max(10, int(inner * 0.22)))

    cx = size / 2
    w_y = inset + inner * 0.42
    ko_y = inset + inner * 0.72

    draw.text((cx, w_y), "W", font=w_font, fill=WHITE, anchor="mm")
    draw.text((cx, ko_y), "우", font=ko_font, fill=WHITE, anchor="mm")
    return img


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for size in (192, 512):
        img = draw_lettermark(size, maskable=False)
        img.save(OUT / f"icon-{size}.png", format="PNG")
    mask = draw_lettermark(512, maskable=True)
    mask.save(OUT / "icon-maskable-512.png", format="PNG")
    mask.save(OUT / "apple-touch-icon.png", format="PNG")
    print("icons written:", OUT)


if __name__ == "__main__":
    main()
