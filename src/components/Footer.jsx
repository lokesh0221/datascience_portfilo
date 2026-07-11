import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/60 bg-card/40 backdrop-blur-sm py-8 px-4">
      <div className="container mx-auto max-w-6xl flex flex-wrap justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Nannuri Venkata Lokesh. All rights reserved.u
        </p>
        <a
          href="#hero"
          aria-label="Back to top"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
