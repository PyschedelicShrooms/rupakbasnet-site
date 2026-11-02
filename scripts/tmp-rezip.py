"""Rebuild the upload bundle with POSIX-style (forward slash) entry names.

Windows' Compress-Archive writes backslashes into zip entry names, which
extractors on Linux treat as part of the filename -- so nested folders
silently produce no files. Python's zipfile writes forward slashes.
"""

import os
import sys
import zipfile

SRC = r"E:\Work\dist\client"
OUT = r"E:\Work\dist\portfolio-site.zip"

old = zipfile.ZipFile(OUT)
old_names = old.namelist()
print("old entries:", len(old_names))
print("old entries containing backslash:", sum("\\" in n for n in old_names))
for n in old_names[:5]:
    print("   ", repr(n))
old.close()

files = []
for root, dirs, names in os.walk(SRC):
    for name in names:
        full = os.path.join(root, name)
        rel = os.path.relpath(full, SRC).replace(os.sep, "/")
        files.append((full, rel))

files.sort(key=lambda pair: pair[1])

with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as z:
    for full, rel in files:
        z.write(full, arcname=rel)

check = zipfile.ZipFile(OUT)
names = check.namelist()
print("new entries:", len(names))
print("new entries containing backslash:", sum("\\" in n for n in names))
print("bad archive:", check.testzip())
for n in names[:6]:
    print("   ", n)
for wanted in ("index.html", "_redirects", "media/hero.mp4", "assets/index-DaF8eaJy.js"):
    print(f"contains {wanted}:", wanted in names)
check.close()
print("size bytes:", os.path.getsize(OUT))
