import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  inverted?: boolean;
};

export function SectionHeading({ eyebrow, title, description, children, inverted = false }: SectionHeadingProps) {
  return (
    <div className="mb-10 space-y-4">
      {eyebrow ? <p className={`text-xs uppercase tracking-[0.2em] ${inverted ? 'text-stone/70' : 'text-olive'}`}>{eyebrow}</p> : null}
      <h2 className="editorial-title text-4xl md:text-5xl">{title}</h2>
      {description ? <p className={`max-w-2xl text-sm md:text-base ${inverted ? 'text-stone/80' : 'text-zinc-700'}`}>{description}</p> : null}
      {children}
    </div>
  );
}
