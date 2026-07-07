import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/70 backdrop-blur-md border-b border-border/60" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a className="font-display text-lg font-bold flex items-center gap-1" href="#hero">
          <span className="text-primary">{"</>"}</span>
          <span className="text-foreground">Nannuri Venkata Lokesh</span>
        </a>

        {/* desktop nav — pill with active highlight */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-card/40 backdrop-blur-md px-2 py-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm transition-all duration-300",
                activeId === item.id
                  ? "bg-primary text-primary-foreground shadow-[0_0_12px_rgba(139,92,246,0.45)]"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "font-display transition-colors duration-300",
                  activeId === item.id ? "text-primary" : "text-foreground/80 hover:text-primary"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
