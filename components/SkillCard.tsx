interface SkillCardProps {
  title: string;
  description: string;
}

export default function SkillCard({
  title,
  description,
}: SkillCardProps) {
  return (
    <article className="rounded-lg border border-slate-300 bg-white p-6 shadow-sm">
      <h3 className="mb-2 text-xl font-bold text-blue-900">
        {title}
      </h3>

      <p className="leading-relaxed text-slate-700">
        {description}
      </p>
    </article>
  );
}