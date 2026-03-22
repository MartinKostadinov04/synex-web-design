import { FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const downloads = [
  {
    id: 1,
    title: "EU Battery Regulation Summary",
    description: "A two-page executive summary of Regulation 2023/1542 obligations and timelines.",
    type: "PDF",
    size: "1.2 MB",
    previewUrl: null,
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "Battery Passport Data Checklist",
    description: "Complete field-by-field checklist for Battery Passport data requirements.",
    type: "XLSX",
    size: "340 KB",
    previewUrl: null,
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "Carbon Footprint Calculation Template",
    description: "Pre-built template aligned with the EU's approved CFD methodology for battery producers.",
    type: "XLSX",
    size: "520 KB",
    previewUrl: null,
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "ESPR Compliance Roadmap",
    description: "Visual timeline of ESPR milestones, delegated acts, and product category deadlines.",
    type: "PDF",
    size: "2.8 MB",
    previewUrl: null,
    downloadUrl: "#",
  },
];

const typeColors: Record<string, string> = {
  PDF: "bg-destructive/10 text-destructive",
  XLSX: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  DOCX: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

const ResourceDownloadsSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base font-semibold text-primary">Downloads</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Templates & Documents
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Ready-to-use resources to accelerate your compliance journey.
          </p>
        </div>

        {/* Download cards grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
            >
              {/* Preview area */}
              <div className="flex h-40 items-center justify-center bg-muted/50">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <FileText className="h-10 w-10 stroke-[1.5]" />
                  <Badge
                    variant="secondary"
                    className={typeColors[item.type] ?? "bg-secondary text-secondary-foreground"}
                  >
                    {item.type}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{item.size}</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
                      <Eye className="h-3.5 w-3.5" />
                      Preview
                    </Button>
                    <Button size="sm" className="gap-1.5 text-xs">
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceDownloadsSection;
