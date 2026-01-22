import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, Building2, Clock, BadgeIndianRupee, Headphones, MessageCircle, ArrowRight } from 'lucide-react';

const faqs = [
  {
    icon: Building2,
    question: 'What kind of businesses do you work with?',
    answer:
      'Real estate agencies, coaching institutes, clinics, e-commerce sellers, CA/CS firms, event planners — any business drowning in manual work and ready to scale.',
  },
  {
    icon: Clock,
    question: 'How long does it take to build a tool?',
    answer:
      "Depends on complexity. Simple tools: 2-4 weeks. Complex systems: 6-10 weeks. We'll give you a clear timeline upfront — no surprises.",
  },
  {
    icon: BadgeIndianRupee,
    question: "What's the investment?",
    answer:
      "Projects typically range from ₹40K to ₹2L+ depending on scope. We'll discuss your budget on the discovery call and find a solution that works.",
  },
  {
    icon: Headphones,
    question: 'Do you provide support after launch?',
    answer:
      'Absolutely. We offer monthly maintenance & support plans to keep your tool running smooth. We don\'t disappear after delivery.',
  },
  {
    icon: MessageCircle,
    question: 'What if I just need a consultation?',
    answer:
      "Book a call. First consultation is completely free. We'll tell you honestly if you even need us — no hard selling.",
  },
];

export const FAQComponent = () => {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-950/30" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(160 84% 39% / 0.2), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left column - Header (sticky on desktop) */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">FAQ</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Questions?{' '}
                <span className="text-gradient-accent">Answered.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8">
                Everything you need to know before we talk. Still have questions? We're happy to help.
              </p>

              {/* CTA Card */}
              <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
                <p className="text-foreground font-medium mb-2">Can't find what you're looking for?</p>
                <p className="text-zinc-500 text-sm mb-4">Book a free call and we'll answer everything.</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary-light transition-colors group"
                >
                  Book a Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Quick stats */}
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-2xl font-bold text-foreground">24h</p>
                  <p className="text-xs text-zinc-500">Avg. Response</p>
                </div>
                <div className="w-px h-10 bg-zinc-800" />
                <div>
                  <p className="text-2xl font-bold text-foreground">Free</p>
                  <p className="text-xs text-zinc-500">First Consultation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Accordion */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {faqs.map((faq, index) => {
                const Icon = faq.icon;
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="group border border-zinc-800 rounded-2xl bg-zinc-900/30 data-[state=open]:bg-zinc-900/50 data-[state=open]:border-primary/30 transition-all duration-300 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-5 text-left hover:no-underline [&[data-state=open]>div>div>svg]:text-primary [&[data-state=open]>div>span]:text-foreground">
                      <div className="flex items-start gap-4 w-full">
                        <div className="w-10 h-10 rounded-xl bg-zinc-800 group-data-[state=open]:bg-primary/10 border border-zinc-700 group-data-[state=open]:border-primary/20 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                          <Icon className="w-5 h-5 text-zinc-400 group-data-[state=open]:text-primary transition-colors duration-300" />
                        </div>
                        <span className="text-base font-medium text-zinc-300 group-hover:text-foreground transition-colors pr-4">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="pl-14 text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>

            {/* Bottom note */}
            <div className="mt-8 p-5 rounded-2xl bg-zinc-800/30 border border-zinc-800/50 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium">Still have questions?</p>
                <p className="text-zinc-500 text-sm">
                  Reach out at{' '}
                  <a href="mailto:hello@autoflows.com" className="text-primary hover:text-primary-light transition-colors">
                    zyntohouse@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};