import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: About text */}
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Hello! I'm <strong>Nannuri Venkata Lokesh</strong>, a passionate data
              scientist with a strong foundation in machine learning,
              statistical analysis, and data visualization. I specialize in
              extracting meaningful insights from complex datasets and building
              predictive models that drive business value.
            </p>

            <p className="text-muted-foreground">
              My approach combines rigorous statistical methods with modern
              machine learning techniques. I believe in the power of data
              storytelling – making complex analyses accessible and actionable
              for stakeholders.
            </p>

            <p className="text-muted-foreground">
              When I'm not analyzing data, you'll find me exploring new ML
              frameworks, contributing to open-source projects, or writing about
              data science on my blog.
            </p>

            {/* Removed Data Engineering / Machine Learning / Visualization subsections as requested */}
          </div>

          {/* Right column: restored original feature cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Engineering</h4>
                  <p className="text-muted-foreground">
                    Building and optimizing data pipelines for efficient ETL pipelines, data warehousing, and big data processing
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Building and deploying machine learning models for
                    predictive analytics.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Visualization</h4>
                  <p className="text-muted-foreground">
                    Creating interactive dashboards and visualizations to
                    communicate insights effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
