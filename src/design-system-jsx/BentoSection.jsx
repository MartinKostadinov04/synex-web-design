import { Database, BarChart3, Link2, Plug, FileText } from "lucide-react";

const cards = [
  { icon: Database, label: "Data Management", title: "All your compliance data, one place", desc: "Centralise material compositions, supplier declarations, and regulatory evidence — structured, searchable, and always audit-ready.", span: 3, pos: "tl" },
  { icon: BarChart3, label: "Compliance Tracking", title: "Real-time regulation readiness", desc: "Visual dashboards show exactly where you stand across every requirement — Battery Passport, carbon footprint, due diligence, and more.", span: 3, pos: "tr" },
  { icon: Link2, label: "Supply Chain", title: "End-to-end visibility", desc: "Map your supply chain, manage supplier questionnaires, and track due diligence at every tier.", span: 2, pos: "bl" },
  { icon: Plug, label: "Integrations", title: "Fits into your workflow", desc: "Connect your ERP, PLM, and quality management systems. Synex adapts to you — not the other way around.", span: 2, pos: "" },
  { icon: FileText, label: "Reporting", title: "Audit-ready in one click", desc: "Generate Battery Passport documents, compliance certificates, and regulatory reports instantly.", span: 2, pos: "br" },
];

const roundingMap = {
  tl: { outer: "max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]", inner: "max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]", gradient: "from-primary/10 via-accent to-secondary" },
  tr: { outer: "lg:rounded-tr-[2rem]", inner: "lg:rounded-tr-[calc(2rem+1px)]", gradient: "from-primary/10 via-accent to-secondary" },
  bl: { outer: "lg:rounded-bl-[2rem]", inner: "lg:rounded-bl-[calc(2rem+1px)]", gradient: "from-secondary via-accent to-primary/10" },
  "": { outer: "", inner: "", gradient: "from-secondary to-accent" },
  br: { outer: "max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]", inner: "max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]", gradient: "from-primary/10 via-accent to-secondary" },
};

const colSpanMap = { 2: "lg:col-span-2", 3: "lg:col-span-3" };

const BentoSection = ({ className = "" }) => (
  <section className={`bg-background py-24 sm:py-32 ${className}`}>
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <p className="text-base/7 font-semibold text-primary">Platform</p>
      <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        More than just consulting
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        {cards.map((card) => {
          const r = roundingMap[card.pos];
          return (
            <div key={card.label} className={`relative ${colSpanMap[card.span]}`}>
              <div className={`absolute inset-0 rounded-lg bg-card ${r.outer}`} />
              <div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] ${r.inner}`}>
                <div className={`h-48 sm:h-80 bg-gradient-to-br ${r.gradient} flex items-center justify-center`}>
                  <card.icon className="h-16 w-16 text-primary/40" />
                </div>
                <div className="p-6 sm:p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-primary">{card.label}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground">{card.title}</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">{card.desc}</p>
                </div>
              </div>
              <div className={`pointer-events-none absolute inset-0 rounded-lg shadow outline outline-1 outline-black/5 ${r.outer}`} />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default BentoSection;
