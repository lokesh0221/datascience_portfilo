import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import BlurText from "@/reactbits/BlurText";
import GradientText from "@/reactbits/GradientText";
import ShinyText from "@/reactbits/ShinyText";
import StarBorder from "@/reactbits/StarBorder";
import SpotlightCard from "@/reactbits/SpotlightCard";

const facts = [
  { k: "Role", v: "Software Engineer" },
  { k: "Focus", v: "Snowflake AI Data Cloud" },
  { k: "Company", v: "Techstar Group" },
  { k: "Cert", v: "SnowPro Associate" },
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 pt-28 pb-16"
    >
      <div className="container mx-auto max-w-6xl grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
        {/* Left: identity */}
        <div className="text-left">
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Open to opportunities
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            <BlurText text="Hi, I'm Nannuri Venkata" delay={100} animateBy="words" />
            <span className="block mt-1">
              <GradientText
                colors={["#8B5CF6", "#A78BFA", "#7cff67", "#8B5CF6"]}
                animationSpeed={6}
                className="!mx-0 text-4xl md:text-6xl font-bold font-display"
              >
                Lokesh
              </GradientText>
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mt-6">
            I build enterprise data pipelines, migrate legacy systems to Snowflake, and ship
            ML &amp; GenAI solutions with Snowpark, Cortex AI, and Power BI.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <StarBorder as="a" href="#projects" color="#a78bfa" speed="5s" className="text-base font-medium">
              <ShinyText text="View My Work" speed={3} color="#c4b5fd" shineColor="#ffffff" />
            </StarBorder>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full border border-border hover:border-primary/60 hover:text-primary transition-colors text-sm font-medium"
            >
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-5 mt-8 text-foreground/70">
            <a href="https://github.com/lokesh0221" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/venkatlokesh221/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:venkatlokesh.221@gmail.com" className="hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin size={16} /> Hyderabad, India
            </span>
          </div>
        </div>

        {/* Right: quick-facts panel */}
        <SpotlightCard className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-1.5">
          <div className="rounded-xl border border-border/50 p-6 md:p-7">
            <div className="flex items-center gap-2 mb-6 text-xs tracking-[0.2em] uppercase text-muted-foreground">
              <span className="h-px w-6 bg-primary/40" /> Profile
            </div>
            <dl className="divide-y divide-border/60">
              {facts.map((f) => (
                <div key={f.k} className="flex items-center justify-between py-3">
                  <dt className="text-sm text-muted-foreground">{f.k}</dt>
                  <dd className="font-display font-medium text-right">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </SpotlightCard>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-muted-foreground mb-2 tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
