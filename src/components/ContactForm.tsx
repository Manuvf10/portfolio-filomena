'use client';

import { FormEvent, useState } from 'react';

type ContactFormProps = {
  labels: {
    name: string;
    email: string;
    company: string;
    service: string;
    message: string;
    submit: string;
    success: string;
    error: string;
    loading: string;
  };
  serviceOptions: string[];
};

export function ContactForm({ labels, serviceOptions }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setStatus('loading');

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData.entries())),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      event.currentTarget.reset();
      setStatus('success');
      return;
    }

    setStatus('error');
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 border border-zinc-200 bg-white p-7 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block space-y-2 text-sm">
          <span>{labels.name}</span>
          <input name="name" required className="w-full border border-zinc-300 bg-stone px-3 py-2" />
        </label>
        <label className="block space-y-2 text-sm">
          <span>{labels.email}</span>
          <input name="email" type="email" required className="w-full border border-zinc-300 bg-stone px-3 py-2" />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block space-y-2 text-sm">
          <span>{labels.company}</span>
          <input name="company" className="w-full border border-zinc-300 bg-stone px-3 py-2" />
        </label>
        <label className="block space-y-2 text-sm">
          <span>{labels.service}</span>
          <select name="service" required className="w-full border border-zinc-300 bg-stone px-3 py-2">
            <option value="">—</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block space-y-2 text-sm">
        <span>{labels.message}</span>
        <textarea name="message" required rows={6} className="w-full border border-zinc-300 bg-stone px-3 py-2" />
      </label>

      <button type="submit" disabled={status === 'loading'} className="rounded-full bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-stone hover:bg-olive disabled:opacity-70">
        {status === 'loading' ? labels.loading : labels.submit}
      </button>

      {status === 'success' ? <p className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">{labels.success}</p> : null}
      {status === 'error' ? <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{labels.error}</p> : null}
    </form>
  );
}
