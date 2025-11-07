import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // 🧠 AI & Machine Learning
  { name: "🐍 Python", level: 90, category: "ai-ml" },
  { name: "🤖 Scikit-Learn", level: 85, category: "ai-ml" },
  { name: "🧠 TensorFlow", level: 80, category: "ai-ml" },
  { name: "🔥 PyTorch", level: 80, category: "ai-ml" },
  { name: "🧩 Keras", level: 75, category: "ai-ml" },
  { name: "🧬 OpenCV", level: 75, category: "ai-ml" },
  { name: "🗣️ NLP (Transformers / Hugging Face)", level: 70, category: "ai-ml" },
  { name: "📈 Data Visualization (Matplotlib / Seaborn)", level: 80, category: "ai-ml" },
  { name: "🔍 Machine Learning Pipeline (EDA → Model → Deployment)", level: 85, category: "ai-ml" },

  // 📊 Data Science & Analytics
  { name: "🐼 Pandas", level: 90, category: "data-science" },
  { name: "📊 NumPy", level: 85, category: "data-science" },
  { name: "🧮 Statistics & Probability", level: 80, category: "data-science" },
  { name: "📉 R Programming", level: 70, category: "data-science" },
  { name: "📈 Tableau", level: 75, category: "data-science" },
  { name: "📊 Power BI", level: 75, category: "data-science" },
  { name: "🗃️ SQL", level: 85, category: "data-science" },
  { name: "☁️ AWS (S3, Lambda, Glue, Redshift)", level: 70, category: "data-science" },
  { name: "🧰 Data Engineering (ETL / Pipeline Design)", level: 75, category: "data-science" },

  // 🌐 Frontend (for AI Web Interfaces)
  { name: "⚛️ React", level: 90, category: "frontend" },
  { name: "⏭️ Next.js", level: 85, category: "frontend" },
  { name: "📘 TypeScript", level: 85, category: "frontend" },
  { name: "🎨 Tailwind CSS", level: 90, category: "frontend" },
  { name: "🌐 HTML / CSS", level: 90, category: "frontend" },
  { name: "⚙️ JavaScript", level: 90, category: "frontend" },

  // 🔧 Backend & APIs
  { name: "🐍 FastAPI", level: 85, category: "backend" },
  { name: "🚏 Express.js", level: 75, category: "backend" },
  { name: "🟩 Node.js", level: 80, category: "backend" },
  { name: "🍃 MongoDB", level: 70, category: "backend" },
  { name: "🐘 PostgreSQL", level: 70, category: "backend" },
  { name: "🔺 GraphQL", level: 65, category: "backend" },

  // ⚙️ Tools & Platforms
  { name: "🔧 Git / GitHub", level: 90, category: "tools" },
  { name: "🐳 Docker", level: 70, category: "tools" },
  { name: "💻 VS Code", level: 95, category: "tools" },
  { name: "🎨 Figma", level: 85, category: "tools" },
  { name: "🧠 Jupyter / Colab", level: 90, category: "tools" },
  { name: "🚀 Hugging Face", level: 80, category: "tools" },
];

const categories = ["all", "ai-ml", "data-science", "frontend", "backend", "tools"];


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
