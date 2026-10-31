import ProjectList from "@/components/ProjectList";

const projects = [
  {
    id: "pocket-team-lab",
    title: "Pocket Team Lab",
    description:
      "A Pokémon explorer and team builder. Users can search Pokémon, compare their stats, build and save teams, and manage favorites.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vite",
      "PokéAPI",
      "localStorage",
    ],
    link: "https://leonardosalvatierra.github.io/pocket-team-lab/",
  },
  {
    id: "fiama-xv",
    title: "Fiama's XV Invitation",
    description:
      "A mobile-first digital birthday invitation featuring a countdown, photo gallery, background music, event location, and RSVP through WhatsApp.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://fiama-medina-xv.onrender.com/",
  },
];

export default function Home() {
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-5xl flex-1 px-6 py-12"
    >
      <section className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">
          My Portfolio
        </h1>

        <p className="max-w-2xl text-lg text-slate-700">
          I am Leonardo Salvatierra, a web development student based in
          Rosario, Argentina. I am learning React and Next.js and enjoy
          building useful, interactive websites.
        </p>
      </section>

      <section aria-labelledby="projects-heading">
        <h2
          id="projects-heading"
          className="mb-6 text-2xl font-bold"
        >
          Featured Projects
        </h2>

        <ProjectList projects={projects} />
      </section>
    </main>
  );
}