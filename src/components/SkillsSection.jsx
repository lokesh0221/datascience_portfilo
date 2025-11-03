import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Data & ML
  { name: "🐍 Python", level: 90, category: "tools" },
  { name: "🐼 Pandas", level: 85, category: "tools" },
  { name: "📊 NumPy", level: 85, category: "tools" },
  { name: "🤖 Scikit-Learn", level: 80, category: "tools" },
  { name: "🧠 TensorFlow", level: 75, category: "tools" },
  { name: "🔥 PyTorch", level: 75, category: "tools" },
  { name: "🗃️ SQL", level: 85, category: "tools" },
  { name: "📉 R Programming", level: 70, category: "tools" },
  { name: "📈 Tableau", level: 70, category: "tools" },
  { name: "📊 Power BI", level: 70, category: "tools" },
  { name: "🔧 Git / GitHub", level: 90, category: "tools" },
  { name: "🐳 Docker", level: 70, category: "tools" },

  // Frontend
  { name: "🌐 HTML / CSS", level: 95, category: "frontend" },
  { name: "⚙️ JavaScript", level: 90, category: "frontend" },
  { name: "⚛️ React", level: 90, category: "frontend" },
  { name: "📘 TypeScript", level: 85, category: "frontend" },
  { name: "🎨 Tailwind CSS", level: 90, category: "frontend" },
  { name: "⏭️ Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "🟩 Node.js", level: 80, category: "backend" },
  { name: "🚏 Express.js", level: 75, category: "backend" },
  { name: "🍃 MongoDB", level: 70, category: "backend" },
  { name: "🐘 PostgreSQL", level: 65, category: "backend" },
  { name: "🔺 GraphQL", level: 60, category: "backend" },

  // Tools & Platforms
  { name: "🎨 Figma", level: 85, category: "tools" },
  { name: "💻 VS Code", level: 95, category: "tools" },
];

// show tools first in the filter so Data Science / tools appear at top
const categories = ["all", "tools", "frontend", "backend"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              {/* percentage bar removed as requested */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
