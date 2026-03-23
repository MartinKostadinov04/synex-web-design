import { CheckCircle, ClipboardCheck, FolderDown, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { number: "01", icon: ClipboardCheck, title: "Assess Requirements", description: "First and foremost you need to get familiar with the requirements and check your data availability:", items: ["Learn which of your product categories apply to ESPR", "Look at the timeline you need to follow and monitor for updates.", "Note all the datapoints that you need to collect, identify and fill gaps.", "Identify if any changes are needed to your product designs or supply chain to meet all requirements."] },
  { number: "02", icon: FolderDown, title: "Collect & Organize Data", description: "Second step of the process involves mapping your data and designing a schema for collection.", items: ["Map all the data needed for the DPP, how, and where do you collect it.", "Physical data collection should turn digital (at least spreadsheets).", "Repairability information", "Collaborate with suppliers to trace the necessary data."] },
  { number: "03", icon: Link2, title: "Implement & Distribute", description: "Last but not least you need to design a system that operates with all this data and creates functional compliant DPPs.", items: ["Develop all necessary features from data collection, through DPP formatting, to upload and future modification", "Align with all required standards from the EU (security, interoperability, resiliency, etc).", "Design connections to your information systems and tools to collect data from suppliers.", "Integrate your DPPs with the central EU database."] },
];

const PracticalGuideSection = () => (
  <section className="py-24 sm:py-32 bg-background">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Practical Guide to DPPs</h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">In order to get familiar with ESPR Digital Product Passports and integrate them into your supply chain in a compliant and strategic manner, a phased approach is necessary:</p>
      </div>
      <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <span className="text-2xl font-bold text-primary">{step.number}</span>
              <step.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-foreground">{step.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            <ul className="mt-5 flex-1 space-y-3">
              {step.items.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-16 flex justify-center">
        <Button size="lg">Get started with Synex</Button>
      </div>
    </div>
  </section>
);

export default PracticalGuideSection;
