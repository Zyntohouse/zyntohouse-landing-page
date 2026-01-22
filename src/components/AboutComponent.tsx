import { Target, TrendingUp, Zap, Users, Code2, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react';

const differentiators = [
  {
    icon: Target,
    title: 'Business-First Thinking',
    description: "We don't just code — we think ROI, efficiency, and growth. Every feature has a purpose.",
  },
  {
    icon: Zap,
    title: 'Fast & Lean Execution',
    description: 'No bloated teams. No endless meetings. Just focused work that ships in weeks, not months.',
  },
  {
    icon: Users,
    title: 'You Talk to Builders',
    description: 'No account managers. You work directly with the people who build your product.',
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered', icon: Code2 },
  { value: '100%', label: 'Client Satisfaction', icon: CheckCircle2 },
  { value: '3x', label: 'Avg. Efficiency Gain', icon: TrendingUp },
];

export const AboutComponent = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full opacity-15 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, hsl(160 84% 39% / 0.2), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(45 100% 60% / 0.15), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Why Zyntohouse</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            We're Not a Typical{' '}
            <span className="text-gradient-accent">Agency</span>
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Story */}
          <div>
            <div className="space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                Most agencies sell you a website. We build you a{' '}
                <span className="text-foreground font-semibold">competitive advantage</span>.
              </p>

              <p className="text-zinc-400 leading-relaxed">
                With a background in both business and tech, we speak two languages
                — the language of code, and the language of growth. We don't just ask "how to build it"
                — we ask <span className="text-foreground">"why does this matter for your bottom line?"</span>
              </p>

              <p className="text-zinc-400 leading-relaxed">
                We've seen businesses drown in spreadsheets, lose leads to slow follow-ups, and waste
                hours on manual tasks. That's why we exist — to build the internal tools that let you
                focus on what actually grows your business.
              </p>

              {/* Key values */}
              <div className="flex flex-wrap gap-3 pt-4">
                {['ROI-Focused', 'Fast Delivery', 'No BS', 'Long-term Support'].map((value, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/80 border border-zinc-700/50 text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Founder card */}
          <div className="relative">
            {/* Glow behind card */}
            <div
              className="absolute inset-0 -m-4 rounded-3xl"
              style={{
                background: 'radial-gradient(ellipse at center, hsl(160 84% 39% / 0.1), transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            <div className="relative p-8 rounded-3xl border border-zinc-800 bg-zinc-900/50">
              {/* Profile */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-zinc-800">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center shadow-lg shadow-primary/10">
                  <span className="text-2xl font-bold text-primary">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Sahil Ladhania</h3>
                  <p className="text-zinc-500">Founder, Zyntohouse</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-zinc-400 italic mb-6 leading-relaxed">
                "I started Zyntohouse because I saw too many businesses struggling with tools that weren't
                built for them. Generic software forces you to change how you work.
                <span className="text-foreground not-italic font-medium"> I believe your tools should adapt to you, not the other way around.</span>"
              </p>

              {/* Background badges */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-zinc-800 text-xs text-zinc-400">
                  Software Engineer
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-zinc-800 text-xs text-zinc-400">
                  Builder
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:border-primary/30 hover:bg-zinc-900/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-10">
          {/* Gradient top border */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-gradient-accent mb-1">{stat.value}</p>
                  <p className="text-sm text-zinc-500">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-zinc-500 mb-4">
            Ready to build something that actually works for your business?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium transition-colors group"
          >
            Let's talk
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};