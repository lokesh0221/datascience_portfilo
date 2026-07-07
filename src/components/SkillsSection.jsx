import { Snowflake, Database, BarChart3, Brain, Code2, Cloud, Wrench } from "lucide-react";
import SpotlightCard from "@/reactbits/SpotlightCard";
import AnimatedContent from "@/reactbits/AnimatedContent";
import { SectionHeading } from "./SectionHeading";

const groups = [
  {
    label: "Snowflake",
    icon: Snowflake,
    skills: ["Snowflake AI Data Cloud", "Snowpark (Python)", "SnowSQL", "Stored Procedures", "Streams & Tasks", "Cortex AI", "Streamlit", "dbt"],
  },
  {
    label: "Data Engineering",
    icon: Database,
    skills: ["ETL / ELT Pipelines", "Data Migration", "Data Integration", "Star & Snowflake Schema", "Data Lineage", "Airflow"],
  },
  {
    label: "BI & Analytics",
    icon: BarChart3,
    skills: ["Power BI", "DAX", "Data Modeling", "Row-Level Security", "KPI Dashboarding"],
  },
  {
    label: "ML & GenAI",
    icon: Brain,
    skills: ["LLMs", "RAG", "Agentic AI", "Prompt Engineering", "Snowpark ML"],
  },
  {
    label: "Languages",
    icon: Code2,
    skills: ["SQL", "Python", "JavaScript", "R", "NoSQL"],
  },
  {
    label: "Cloud & Databases",
    icon: Cloud,
    skills: ["AWS", "Azure", "GCP", "PostgreSQL", "MySQL"],
  },
  {
    label: "DevOps & Tools",
    icon: Wrench,
    skills: ["Git", "GitHub Actions", "Docker", "CI/CD", "REST APIs", "FastAPI", "Linux", "Postman"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-8 md:py-12 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="What I work with"
          subtitle="A snapshot of my toolkit, grouped by domain."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group, i) => (
            <AnimatedContent key={group.label} distance={60} delay={i * 0.08}>
              <SpotlightCard className="h-full p-6 rounded-xl border border-border bg-card/60 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-5 text-left">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <group.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-md border border-border bg-background/50 text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};
