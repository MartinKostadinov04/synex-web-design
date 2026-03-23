import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const allPosts = [
  { id: 1, title: "Understanding the EU Battery Regulation: What Manufacturers Need to Know", href: "/resources/eu-battery-regulation", description: "A practical overview of the key obligations under Regulation 2023/1542.", date: "Mar 16, 2025", category: "Battery Regulation", author: { name: "Synex Team", role: "Compliance Advisory" } },
  { id: 2, title: "ESPR Compliance: Digital Product Passports and What's Coming in 2026", href: "/resources/espr-compliance", description: "The Ecodesign for Sustainable Products Regulation is reshaping how products are documented and traded in the EU.", date: "Feb 28, 2025", category: "ESPR", author: { name: "Synex Team", role: "Regulatory Insights" } },
  { id: 3, title: "Carbon Footprint Declarations: A Step-by-Step Guide", href: "/resources/carbon-footprint-guide", description: "From data collection to calculation methodology.", date: "Jan 15, 2025", category: "Guides", author: { name: "Synex Team", role: "Technical Guides" } },
  { id: 4, title: "Supply Chain Due Diligence Under the Battery Regulation", href: "/resources/supply-chain-due-diligence", description: "An overview of due diligence obligations for raw materials sourcing.", date: "Dec 10, 2024", category: "Battery Regulation", author: { name: "Synex Team", role: "Compliance Advisory" } },
  { id: 5, title: "How Digital Product Passports Will Transform the Textile Industry", href: "/resources/dpp-textiles", description: "Textiles are among the first product categories targeted by ESPR.", date: "Nov 22, 2024", category: "ESPR", author: { name: "Synex Team", role: "Regulatory Insights" } },
  { id: 6, title: "Battery Passport Data Requirements: Complete Checklist", href: "/resources/battery-passport-checklist", description: "A comprehensive checklist of every data point required for EU Battery Passports.", date: "Oct 05, 2024", category: "Guides", author: { name: "Synex Team", role: "Technical Guides" } },
];

const categories = ["All", ...Array.from(new Set(allPosts.map((p) => p.category)))];
const POSTS_PER_PAGE = 3;
const categoryColors = { "Battery Regulation": "bg-primary/10 text-primary", ESPR: "bg-accent text-accent-foreground", Guides: "bg-secondary text-secondary-foreground" };

const ResourceBlogSection = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filtered = useMemo(() => allPosts.filter((post) => {
    const matchesSearch = search === "" || post.title.toLowerCase().includes(search.toLowerCase()) || post.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  }), [search, activeCategory]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base font-semibold text-primary">From the blog</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Latest Resources</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">Learn how to grow your compliance practice with our expert advice.</p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl lg:max-w-none">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search articles…" value={search} onChange={(e) => { setSearch(e.target.value); setVisibleCount(POSTS_PER_PAGE); }} className="pl-9" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button key={cat} onClick={() => { setActiveCategory(cat); setVisibleCount(POSTS_PER_PAGE); }} className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>{cat}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {visible.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-muted-foreground">{post.date}</time>
                <span className={`relative z-10 rounded-full px-3 py-1.5 font-medium ${categoryColors[post.category] ?? "bg-secondary text-secondary-foreground"}`}>{post.category}</span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  <Link to={post.href}><span className="absolute inset-0" />{post.title}</Link>
                </h3>
                <p className="mt-4 line-clamp-3 text-sm text-muted-foreground leading-relaxed">{post.description}</p>
              </div>
              <div className="relative mt-6 flex items-center gap-x-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"><span className="text-xs font-bold text-primary">S</span></div>
                <div className="text-sm"><p className="font-semibold text-foreground">{post.author.name}</p><p className="text-muted-foreground">{post.author.role}</p></div>
              </div>
            </article>
          ))}
        </div>
        {visible.length === 0 && <p className="mt-12 text-center text-muted-foreground">No articles match your search.</p>}
        {hasMore && <div className="mt-16 flex justify-center"><Button variant="outline" onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}>Load more articles</Button></div>}
      </div>
    </section>
  );
};

export default ResourceBlogSection;
