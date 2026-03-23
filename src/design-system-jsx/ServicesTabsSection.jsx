import { useState } from "react";
import { FileText, BarChart3, ShieldCheck, Recycle } from "lucide-react";

const tabs = [
  { value: "passport", label: "Battery Passport", icon: FileText, title: "Digital Battery Passport Setup", description: "We help you design and implement a fully compliant digital battery passport — covering unique identifiers, material composition, carbon footprint data, and supply chain traceability.", features: ["Unique battery identifier management", "Material composition tracking", "QR code and data carrier integration", "Interoperability with EU systems"] },
  { value: "carbon", label: "Carbon Footprint", icon: BarChart3, title: "Carbon Footprint Declaration", description: "Calculate and declare the carbon footprint of your batteries across the entire lifecycle. We align your methodology with the EU's delegated acts.", features: ["Lifecycle assessment (LCA) support", "Scope 1, 2 & 3 emissions mapping", "Performance class benchmarking", "Third-party verification preparation"] },
  { value: "diligence", label: "Due Diligence", icon: ShieldCheck, title: "Supply Chain Due Diligence", description: "Establish robust due diligence policies for raw material sourcing aligned with OECD frameworks and EU requirements.", features: ["Raw material risk assessment", "Supplier audit framework", "Grievance mechanism setup", "Annual reporting templates"] },
  { value: "recycling", label: "Recycled Content", icon: Recycle, title: "Recycled Content Compliance", description: "Meet the EU's recycled content targets for cobalt, lithium, nickel, and lead.", features: ["Recycled content calculation methodology", "Material flow documentation", "Supplier certification tracking", "Target roadmap planning"] },
];

const ServicesTabsSection = ({ withImage = false, data, className = "" }) => {
  const tabsData = data ?? tabs;
  const [active, setActive] = useState(tabsData[0]?.value);
  const activeTab = tabsData.find((t) => t.value === active);

  return (
    <section className={`py-20 bg-secondary/40 ${className}`}>
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What can we do for you?</h2>
          <p className="text-muted-foreground leading-relaxed">Our services cover every pillar of the EU Battery Regulation. Choose an area to learn more.</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-1 bg-secondary p-1 rounded-lg">
            {tabsData.map((tab) => (
              <button key={tab.value} onClick={() => setActive(tab.value)} className={`gap-1.5 text-xs md:text-sm py-2.5 rounded-md flex items-center justify-center ${active === tab.value ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
          {activeTab && (
            <div className="mt-6 rounded-lg border border-border bg-card p-6 md:p-8">
              <div className={withImage && activeTab.image ? "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" : ""}>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{activeTab.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{activeTab.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeTab.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {withImage && activeTab.image && (
                  <div className="rounded-lg overflow-hidden border border-border bg-muted">
                    <img src={activeTab.image} alt={activeTab.title} className="w-full h-auto object-cover" loading="lazy" />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesTabsSection;
