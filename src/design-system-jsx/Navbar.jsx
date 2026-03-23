import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Consulting", dropdown: [{ category: "Consulting Services", items: [{ label: "ESPR", href: "/consulting/espr" }, { label: "Battery Regulation", href: "/batteryreg" }] }] },
  { label: "Platform", dropdown: [{ category: "Product passports", items: [{ label: "Digital Product Passports", href: "/platform/dpp" }, { label: "Battery Pass", href: "/platform/battery-pass" }] }] },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Resources", dropdown: [{ category: "About regulation", items: [{ label: "Digital product passports", href: "/resources/dpp" }, { label: "Knowledge center", href: "/resources/knowledge" }] }] },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex-shrink-0 text-xl font-bold text-foreground">Synex</Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => item.dropdown ? (
            <div key={item.label} className="relative" onMouseEnter={() => setActiveDropdown(item.label)} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md transition-colors">
                {item.label} <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {activeDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="bg-background rounded-xl border border-border shadow-lg p-6 min-w-[400px]">
                    {item.dropdown.map((cat) => (
                      <div key={cat.category}>
                        <span className="text-sm font-medium text-foreground">{cat.category}</span>
                        <div className="mt-3 space-y-2">
                          {cat.items.map((sub) => (
                            <Link key={sub.href} to={sub.href} onClick={() => setActiveDropdown(null)} className="block text-sm text-primary hover:underline">{sub.label}</Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link key={item.label} to={item.href} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md transition-colors">{item.label}</Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm">Log in</Button>
          <Button size="sm">Sign up</Button>
        </div>

        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background p-4 space-y-2">
          {navItems.map((item) => item.href ? (
            <Link key={item.label} to={item.href} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg">{item.label}</Link>
          ) : (
            <div key={item.label}>
              <span className="block px-4 py-3 text-base font-medium text-foreground">{item.label}</span>
              {item.dropdown?.map((cat) => cat.items.map((sub) => (
                <Link key={sub.href} to={sub.href} onClick={() => setMobileOpen(false)} className="block px-8 py-2 text-sm text-muted-foreground hover:text-primary">{sub.label}</Link>
              )))}
            </div>
          ))}
          <div className="pt-4 border-t border-border space-y-2">
            <Button variant="outline" className="w-full">Log in</Button>
            <Button className="w-full">Sign up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
