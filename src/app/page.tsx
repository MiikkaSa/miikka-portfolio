import { ContactPills } from "./components/contact-pills";
import { Section } from "./components/section";
import { ExperienceCard } from "./components/experience-card";
import { ProjectCard } from "./components/project-card";
import { SkillGroup } from "./components/skill-group";

const profile =
  "Junior Full-Stack Developer with professional experience in a production software development team. " +
  "Experienced in React, TypeScript, GraphQL, PostgreSQL, and PHP. Strong background in Frontend development, " +
  "API development, and UX/UI improvements. Passionate about clean, maintainable code and continuous learning.";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      {/* Header */}
      <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-sm text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to junior dev roles
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Miikka Savolainen
          </h1>
          <p className="text-lg text-zinc-300">
            Junior Full-Stack Developer • Helsinki, Finland
          </p>
          <p className="max-w-2xl text-zinc-300">{profile}</p>

          <ContactPills
            email="miikka148@gmail.com"
            phone="+358 45 275 1009"
            linkedin="https://www.linkedin.com/in/miikka-savolainen-8025a0263/"
            github="https://github.com/MiikkaSa"
          />
        </div>

        {/* Quick CTA */}
        <div className="flex gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-950 hover:opacity-90"
          >
            View projects
          </a>
          <a
            href="mailto:miikka148@gmail.com"
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-900/70"
          >
            Email me
          </a>
        </div>
      </header>

      {/* Experience */}
      <Section
        id="experience"
        title="Experience"
        subtitle="Production team work."
      >
        <ExperienceCard
          role="Software Developer"
          company="Forenom – Software Development Team"
          timeframe="2025 – Present (10+ months)"
          bullets={[
            "Developed and maintained production-level full-stack web applications, including Forenom's webshop and CRM's.",
            "Built frontend features using React and TypeScript.",
            "Worked with GraphQL APIs and backend logic in PHP.",
            "Designed and optimized PostgreSQL queries and database structures.",
            "Participated in code reviews and Git-based workflows.",
            "Improved UX/UI components with focus on responsivity and accessibility.",
          ]}
          stack={[
            "React",
            "TypeScript",
            "GraphQL",
            "PostgreSQL",
            "PHP",
            "Git",
            "UX/UI",
          ]}
        />
      </Section>

      {/* Skills */}
      <Section
        title="Skills"
        subtitle="Tech I use to ship features end-to-end."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <SkillGroup
            title="Frontend"
            items={[
              "React",
              "TypeScript",
              "JavaScript",
              "React Native",
              "UX/UI design",
            ]}
          />
          <SkillGroup
            title="Backend"
            items={["GraphQL", "PHP", "PostgreSQL", "SQL"]}
          />
          <SkillGroup
            title="Tools & Practices"
            items={[
              "Git",
              "Code reviews",
              "Agile teamwork",
              "API design",
              "Database migrations",
            ]}
          />
          <SkillGroup
            title="Strengths"
            items={[
              "Clean, maintainable code",
              "Fast learner",
              "Detail-oriented",
              "Team collaboration",
            ]}
          />
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        title="Projects"
        subtitle="A few things I’ve built in school and hackathons."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <ProjectCard
            title="Faceit tracker"
            year="2025"
            description="TypeScript-based application for fetching and inspecting player statistics."
            href="https://faceit-tracker.vercel.app/"
            tags={["TypeScript", "API", "Frontend"]}
          />
          <ProjectCard
            title="Aava ThriveConnect (Junction)"
            year="2024"
            description="Hackathon app connecting job seekers with companies."
            href="https://aava.vercel.app/main"
            tags={["Web", "Team project"]}
          />
          <ProjectCard
            title="Calorie Counter"
            year="2024"
            description="Calorie tracking app that gives diet tips (Java + JavaScript)."
            href="https://op2-white.github.io/Frontend/#/"
            tags={["Java", "JavaScript", "Full-stack"]}
          />
          <ProjectCard
            title="Movielist"
            year="2024"
            description="React Native app for watchlists and tracking watched movies."
            href="https://github.com/MiikkaSa/Movielist"
            tags={["React Native", "Mobile"]}
          />
          <ProjectCard
            title="WeatherApp"
            year="2024"
            description="TypeScript-based application for checking weather in a chosen location."
            href="https://github.com/MiikkaSa/WeatherApp"
            tags={["TypeScript", "API", "Frontend"]}
          />
          <ProjectCard
            title="Redstone Aero Airport Infoscreen"
            year="2023"
            description="Infoscreen for pilots and airport staff to check flying conditions."
            href="https://redstone-infoscreen.vercel.app/"
            tags={["Web", "Live data", "UI"]}
          />
        </div>
      </Section>

      {/* Education */}
      <Section title="Education" subtitle="Graduated">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
          <p className="text-sm text-zinc-300">Bachelor’s Degree</p>
          <p className="mt-1 text-lg font-semibold">
            Business Information Technology
          </p>
          <p className="text-zinc-300">
            Haaga-Helia University of Applied Sciences • 2022 – 2025
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["JavaScript", "Java", "SQL", "Python", "React", "MS-Office"].map(
              (x) => (
                <span
                  key={x}
                  className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-200"
                >
                  {x}
                </span>
              )
            )}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-14 border-t border-zinc-900 pt-8 text-sm text-zinc-400">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Miikka Savolainen</p>
          <p className="text-zinc-500">Built with Next.js + Tailwind</p>
        </div>
      </footer>
    </main>
  );
}
