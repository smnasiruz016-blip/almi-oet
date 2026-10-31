// RR-355 · an AlmiVisibility page renders inside AlmiOET's own layout: only its <main> content is shown, made safe; its title,
// description, canonical and JSON-LD become the route's metadata. Every assertion is paired with its opposite input.
import { describe, expect, it } from "vitest";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { readVisibilityPage, visibilitySlugs, visibilityPage } from "@/lib/visibility-pages";

const PAGE = `<!doctype html><html lang="en"><head><title>A test page about fees</title><meta name="description" content="Fees &amp; centres, in short.">
<link rel="canonical" href="https://example.test/a-test-page"><script type="application/ld+json">{"@type":"Article"}</script><script>alert(1)</script></head>
<body><header data-site-shell>the site's header</header><p class="stamp">Draft stamp</p><main class="av-page"><style data-av-content>.av-page h1{margin:0}</style><h1 onclick="x()">A test page</h1><p>Body text.</p><a href="javascript:evil()">x</a><script>bad()</script></main><footer data-site-shell>the site's footer</footer></body></html>`;

describe("readVisibilityPage", () => {
  const p = readVisibilityPage("a-test-page", PAGE)!;
  it("keeps the page's title, description, canonical and JSON-LD", () => {
    expect(p.title).toBe("A test page about fees");
    expect(p.description).toBe("Fees & centres, in short.");
    expect(p.canonical).toBe("https://example.test/a-test-page");
    expect(p.jsonLd).toEqual(['{"@type":"Article"}']);
  });
  it("shows ONLY the content of <main> — never the file's own header, footer or stamp (the site's layout gives those)", () => {
    expect(p.main).toContain("<h1");
    expect(p.main).toContain("Body text.");
    expect(p.main).toContain("data-av-content");
    expect(p.main).not.toContain("the site's header");
    expect(p.main).not.toContain("the site's footer");
    expect(PAGE).toContain("the site's header"); // the opposite: the file does hold them
  });
  it("runs no code: scripts, event handlers and javascript: links are taken out", () => {
    expect(p.main).not.toMatch(/<script|onclick|javascript:/i);
    expect(PAGE).toMatch(/<script>bad\(\)|onclick|javascript:/); // they were there
  });
  it("refuses a page without <main> or <title>, and a slug that is not a plain page name", () => {
    expect(readVisibilityPage("a-test-page", PAGE.replace(/<\/?main[^>]*>/g, ""))).toBeNull();
    expect(readVisibilityPage("a-test-page", PAGE.replace(/<title>[^<]*<\/title>/, ""))).toBeNull();
    expect(readVisibilityPage("../etc", PAGE)).toBeNull();
    expect(readVisibilityPage("a-test-page", PAGE)).not.toBeNull();
  });
});

describe("visibilitySlugs / visibilityPage", () => {
  it("lists only folders with an index.html, and none when the folder is absent", () => {
    const root = mkdtempSync(join(tmpdir(), "vp-"));
    expect(visibilitySlugs(root)).toEqual([]);
    mkdirSync(join(root, "visibility-pages", "oet-in-pakistan"), { recursive: true });
    mkdirSync(join(root, "visibility-pages", "empty-folder"), { recursive: true });
    writeFileSync(join(root, "visibility-pages", "oet-in-pakistan", "index.html"), PAGE);
    expect(visibilitySlugs(root)).toEqual(["oet-in-pakistan"]);
    expect(visibilityPage("oet-in-pakistan", root)?.title).toBe("A test page about fees");
    expect(visibilityPage("empty-folder", root)).toBeNull();
  });
});
