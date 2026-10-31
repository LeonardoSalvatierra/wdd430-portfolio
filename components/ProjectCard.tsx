export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-slate-300 border-l-4 border-l-blue-800 bg-white p-6 shadow-sm">
      <h3 className="mb-3 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mb-4 text-slate-700">
        {description}
      </p>

      <p className="text-sm text-slate-700">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded font-semibold text-blue-800 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          View {title}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </article>
  );
}