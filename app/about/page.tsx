import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-5xl flex-1 px-6 py-12"
    >
      <h1 className="mb-4 text-4xl font-bold">
        About Me
      </h1>

      <p className="mb-4 max-w-3xl text-lg text-slate-700">
        My name is Leonardo Salvatierra. I am originally from Tucumán,
        Argentina, and currently live in Rosario, Santa Fe. I study
        software development at BYU-Idaho and am working toward my first
        professional opportunity in IT.
      </p>

      <p className="mb-10 max-w-3xl text-lg text-slate-700">
        I enjoy creating websites that combine useful features with
        thoughtful design. Outside programming, I enjoy cooking,
        basketball, martial arts, video games, and spending time with
        my wife.
      </p>

      <section aria-labelledby="skills-heading">
        <h2
          id="skills-heading"
          className="mb-6 text-2xl font-bold"
        >
          Technical Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <SkillCard
            title="HTML and CSS"
            description="Building structured web pages and responsive layouts that adapt to different screen sizes."
          />

          <SkillCard
            title="JavaScript"
            description="Adding interactive features, fetching information from APIs, and saving data in localStorage."
          />

          <SkillCard
            title="React and Next.js"
            description="Learning component composition, typed props, file-based routing, and Server Components."
          />

          <SkillCard
            title="Git and GitHub"
            description="Tracking changes in my projects and publishing repositories for sharing and collaboration."
          />
        </div>
      </section>
    </main>
  );
}