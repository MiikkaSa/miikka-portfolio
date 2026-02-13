function Pill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-sm text-zinc-200 hover:bg-zinc-900/70"
    >
      {label}
    </a>
  );
}

export function ContactPills({
  email,
  phone,
  linkedin,
  github,
}: {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <Pill href={`mailto:${email}`} label={email} />
      <Pill href={`tel:${phone.replace(/\s+/g, "")}`} label={phone} />
      <Pill href={linkedin} label="LinkedIn" />
      <Pill href={github} label="GitHub" />
    </div>
  );
}
