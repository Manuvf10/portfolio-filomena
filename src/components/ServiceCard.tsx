export function ServiceCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <article className="rounded-none border border-zinc-200 bg-white/50 p-6 shadow-soft transition hover:-translate-y-1">
      <p className="text-lg text-olive">{icon}</p>
      <h3 className="mt-3 font-serif text-2xl">{title}</h3>
      <p className="mt-3 text-sm text-zinc-700">{description}</p>
    </article>
  );
}
