import { Briefcase, Code, User } from "lucide-react";
import SpotlightCard from "@/reactbits/SpotlightCard";
import AnimatedContent from "@/reactbits/AnimatedContent";
import { SectionHeading } from "./SectionHeading";

const cards = [
  {
    icon: Code,
    title: "Snowflake & Data Engineering",
    text: "Data Contracts, ETL/ELT pipelines, migrations, Snowpark, Streams & Tasks, and star/snowflake schema modeling.",
  },
  {
    icon: User,
    title: "ML & GenAI",
    text: "LLMs, RAG, Agentic AI, prompt engineering, and Snowpark ML for predictive analytics.",
  },
  {
    icon: Briefcase,
    title: "BI & Analytics",
    text: "Power BI, DAX, data modeling, Row-Level Security, and KPI dashboards for executive reporting.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-8 md:py-12 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading index="01" eyebrow="About" title="A quick introduction" />

        <div className="grid lg:grid-cols-[7fr_5fr] gap-12 lg:gap-16">
          {/* Narrative */}
          <AnimatedContent direction="horizontal" distance={80} reverse className="space-y-5 text-left">
            <p className="text-lg text-foreground/90">
              Hello! I'm <strong className="text-primary">Nannuri Venkata Lokesh</strong>, a Software
              Engineer at Techstar Group working on the Snowflake AI Data Cloud.
            </p>
            <p className="text-muted-foreground">
              I design reusable Data Contracts, run end-to-end data migrations to Snowflake, and
              convert legacy PostgreSQL stored procedures into scalable Snowpark transformations.
              My work spans data engineering, BI &amp; analytics, and applied ML — from ETL/ELT
              pipelines and star-schema models to predictive models like a CatBoost loan-default
              classifier on Snowpark Python.
            </p>
            <p className="text-muted-foreground">
              I hold a B.Tech in Computer Science (Data Science) from Woxsen University and I'm a
              SnowPro Associate certified engineer with a strong interest in GenAI, RAG, and Agentic AI.
            </p>
          </AnimatedContent>

          {/* Capability rail */}
          <div className="space-y-4">
            {cards.map((card, i) => (
              <AnimatedContent key={i} direction="horizontal" distance={80} delay={i * 0.1}>
                <SpotlightCard className="p-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm">
                  <div className="flex items-start gap-4 text-left">
                    <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                      <card.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold">{card.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{card.text}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
