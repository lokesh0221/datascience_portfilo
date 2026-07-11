import { ArrowUpRight } from "lucide-react";
import AnimatedContent from "@/reactbits/AnimatedContent";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    id: 1,
    title: "Snowflake FinOps Platform",
    blurb: "Cost governance & optimization on ACCOUNT_USAGE",
    role: "Snowflake · Snowpark · React",
    year: "2025",
    href: "https://github.com/lokesh0221",
  },
  {
    id: 2,
    title: "Snowflake → Power BI Analytics",
    blurb: "Star-schema pipeline with RLS & DirectQuery",
    role: "Snowflake · Power BI · DAX",
    year: "2025",
    href: "https://github.com/lokesh0221",
  },
  {
    id: 3,
    title: "Facial Skin Analysis System",
    blurb: "CNN vision pipeline + recommendation engine",
    role: "Python · TensorFlow · CNN",
    year: "2024",
    href: "https://github.com/lokesh0221",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-28 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Recent works"
          subtitle="Selected projects across data platforms, analytics, and applied machine learning."
        />

        <div className="border-t border-border">
          {projects.map((project, i) => (
            <AnimatedContent key={project.id} distance={40} delay={i * 0.08}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8 border-b border-border py-7 md:py-9 transition-colors hover:bg-foreground/[0.03]"
              >
                <span className="section-index text-sm md:text-base tabular-nums">
                  0{i + 1}
                </span>

                <div className="min-w-0 text-left">
                  <h3 className="font-display text-2xl md:text-4xl font-medium tracking-tight transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground truncate">
                    {project.blurb}
                  </p>
                  <p className="mt-2 text-xs tracking-[0.15em] uppercase text-muted-foreground md:hidden">
                    {project.role} — {project.year}
                  </p>
                </div>

                <div className="hidden md:flex items-center gap-8 shrink-0">
                  <span className="text-sm text-muted-foreground w-52 text-right">
                    {project.role}
                  </span>
                  <span className="text-sm tabular-nums text-muted-foreground">
                    {project.year}
                  </span>
                  <ArrowUpRight
                    className="h-6 w-6 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground md:hidden" />
              </a>
            </AnimatedContent>
          ))}
        </div>

        <div className="mt-12 text-left">
          <a
            href="https://github.com/lokesh0221"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-muted-foreground transition-colors hover:text-primary"
          >
            All projects on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
