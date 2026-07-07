import { cn } from "@/lib/utils";

export const SectionHeading = ({ index, eyebrow, title, subtitle, align = "left", className }) => (
  <div className={cn("mb-8", align === "center" && "text-center", className)}>
    <div className={cn("flex items-center gap-3 mb-3", align === "center" && "justify-center")}>
      <span className="section-index text-sm">{index}</span>
      <span className="h-px w-8 bg-primary/40" />
      <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
        {eyebrow}
      </span>
    </div>
    <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
    {subtitle && (
      <p className={cn("text-muted-foreground mt-4 max-w-2xl", align === "center" && "mx-auto")}>
        {subtitle}
      </p>
    )}
  </div>
);
