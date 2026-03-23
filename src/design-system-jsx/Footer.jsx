import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navigation = {
  services: [
    { name: "ESPR Consulting", href: "/consulting/espr" },
    { name: "Battery Regulation", href: "/batteryreg" },
    { name: "Digital Product Passports", href: "/platform/dpp" },
    { name: "Battery Pass", href: "/platform/battery-pass" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Partnerships", href: "/partnerships" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Imprint", href: "/imprint" },
  ],
};

const Footer = () => (
  <footer className="border-t border-border bg-secondary/30">
    <div className="container pb-8 pt-16 sm:pt-20 lg:pt-24">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-4">
          <span className="text-xl font-bold text-foreground">Synex</span>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">Simplifying EU Battery Regulation compliance for manufacturers and importers.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 lg:grid-cols-3">
          {Object.entries(navigation).map(([key, items]) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-foreground capitalize">{key}</h3>
              <ul role="list" className="mt-6 space-y-4">
                {items.map((item) => (
                  <li key={item.name}><Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item.name}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Subscribe to our newsletter</h3>
          <p className="mt-2 text-sm text-muted-foreground">The latest news, articles, and resources, sent to your inbox weekly.</p>
        </div>
        <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
          <Input name="email" type="email" required placeholder="Enter your email" autoComplete="email" className="sm:w-56" />
          <div className="mt-4 sm:ml-4 sm:mt-0 sm:shrink-0"><Button type="submit" className="w-full">Subscribe</Button></div>
        </form>
      </div>
      <div className="mt-8 border-t border-border pt-8 md:flex md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} SynexCloud. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
