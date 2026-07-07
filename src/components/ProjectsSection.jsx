import { ArrowRight, ExternalLink, Github } from "lucide-react";
import SpotlightCard from "@/reactbits/SpotlightCard";
import AnimatedContent from "@/reactbits/AnimatedContent";
import StarBorder from "@/reactbits/StarBorder";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    id: 1,
    title: "Snowflake FinOps – Cost Governance & Optimization Platform",
    description:
      "FinOps framework on Snowflake querying ACCOUNT_USAGE / ORGANIZATION_USAGE to track credit consumption, storage and query spend. Resource Monitors with tiered quotas, RBAC cost attribution, and a React dashboard with Snowpark anomaly detection and budget alerts.",
    tags: ["Snowflake", "Cortex AI", "React.js", "Snowpark"],
    demoUrl: "#",
    githubUrl: "https://github.com/lokesh0221",
  },
  {
    id: 2,
    title: "Snowflake-to-Power BI Executive Analytics Platform",
    description:
      "End-to-end pipeline ingesting Superstore Sales CSV into Snowflake, modeled as a Star Schema and connected to Power BI. 15+ DAX measures with DirectQuery over materialized views, Row-Level Security, and scheduled gateway refreshes.",
    tags: ["Snowflake", "Power BI", "DAX", "SQL", "RLS"],
    demoUrl: "#",
    githubUrl: "https://github.com/lokesh0221",
  },
  {
    id: 3,
    title: "Facial Skin Analysis & Recommendation System",
    description:
      "CNN-based computer vision pipelines for skin tone and skin type classification, plus a personalized recommendation engine mapping user attributes to skincare ingredients. Data augmentation and rigorous evaluation improved accuracy and generalization.",
    tags: ["Python", "TensorFlow", "OpenCV", "CNN", "React.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/lokesh0221",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-8 md:py-12 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Featured work"
          subtitle="Recent projects across data platforms, analytics, and applied machine learning."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, key) => (
            <AnimatedContent key={key} distance={70} delay={key * 0.12}>
              <SpotlightCard
                className="group h-full rounded-xl border border-border bg-card/60 backdrop-blur-sm"
                spotlightColor="rgba(139, 92, 246, 0.45)"
              >
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border border-primary/30 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>

        <div className="text-center mt-12">
          <StarBorder
            as="a"
            href="https://github.com/lokesh0221"
            target="_blank"
            color="#a78bfa"
            speed="5s"
          >
            <span className="flex items-center gap-2">
              Check My Github <ArrowRight size={16} />
            </span>
          </StarBorder>
        </div>
      </div>
    </section>
  );
};
