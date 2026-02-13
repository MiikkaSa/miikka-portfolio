export function ExperienceCard({
  role,
  company,
  timeframe,
  bullets,
  stack,
}: {
  role: string;
  company: string;
  timeframe: string;
  bullets: string[];
  stack: string[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <p className="text-lg font-semibold">{role}</p>
          <p className="text-zinc-300">{company}</p>
        </div>
        <p className="text-sm text-zinc-400">{timeframe}</p>
      </div>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-200">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((x) => (
          <span
            key={x}
            className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-200"
          >
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}
