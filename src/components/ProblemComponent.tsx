import { AlertCircle, Clock, Eye, MessageSquare, TrendingDown } from 'lucide-react';

const painPoints = [
  {
    icon: AlertCircle,
    title: 'Leads slipping through cracks',
    description: 'No system to track who needs follow-up. Deals die in silence.',
    stat: '23%',
    statLabel: 'leads lost on average',
    color: 'red',
  },
  {
    icon: Clock,
    title: 'Hours wasted on manual data entry',
    description: 'Copy-pasting between WhatsApp, Excel, and email. Every. Single. Day.',
    stat: '3hrs',
    statLabel: 'wasted daily',
    color: 'orange',
  },
  {
    icon: Eye,
    title: 'No visibility into operations',
    description: "Can't answer simple questions without digging through 10 spreadsheets.",
    stat: '0',
    statLabel: 'real-time insights',
    color: 'yellow',
  },
  {
    icon: MessageSquare,
    title: 'Team drowning in WhatsApp & Excel',
    description: 'Critical info buried in chat threads. Nothing is searchable.',
    stat: '47',
    statLabel: 'groups to check daily',
    color: 'red',
  },
];

const colorMap = {
  red: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    text: 'text-red-400',
    glow: 'shadow-red-500/20',
    gradient: 'from-red-500/20',
  },
  orange: {
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    text: 'text-orange-400',
    glow: 'shadow-orange-500/20',
    gradient: 'from-orange-500/20',
  },
  yellow: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    text: 'text-yellow-400',
    glow: 'shadow-yellow-500/20',
    gradient: 'from-yellow-500/20',
  },
};

export const ProblemComponent = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(0 70% 50% / 0.15), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(30 90% 50% / 0.15), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <TrendingDown className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-400">The Problem</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Still running your business on{' '}
            <span className="relative">
              <span className="text-red-400">spreadsheets?</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C40 1 80 1 100 5.5C120 10 160 3 199 5.5" stroke="rgb(248 113 113)" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
              </svg>
            </span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl">
            You're not alone. Here's what we hear <span className="text-foreground font-medium">every single day.</span>
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {painPoints.map((point, index) => {
            const colors = colorMap[point.color as keyof typeof colorMap];

            return (
              <div
                key={index}
                className={`
                  group relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 
                  hover:border-zinc-700 hover:bg-zinc-900/80
                  transition-all duration-300 hover:-translate-y-1
                  ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
                  ${index === 3 ? 'md:col-span-2 lg:col-span-1' : ''}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`
                    w-14 h-14 rounded-xl ${colors.bg} border ${colors.border}
                    flex items-center justify-center mb-5
                    shadow-lg ${colors.glow}
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <point.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                    {point.description}
                  </p>

                  {/* Stat */}
                  <div className="flex items-baseline gap-2 pt-4 border-t border-zinc-800">
                    <span className={`text-2xl font-bold ${colors.text}`}>
                      {point.stat}
                    </span>
                    <span className="text-xs text-zinc-600 uppercase tracking-wide">
                      {point.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-sm">
            Sound familiar?{' '}
            <a href="#contact" className="text-primary hover:text-primary-light underline underline-offset-4 transition-colors">
              Let's fix it →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};