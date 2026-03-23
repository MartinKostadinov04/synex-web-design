import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg px-6 bg-card transition-shadow" data-state={open ? "open" : "closed"}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left text-foreground font-medium py-5">
        {question}
        <svg className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && <div className="text-muted-foreground leading-relaxed pb-5">{answer}</div>}
    </div>
  );
};

const FAQSection = ({ title = "Frequently asked questions", subtitle, faqs, className = "" }) => (
  <section className={`py-20 bg-background ${className}`}>
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{title}</h2>
        {subtitle && <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">{subtitle}</p>}
      </div>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
