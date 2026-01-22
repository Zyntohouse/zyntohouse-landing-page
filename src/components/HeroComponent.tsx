import { ArrowRight, Play, Zap, Clock, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

export const HeroComponent = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Main gradient orb */}
        <div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(ellipse, hsl(160 84% 39% / 0.15), transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Secondary orb - warm accent */}
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(45 100% 60% / 0.08), transparent 70%)',
            filter: 'blur(60px)',
            animationDelay: '2s',
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 fade-in-up">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Business Tools</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 fade-in-up tracking-tight">
              Custom tools for your{' '}
              <span className="relative">
                <span className="text-gradient-accent">business chaos</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8.5C50 2 100 2 150 8.5C200 15 250 5 298 8.5" stroke="hsl(160 84% 39%)" strokeWidth="3" strokeLinecap="round" className="opacity-60" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 mb-10 fade-in-up stagger-1 leading-relaxed">
              We build internal tools & AI automation for businesses drowning in manual work.
              <span className="text-foreground font-medium"> Save time. Cut costs. Scale faster.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-2">
              <Button variant="hero" size="xl" className="group">
                Book a Call
                <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="xl" className="group">
                <Play className="mr-1 h-4 w-4 text-primary" />
                See Our Work
              </Button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-zinc-800 fade-in-up stagger-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">10+</p>
                  <p className="text-sm text-zinc-500">Hours Saved Daily</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">3x</p>
                  <p className="text-sm text-zinc-500">Faster Operations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative fade-in-up stagger-2 hidden lg:block">
            {/* Glow behind mockup */}
            <div
              className="absolute inset-0 -m-8"
              style={{
                background: 'radial-gradient(ellipse at center, hsl(160 84% 39% / 0.15), transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            {/* Dashboard Card */}
            <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 shadow-2xl">
              {/* Browser dots */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 flex-1 h-6 bg-zinc-800 rounded-md flex items-center px-3">
                  <span className="text-xs text-zinc-500">dashboard.autoflows.com</span>
                </div>
              </div>

              {/* Mock Dashboard Content */}
              <div className="space-y-4">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Leads', value: '2,847', change: '+12%' },
                    { label: 'Converted', value: '423', change: '+8%' },
                    { label: 'Resp. Time', value: '1.2h', change: '-15%' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-zinc-800/50 rounded-lg p-3 min-w-0">
                      <p className="text-xs text-zinc-500 mb-1 truncate">{stat.label}</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-foreground">{stat.value}</span>
                        <span className="text-xs font-medium text-emerald-400">{stat.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart with animated bars */}
                <div className="bg-zinc-800/50 rounded-lg p-4 h-32">
                  <div className="flex items-end justify-between h-full gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-primary/60 to-primary rounded-sm animate-bar-pulse"
                        style={{
                          height: `${h}%`,
                          animationDelay: `${i * 150}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <p className="text-xs text-zinc-500 mb-3">Recent Activity</p>
                  <div className="space-y-2">
                    {[
                      { text: 'New lead from WhatsApp', time: '2m ago' },
                      { text: 'Follow-up sent automatically', time: '15m ago' },
                      { text: 'Deal closed - ₹2.4L', time: '1h ago' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="text-zinc-300">{item.text}</span>
                        <span className="text-xs text-zinc-600">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification - no delay */}
            <div className="absolute -left-8 top-1/4 bg-zinc-900 border border-zinc-700 rounded-xl p-4 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Auto follow-up sent</p>
                  <p className="text-xs text-zinc-500">Lead: Rahul Sharma</p>
                </div>
              </div>
            </div>

            {/* Floating stat - 1.5s delay for offset */}
            <div
              className="absolute -right-4 bottom-1/4 bg-zinc-900 border border-zinc-700 rounded-xl p-4 shadow-xl animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <p className="text-xs text-zinc-500 mb-1">This Month</p>
              <p className="text-2xl font-bold text-primary">+₹12.4L</p>
              <p className="text-xs text-zinc-400">Revenue tracked</p>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-20 pt-12 border-t border-zinc-800/50 fade-in-up stagger-4">
          <p className="text-sm text-zinc-500 text-center mb-8">
            Trusted by businesses ready to scale
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {['TBK Villas', 'CoachPro', 'FinanceHub', 'EventFlow'].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{name[0]}</span>
                </div>
                <span className="text-sm font-medium text-zinc-400">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};