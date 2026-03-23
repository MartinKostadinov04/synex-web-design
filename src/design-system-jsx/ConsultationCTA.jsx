import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ConsultationCTA = () => (
  <section className="py-20">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center space-y-5">
        <h2 className="text-3xl font-bold text-foreground">Get a free consultation</h2>
        <p className="text-muted-foreground leading-relaxed">Not sure where you stand with the EU Battery Regulation? Let's assess your compliance gaps together — no commitment required.</p>
        <Button size="lg" className="gap-2">
          Schedule a Call <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </section>
);

export default ConsultationCTA;
