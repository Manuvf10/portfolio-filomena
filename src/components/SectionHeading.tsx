import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, children }: SectionHeadingProps) {
  return (
    <div className="mb-10 space-y-4">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-olive">{eyebrow}</p> : null}
      <h2 className="editorial-title text-4xl md:text-5xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm text-zinc-700 md:text-base">{description}</p> : null}
      {children}
    </div>
  );
}
