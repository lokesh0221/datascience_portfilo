import { Award, Briefcase, GraduationCap } from "lucide-react";
import SpotlightCard from "@/reactbits/SpotlightCard";
import AnimatedContent from "@/reactbits/AnimatedContent";
import { SectionHeading } from "./SectionHeading";

const experience = [
  {
    role: "Software Engineer – Snowflake",
    company: "Techstar Group, Hyderabad, India",
    period: "Nov 2025 – Present",
    points: [
      "Designing reusable Data Contracts using the Open Data Contract Standard (ODCS) to enforce schema validation, data quality rules, SLAs and governance across enterprise pipelines.",
      "Executing end-to-end data migration from legacy databases to Snowflake — metadata mapping, schema transformation, reference data validation and lineage documentation.",
      "Converting legacy PostgreSQL Stored Procedures into Snowflake SQL and Snowpark transformations for scalable cloud-native execution.",
      "Developed a Loan Default Prediction model using CatBoost and Snowpark Python — feature engineering, categorical handling, training and evaluation.",
    ],
  },
];

const certifications = [
  {
    name: "SnowPro Associate: Platform Certification — Snowflake",
    url: "https://achieve.snowflake.com/b02ee5f8-df1b-4bbb-b617-47b01df005cc",
  },
  {
    name: "IBM RAG and Agentic AI Specialization — Coursera",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/KB2QWGVOYVA8",
  },
  {
    name: "IBM Data Science Professional Certificate — Coursera",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/DAQRYAFDPNCB",
  },
];

const achievements = [
  "Selected Participant, ReGen Hackathon 2025",
  "Second Runner-Up, ML Hackathon 2024",
  "First Runner-Up, Inter-College Coding Hackathon",
  "Peer Mentor — mentored junior students in ML, Python and AI concepts",
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-8 md:py-12 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading index="03" eyebrow="Experience" title="Where I've been" />

        {/* Experience timeline */}
        <div className="relative border-l border-border/70 pl-8 ml-2 mb-16 space-y-8">
          {experience.map((job, key) => (
            <AnimatedContent key={key} distance={60}>
              <div className="relative">
                <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                <SpotlightCard className="p-6 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-left">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-display font-semibold text-lg">{job.role}</h3>
                    <span className="text-xs font-medium tracking-wider uppercase text-primary/80">
                      {job.period}
                    </span>
                  </div>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Briefcase className="h-4 w-4 text-primary" /> {job.company}
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="mt-2 h-1 w-1 rounded-full bg-primary/60 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </div>
            </AnimatedContent>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedContent distance={60} delay={0}>
            <SpotlightCard className="p-6 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-left h-full">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Education</h3>
              </div>
              <p className="font-medium">Woxsen University</p>
              <p className="text-muted-foreground text-sm">
                B.Tech in Computer Science (Data Science)
              </p>
              <p className="text-muted-foreground text-sm">CGPA: 8.2/10 · Aug 2022 – May 2026</p>
            </SpotlightCard>
          </AnimatedContent>

          <AnimatedContent distance={60} delay={0.12}>
            <SpotlightCard className="p-6 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-left h-full">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Certifications</h3>
              </div>
              <ul className="space-y-3 text-sm">
                {certifications.map((cert, i) => (
                  <li key={i}>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {cert.name}
                    </a>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </AnimatedContent>

          <AnimatedContent distance={60} delay={0.24}>
            <SpotlightCard className="p-6 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-left h-full">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Achievements</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                {achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </SpotlightCard>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};
