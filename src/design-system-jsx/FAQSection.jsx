import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = ({ title = "Frequently asked questions", subtitle, faqs, className = "" }) => (
  <section className={`py-20 bg-background ${className}`}>
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{title}</h2>
        {subtitle && <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">{subtitle}</p>}
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-border rounded-lg px-6 bg-card"
          >
            <AccordionTrigger className="font-medium text-foreground py-5 hover:no-underline text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
