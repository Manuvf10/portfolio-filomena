export function ServiceCard({
  icon,
  title,
  description
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <article className="border-b border-zinc-200 py-8">
      <p className="text-sm text-zinc-500">{icon}</p>
      <h3 className="mt-3 font-serif text-3xl leading-tight">{title}</h3>
      <p className="mt-3 max-w-lg text-sm text-zinc-600">{description}</p>
    </article>
  );
}
