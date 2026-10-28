const FEEDS = [
  { name: "Moti Health", url: "https://health.themotigroup.co.in/feeds/posts/default?alt=rss" },
  { name: "Moti TechLab", url: "https://techlab.themotigroup.co.in/feeds/posts/default?alt=rss" },
  { name: "Moti Finance", url: "https://financial.themotigroup.co.in/feeds/posts/default?alt=rss" },
  { name: "Moti Dealz", url: "https://dealz.themotigroup.co.in/feeds/posts/default?alt=rss" },
];

export const revalidate = 900;

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

function tag(item: string, name: string) {
  const match = item.match(new RegExp(String.raw`<${name}(?:\s[^>]*)?>([\s\S]*?)</${name}>`, "i"));
  return match ? decodeXml(match[1]).trim() : "";
}

function safeUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : null;
  } catch { return null; }
}

export async function GET() {
  const results = await Promise.allSettled(FEEDS.map(async (feed) => {
    const response = await fetch(feed.url, {
      headers: { "User-Agent": "TheMotiGroupBlogFeed/1.0" },
      next: { revalidate: 900 },
    });
    if (!response.ok) throw new Error("Feed request failed");
    const xml = await response.text();
    return [...xml.matchAll(/<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/gi)].map((match) => {
      const item = match[1];
      const title = tag(item, "title").replace(/<[^>]*>/g, "").trim();
      const link = safeUrl(tag(item, "link"));
      const rawDescription = tag(item, "description") || tag(item, "content:encoded");
      const imageMatch = rawDescription.match(/<img[^>]+src=["']([^"']+)["']/i);
      const image = imageMatch ? safeUrl(decodeXml(imageMatch[1])) : null;
      const description = rawDescription.replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 220);
      return { title, link, source: feed.name, date: tag(item, "pubDate"), description, image };
    }).filter((post) => post.title && post.link);
  }));
  const posts = results.flatMap((result) => result.status === "fulfilled" ? result.value : []);
  const limits: Record<string, number> = {
    "Moti Health": 4,
    "Moti TechLab": 4,
    "Moti Finance": 3,
    "Moti Dealz": 1,
  };
  const grouped = FEEDS.map((feed) =>
    posts
      .filter((post) => post.source === feed.name)
      .sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0))
      .slice(0, limits[feed.name] ?? 0)
  );
  const mixedPosts = Array.from({ length: 4 }, (_, index) =>
    grouped.flatMap((group) => group[index] ? [group[index]] : [])
  ).flat().slice(0, 12);
  return Response.json(mixedPosts, {
    headers: { "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600" },
  });
}
