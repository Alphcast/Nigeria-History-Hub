import os
import re

for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith('.ts') or f.endswith('.tsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
                matches = re.findall(r'https://images\.unsplash\.com/[^\s\'"`]+', content)
                if matches:
                    print(f"{path}: {len(matches)} unsplash images")
