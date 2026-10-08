"""Create web-ready copies of selected photos published on the salon's official site."""

from io import BytesIO
from pathlib import Path
from urllib.request import urlopen
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "pesquisa" / "fotos-site"
OUTPUT = ROOT / "public" / "images"
OUTPUT.mkdir(parents=True, exist_ok=True)

IMAGES = {
    "portrait.jpg": ("daniela-retrato.webp", "9b49c3_ec3b860c341d40e28aeacefe360a645d"),
    "hair2.jpg": ("cabelos-luzes.webp", "9b49c3_27b173872471465583515d20484e4fc8"),
    "hair4.jpg": ("cabelos-castanhos.webp", "9b49c3_fa557b192d0146c4afe9f8c5143f2c57"),
    "hair6.jpg": ("cabelos-ruivos.webp", "9b49c3_d02afe9e8ff14a9cb6fba25f538d6562"),
    "nails3.jpg": ("unhas-delicadas.webp", "9b49c3_a8d0da1993da455ab8edc3f06abe5fef"),
    "lashes2.jpg": ("olhar-cilios.webp", "9b49c3_a41cf8eb81ce45028b327b6285870cee"),
    "logo.jpg": ("marca-original.webp", "9b49c3_6ff87247dcac4ff082c0adaaecdba5d3"),
}

for source_name, (output_name, wix_id) in IMAGES.items():
    source_path = SOURCE / source_name
    if source_path.exists():
        image_source = source_path
    else:
        url = f"https://static.wixstatic.com/media/{wix_id}~mv2.jpg"
        with urlopen(url, timeout=30) as response:
            image_source = BytesIO(response.read())
    with Image.open(image_source) as image:
        image.convert("RGB").save(OUTPUT / output_name, "WEBP", quality=86, method=6)
        print(f"{output_name}: {image.width}x{image.height}")
