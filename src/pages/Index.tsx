import { AboutComponent } from "../components/AboutComponent";
import { CaseStudyComponent } from "../components/CaseStudyComponent";
import { ContactComponent } from "../components/ContactComponent";
import { FAQComponent } from "../components/FAQComponent";
import { FooterComponent } from "../components/FooterComponent";
import { HeroComponent } from "../components/HeroComponent";
import { HowItWorksComponent } from "../components/HowItWorksComponent";
import { NavbarComponent } from "../components/NavbarComponent";
import { ProblemComponent } from "../components/ProblemComponent";
import { ServicesComponent } from "../components/ServicesComponent";
import { TestimonialComponent } from "../components/TestimonialComponent";

const Index = () => {
    return (
        <div className="min-h-screen bg-background relative">
            {/* Global grain overlay */}
            <div
                className="fixed inset-0 pointer-events-none z-50"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    opacity: 0.03,
                }}
            />

            {/* Global dot grid pattern */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                }}
            />

            <NavbarComponent />
            <main>
                <HeroComponent />
                <ProblemComponent />
                <ServicesComponent />
                <HowItWorksComponent />
                <CaseStudyComponent />
                <TestimonialComponent />
                <AboutComponent />
                <FAQComponent />
                <ContactComponent />
            </main>
            <FooterComponent />
        </div>
    );
};

export default Index;