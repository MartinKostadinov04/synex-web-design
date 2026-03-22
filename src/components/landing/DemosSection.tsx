import { ArrowRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const demos = [
  {
    id: 1,
    title: "Synex T-shirt",
    description:
      "Digital Product Passport focused on telling product's story, composition and how to take care for it.",
    href: "/demos/tshirt",
    productLabel: "T-shirt",
    uniqueId: "2316022d-21mf-4667…",
    location: "Plovdiv, Bulgaria",
  },
  {
    id: 2,
    title: "Synex Car Battery",
    description:
      "DPP focused on functionality, simplified maintenance and end-of-life handling above compliance standards.",
    href: "/demos/battery",
    productLabel: "Car Battery",
    uniqueId: "2316022d-21mf-4667…",
    location: "Plovdiv, Bulgaria",
  },
  {
    id: 3,
    title: "Synex Sofa",
    description:
      "DPP aiming at more than compliance — getting the customer closer to the product through its story.",
    href: "/demos/sofa",
    productLabel: "Sofa",
    uniqueId: "2316022d-21mf-4667…",
    location: "Plovdiv, Bulgaria",
  },
];

const PhoneMockup = ({ label, uniqueId, location }: { label: string; uniqueId: string; location: string }) => (
  <div className="relative mx-auto w-52 sm:w-56">
    {/* Phone frame */}
    <div className="rounded-[2.5rem] border-[6px] border-foreground bg-foreground p-1 shadow-xl">
      {/* Notch */}
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground" />

      {/* Screen */}
      <div className="overflow-hidden rounded-[2rem] bg-muted">
        {/* Status bar area */}
        <div className="flex items-center justify-between px-5 pt-8 pb-3">
          {/* Brand mark */}
          <div className="flex h-7 w-7 items-center justify-center">
            <div className="h-5 w-5 rotate-45 rounded-sm bg-primary" />
          </div>
          <Menu className="h-5 w-5 text-muted-foreground" />
        </div>

        {/* Product visual area */}
        <div className="flex h-44 items-center justify-center px-4">
          <div className="flex flex-col items-center gap-1 text-muted-foreground">
            <div className="h-16 w-16 rounded-full bg-muted-foreground/10 flex items-center justify-center">
              <span className="text-xs font-medium text-muted-foreground/60">
                {label}
              </span>
            </div>
            <span className="text-[10px] font-medium tracking-wide text-muted-foreground/50">
              synex
            </span>
          </div>
        </div>

        {/* Data rows */}
        <div className="border-t border-border/50 px-4 py-2.5">
          <div className="grid grid-cols-2 gap-x-3 text-[9px]">
            <div>
              <p className="text-muted-foreground/60">Unique ID:</p>
              <p className="font-medium text-foreground/80 truncate">{uniqueId}</p>
            </div>
            <div>
              <p className="text-muted-foreground/60">Manufactured in:</p>
              <p className="font-medium text-foreground/80">{location}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 px-4 py-2.5">
          <div className="grid grid-cols-2 gap-x-3 text-[9px]">
            <div>
              <p className="text-muted-foreground/60">Manufacturing Date:</p>
            </div>
            <div>
              <p className="text-muted-foreground/60">Product Size</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DemosSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold text-primary">Demos</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Want to see how it looks?
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              {/* Phone mockup area */}
              <div className="flex justify-center bg-muted/40 px-6 pt-10 pb-6">
                <PhoneMockup
                  label={demo.productLabel}
                  uniqueId={demo.uniqueId}
                  location={demo.location}
                />
              </div>

              {/* Text content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-foreground">{demo.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {demo.description}
                </p>
                <Link
                  to={demo.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  View DPP
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemosSection;
