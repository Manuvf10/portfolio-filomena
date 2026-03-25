export function ServiceCard({
  icon,
  title,
  description,
  index
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  const highlighted = index % 3 === 0;

  return (
    <article className={`group border p-6 transition duration-500 ${highlighted ? 'border-ink bg-ink text-stone' : 'border-zinc-300 bg-stone text-ink hover:border-ink'}`}>
      <p className={`text-lg ${highlighted ? 'text-stone/90' : 'text-olive'}`}>{icon}</p>
      <h3 className="mt-4 font-serif text-3xl leading-tight">{title}</h3>
      <p className={`mt-4 text-sm ${highlighted ? 'text-stone/80' : 'text-zinc-700'}`}>{description}</p>
    </article>
  );
}
