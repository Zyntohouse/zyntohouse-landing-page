import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Home, Search, RefreshCw } from "lucide-react";
import { Button } from "../components/ui/button";

// Building Blocks Logomark Component - Used as the "0" in 404
const LogoMark = ({ className = "w-10 h-10" }: { className?: string }) => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g transform="translate(14, 13)">
            <rect x="0" y="0" width="52" height="16" rx="4" fill="#10b981" />
            <rect x="14" y="22" width="38" height="16" rx="4" fill="#10b981" opacity="0.7" />
            <rect x="0" y="44" width="52" height="16" rx="4" fill="#10b981" />
        </g>
    </svg>
);

// Animated Building Blocks for the "0"
const AnimatedBlocks = () => (
    <div className="relative w-32 h-40 md:w-40 md:h-48 flex flex-col justify-center items-center gap-2 md:gap-3">
        {/* Top block */}
        <div
            className="w-20 md:w-24 h-5 md:h-6 rounded-md bg-primary animate-pulse"
            style={{ animationDelay: '0s', animationDuration: '2s' }}
        />
        {/* Middle block - offset */}
        <div
            className="w-20 md:w-24 h-5 md:h-6 rounded-md bg-primary/70 translate-x-2 animate-pulse"
            style={{ animationDelay: '0.3s', animationDuration: '2s' }}
        />
        {/* Bottom block */}
        <div
            className="w-20 md:w-24 h-5 md:h-6 rounded-md bg-primary animate-pulse"
            style={{ animationDelay: '0.6s', animationDuration: '2s' }}
        />
    </div>
);

const NotFound = () => {
    const location = useLocation();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Main gradient orb */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
                    style={{
                        background: 'radial-gradient(ellipse, hsl(160 84% 39% / 0.08), transparent 60%)',
                        filter: 'blur(80px)',
                    }}
                />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
                                            linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
                                            backgroundSize: '64px 64px',
                    }}
                />

                {/* Floating particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/30 animate-float" />
                <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-primary/20 animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-primary/25 animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-primary/30 animate-float" style={{ animationDelay: '0.5s' }} />
            </div>

            <div className="container-custom relative z-10 py-20">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Logo */}
                    <a href="/" className="inline-flex items-center gap-2.5 mb-12 group">
                        <LogoMark className="w-9 h-9 group-hover:scale-105 transition-transform" />
                        <span className="text-xl font-bold">
                            <span className="text-primary">Z</span>
                            <span className="text-foreground">yntohouse</span>
                        </span>
                    </a>

                    {/* 404 with Building Blocks as "0" */}
                    <div
                        className="flex items-center justify-center gap-2 md:gap-4 mb-8 cursor-default"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* 4 */}
                        <span className={`text-[120px] md:text-[180px] font-bold leading-none tracking-tighter text-gradient-accent transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}>
                            4
                        </span>

                        {/* Building Blocks as "0" */}
                        <div className={`transition-transform duration-500 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
                            <AnimatedBlocks />
                        </div>

                        {/* 4 */}
                        <span className={`text-[120px] md:text-[180px] font-bold leading-none tracking-tighter text-gradient-accent transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}>
                            4
                        </span>
                    </div>

                    {/* Tagline */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <RefreshCw className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Lost in the build</span>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                            This page is still under construction
                        </h2>
                        <p className="text-zinc-400 max-w-md mx-auto">
                            Looks like our blocks haven't been stacked here yet. Let's get you back to somewhere that's finished.
                        </p>

                        {/* Show attempted path */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 mt-2">
                            <Search className="w-4 h-4 text-zinc-500" />
                            <code className="text-sm text-zinc-400">{location.pathname}</code>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            variant="hero"
                            size="lg"
                            className="group"
                            onClick={() => window.location.href = '/'}
                        >
                            <Home className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>

                        <Button
                            variant="hero-outline"
                            size="lg"
                            onClick={() => window.history.back()}
                            className="group"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Go Back
                        </Button>
                    </div>

                    {/* Help text */}
                    <p className="mt-16 text-sm text-zinc-600">
                        Need help?{' '}
                        <a href="/#contact" className="text-primary hover:underline">
                            Contact us
                        </a>
                        {' '}or{' '}
                        <a href="mailto:hello@zyntohouse.com" className="text-primary hover:underline">
                            send an email
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;