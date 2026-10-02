import os
import re

REPLACEMENTS = [
    # Primary pitch black base -> Deep Nigerian Green
    ('#040806', '#022115'),
    # Secondary dark card tone -> Deep emerald card tone
    ('#050c08', '#042d1d'),
    # Tertiary elevated tone -> Elevated deep green tone
    ('#070e0a', '#063a26'),
    ('#061009', '#042d1d'),
    ('#09150e', '#063a26'),
    ('#0c100a', '#052f1e'),
    ('#0c1109', '#052f1e'),
    ('from-stone-950', 'from-[#022115]'),
    ('to-stone-950', 'to-[#022115]'),
    ('via-stone-950', 'via-[#042d1d]'),
    ('from-black', 'from-[#022115]'),
    ('to-black', 'to-[#022115]'),
    ('via-black', 'via-[#042d1d]'),
    ('bg-stone-950', 'bg-[#042d1d]'),
]

modified_files = []

for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.tsx', '.ts', '.css')):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fh:
                content = fh.read()
            
            orig = content
            for old, new in REPLACEMENTS:
                content = content.replace(old, new)
            
            if content != orig:
                with open(path, 'w', encoding='utf-8') as fh:
                    fh.write(content)
                modified_files.append(path)

print(f"Updated {len(modified_files)} files with deep green palette:")
for m in modified_files:
    print(" -", m)
