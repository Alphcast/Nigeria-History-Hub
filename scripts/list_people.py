import re
import os

files = ['src/data/people.ts', 'src/data/morePeople.ts', 'src/data/presidents.ts', 'src/data/regionalHistory.ts']

all_people = []

for fn in files:
    if not os.path.exists(fn):
        print(f"File {fn} does not exist!")
        continue
    with open(fn, 'r') as f:
        content = f.read()
    
    # Match patterns with id, name
    # Let's extract blocks
    items = re.findall(r"id:\s*['\"]([^'\"]+)['\"].*?name:\s*['\"]([^'\"]+)['\"].*?(portraitUrl|photoUrl):\s*['\"]([^'\"]+)['\"]", content, re.DOTALL)
    print(f"=== {fn}: {len(items)} items ===")
    for item_id, name, img_field, url in items:
        all_people.append({
            "file": fn,
            "id": item_id,
            "name": name,
            "field": img_field,
            "url": url
        })
        print(f"  [{item_id}] {name} -> {url[:60]}")

print(f"\nTotal: {len(all_people)} entries")
