export function ProjectCard({
  title,
  year,
  description,
  href,
  tags,
}: {
  title: string;
  year: string;
  description: string;
  href: string;
  tags: string[];
}) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:bg-zinc-900/70"
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-zinc-400">{year}</p>
      </div>

      <p className="mt-2 text-zinc-300">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-200"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-zinc-400 group-hover:text-zinc-200">
        Open →
      </p>
    </a>
  );
}
