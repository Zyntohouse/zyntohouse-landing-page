import { ArrowRight, CheckCircle2, TrendingUp, Users, Clock, Quote, Building2, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

export const CaseStudyComponent = () => {
  return (
    <section id="case-study" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(160 84% 39% / 0.3), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(200 80% 50% / 0.2), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Case Study</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            From Chaos to{' '}
            <span className="text-gradient-accent">Clarity</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl">
            See how we transformed operations for TBK Villas
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Card */}
          <div
            className="relative rounded-3xl border border-zinc-800 bg-zinc-900/50 overflow-hidden"
          >
            {/* Gradient border glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-50"
              style={{
                background: 'linear-gradient(135deg, hsl(160 84% 39% / 0.15), transparent 40%, transparent 60%, hsl(160 84% 39% / 0.1))',
              }}
            />

            <div className="relative z-10 p-8 md:p-12">
              {/* Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 pb-8 border-b border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center shadow-lg shadow-primary/10">
                    <span className="text-2xl font-bold text-primary">T</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">TBK Villas</h3>
                    <p className="text-zinc-500">Premium Real Estate • Goa, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                    ✓ Verified Results
                  </span>
                </div>
              </div>

              {/* Before/After Stats Banner */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { label: 'Lead Response', before: '24h', after: '2h', improvement: '12x faster' },
                  { label: 'Missed Leads', before: '23%', after: '0%', improvement: '100% captured' },
                  { label: 'Daily Time Saved', before: '0h', after: '3h', improvement: '+3 hours' },
                  { label: 'Conversion Rate', before: '12%', after: '24%', improvement: '2x increase' },
                ].map((stat, i) => (
                  <div key={i} className="relative p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50 group hover:border-primary/30 transition-all duration-300">
                    <p className="text-xs text-zinc-500 mb-3 uppercase tracking-wide">{stat.label}</p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm text-zinc-600 line-through">{stat.before}</span>
                      <ArrowRight className="w-3 h-3 text-zinc-600" />
                      <span className="text-2xl font-bold text-foreground">{stat.after}</span>
                    </div>
                    <span className="text-xs text-primary font-medium">{stat.improvement}</span>
                  </div>
                ))}
              </div>

              {/* Problem → Solution → Result */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {/* Problem */}
                <div className="relative p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <span className="text-red-400 text-lg">😰</span>
                    </div>
                    <p className="text-sm font-semibold text-red-400 uppercase tracking-wide">The Problem</p>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Leads tracked in Google Sheets',
                      'Follow-ups constantly missed',
                      'Zero visibility into pipeline',
                      'Team overwhelmed with manual work'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                        <span className="text-red-400 mt-0.5">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="relative p-6 rounded-2xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-lg">🛠️</span>
                    </div>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wide">The Solution</p>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Custom CRM built for their workflow',
                      'WhatsApp integration for instant response',
                      'Automated follow-up sequences',
                      'Real-time analytics dashboard'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                        <span className="text-primary mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div className="relative p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <span className="text-lg">🎯</span>
                    </div>
                    <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">The Result</p>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Zero missed leads — ever',
                      '3+ hours saved every day',
                      'Full pipeline visibility',
                      '2x conversion rate'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Dashboard Mockup */}
              <div className="rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden mb-8 shadow-2xl">
                {/* Browser chrome */}
                <div className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-zinc-800 rounded-lg h-7 max-w-sm mx-auto flex items-center px-4">
                      <div className="w-3 h-3 rounded-full bg-green-500/60 mr-2" />
                      <span className="text-xs text-zinc-400">crm.tbkvillas.com</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-zinc-800" />
                    <div className="w-6 h-6 rounded bg-zinc-800" />
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-6">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">T</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">TBK Villas CRM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1.5 rounded-lg bg-primary/20 text-primary text-xs font-medium">
                        + New Lead
                      </div>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {[
                      { label: 'Total Leads', value: '234', icon: Users, change: '+12%', color: 'text-emerald-400' },
                      { label: 'Active Deals', value: '45', icon: TrendingUp, change: '+8%', color: 'text-emerald-400' },
                      { label: 'Response Time', value: '2.4h', icon: Clock, change: '-15%', color: 'text-emerald-400' },
                      { label: 'Conversion', value: '24%', icon: TrendingUp, change: '+5%', color: 'text-emerald-400' },
                    ].map((stat, i) => {
                      const Icon = stat.icon;
                      return (
                        <div key={i} className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                          <div className="flex items-center justify-between mb-2">
                            <Icon className="w-4 h-4 text-zinc-500" />
                            <span className={`text-xs font-medium ${stat.color}`}>{stat.change}</span>
                          </div>
                          <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                          <p className="text-xs text-zinc-500">{stat.label}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Chart */}
                  <div className="p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/50">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-zinc-400">Lead Activity</span>
                      <span className="text-xs text-zinc-600">Last 30 days</span>
                    </div>
                    <div className="h-24 flex items-end justify-between gap-1.5">
                      {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95, 70, 80, 65].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-primary/40 to-primary/80 rounded-sm transition-all hover:from-primary/60 hover:to-primary"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-800/30 border border-zinc-700/50 mb-8">
                <Quote className="w-10 h-10 text-primary/30 flex-shrink-0" />
                <div>
                  <p className="text-lg text-zinc-300 italic mb-4">
                    "They understood our business better than we did. The tool they built literally{' '}
                    <span className="text-primary font-medium not-italic">transformed how we operate.</span>"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center">
                      <span className="text-sm font-bold text-zinc-300">R</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Rahul Sharma</p>
                      <p className="text-xs text-zinc-500">Founder, TBK Villas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-zinc-800">
                <p className="text-zinc-500 text-sm">
                  Want similar results for your business?
                </p>
                <div className="flex items-center gap-3">
                  <Button variant="hero-outline" className="group">
                    See Full Case Study
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                  <Button variant="hero" className="group">
                    Book a Call
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};