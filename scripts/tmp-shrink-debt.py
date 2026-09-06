"""Shrink the two debt lists, using the gates themselves as the authority.

Each gate prints at most 40 failures then "…and N more", so this runs the gate,
removes exactly the rows it named, and runs it again, until the gate stops naming
rows. It NEVER adds a row: if the gate reports a breach that has no list row --
the "stop and tell me" case -- this prints it and exits 2 without touching a file.
"""
import io, re, subprocess, sys

GATES = {
    "length": {
        "cmd": ["npm", "run", "gate:length"],
        "file": "scripts/gates/length.ts",
        # a row that must GO
        "remove": [re.compile(r"^\s+(\S+) now meets the law — delete it from LEGACY_SHORT\.")],
        # anything else that fails is a row that would have to be ADDED
        "add_hint": "— ",
    },
    "distractor": {
        "cmd": ["npm", "run", "gate:distractor"],
        "file": "scripts/gates/distractor.ts",
        "remove": [
            re.compile(r"^\s+D1 (\S+) is in LEGACY_TELL but the key is no longer the longest — delete it\."),
            re.compile(r"^\s+D2 (\S+) is in LEGACY_OVERSIZE but no longer breaches — delete it\."),
            re.compile(r"^\s+D4 (\S+) now has \d+ options — delete it from LEGACY_OPTION_COUNT\."),
        ],
        "add_hint": None,
    },
}

def run(cmd):
    r = subprocess.run(cmd, capture_output=True, text=True, shell=True, encoding="utf-8", errors="replace")
    return (r.stdout or "") + (r.stderr or "")

def drop_rows(path, keys):
    lines = io.open(path, encoding="utf-8", newline="").read().split("\n")
    out, dropped = [], set()
    for l in lines:
        m = re.match(r'^\s*"([^"]+)",', l)
        if m and m.group(1) in keys:
            dropped.add(m.group(1))
            continue
        out.append(l)
    io.open(path, "w", encoding="utf-8", newline="").write("\n".join(out))
    return dropped

removed_all = {}
for name, g in GATES.items():
    removed = set()
    for _ in range(40):
        text = run(g["cmd"])
        if "all clear" in text:
            break
        keys = set()
        others = []
        for line in text.split("\n"):
            hit = None
            for rx in g["remove"]:
                m = rx.match(line.rstrip("\r"))
                if m:
                    hit = m.group(1)
                    break
            if hit:
                keys.add(hit)
            elif re.match(r"^\s+(D[1-4]|[a-z0-9-]+::|[a-z0-9-]+ )", line.rstrip("\r")):
                others.append(line.rstrip())
        if not keys:
            print(f"\n🔴 {name}: the gate is still failing and NOTHING it named can be deleted.")
            print("   These would need a row ADDED, which the shrink-only rule forbids:")
            for o in others[:15]:
                print("  ", o)
            sys.exit(2)
        got = drop_rows(g["file"], keys)
        missing = keys - got
        if missing:
            print(f"🔴 {name}: the gate named rows that are not in the file: {sorted(missing)[:5]}")
            sys.exit(2)
        removed |= got
        print(f"[shrink] {name}: removed {len(got)} row(s) (running total {len(removed)})")
    removed_all[name] = sorted(removed)

for name, rows in removed_all.items():
    print(f"\n=== {name}: {len(rows)} row(s) removed ===")
    for r in rows:
        print(f"  {r}")
