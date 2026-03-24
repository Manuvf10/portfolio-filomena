import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, children, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`mb-10 space-y-4 ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow ? <p className="text-[11px] uppercase tracking-[0.22em] text-olive">{eyebrow}</p> : null}
      <h2 className="editorial-title text-4xl leading-[0.95] md:text-6xl">{title}</h2>
      {description ? <p className={`text-sm text-zinc-700 md:text-base ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>{description}</p> : null}
      {children}
    </div>
  );
}
