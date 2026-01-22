import { Phone, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Discovery Call',
    description: 'We understand your business, pain points, and goals. No fluff, just real conversation.',
    duration: '30 min',
    highlight: 'Free consultation',
  },
  {
    number: '02',
    icon: Code2,
    title: 'We Build',
    description: 'Custom solution designed & developed specifically for your workflow. You see progress weekly.',
    duration: '2-4 weeks',
    highlight: 'Iterative development',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'You Scale',
    description: 'Launch, iterate, and watch efficiency go up. We stick around for support.',
    duration: 'Ongoing',
    highlight: 'Continuous support',
  },
];

export const HowItWorksComponent = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-950/50" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(160 84% 39% / 0.15), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">How It Works</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Simple. Fast.{' '}
            <span className="text-gradient-accent">No BS.</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl">
            Our process is designed to get you results, not meetings.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line - Desktop with shimmer */}
          <div className="hidden lg:block absolute top-32 left-[10%] right-[10%] h-[2px]">
            <div className="relative w-full h-full">
              {/* Base line */}
              <div className="absolute inset-0 bg-zinc-800" />
              {/* Animated shimmer overlay */}
              <div
                className="absolute inset-0 animate-shimmer"
                style={{
                  background: 'linear-gradient(90deg, transparent, hsl(160 84% 39% / 0.8), hsl(160 84% 50%), hsl(160 84% 39% / 0.8), transparent)',
                  backgroundSize: '200% 100%',
                }}
              />
            </div>
            {/* Glowing dots on the line */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Connecting line - Mobile/Tablet (Vertical) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 md:left-12 w-[2px] bg-zinc-800">
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, hsl(160 84% 39%), hsl(160 84% 39% / 0.3), hsl(160 84% 39%))',
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative fade-in-up pl-20 lg:pl-0"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Mobile step indicator */}
                  <div className="lg:hidden absolute left-0 top-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-lg shadow-primary/50">
                      {step.number}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="group flex flex-col items-center lg:text-center">
                    {/* Desktop icon */}
                    <div className="hidden lg:block relative mb-8">
                      <div className="w-24 h-24 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all duration-300 group-hover:border-primary/30 group-hover:bg-zinc-900/80 group-hover:shadow-lg group-hover:shadow-primary/10">
                        <Icon className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      {/* Step number */}
                      <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg shadow-primary/50 transition-transform duration-300 group-hover:scale-110">
                        {step.number}
                      </span>
                      {/* Pulse ring on hover */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:opacity-0" />
                    </div>

                    {/* Content */}
                    <div className="lg:max-w-xs">
                      {/* Duration badge */}
                      <span className="inline-block px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/50 text-xs text-zinc-400 mb-3">
                        {step.duration}
                      </span>

                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-zinc-500 mb-4 leading-relaxed text-sm lg:text-base">
                        {step.description}
                      </p>

                      {/* Highlight tag */}
                      <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        {step.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Arrow for desktop - BRIGHTER + ANIMATED */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-12 text-primary/60 animate-pulse">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <div className="text-center sm:text-left">
              <p className="text-foreground font-semibold">Ready to get started?</p>
              <p className="text-zinc-500 text-sm">Book your free discovery call today.</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 group"
            >
              Book a Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};