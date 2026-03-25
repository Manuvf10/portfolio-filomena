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
};

export function ContactForm({ labels }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setStatus('loading');

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData.entries())),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      event.currentTarget.reset();
      setStatus('success');
      return;
    }

    setStatus('error');
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 border border-zinc-300 bg-white p-6 md:p-8">
      {['name', 'email', 'company', 'service'].map((field) => (
        <label key={field} className="block space-y-2 text-sm">
          <span className="text-xs uppercase tracking-[0.14em] text-zinc-500">{labels[field as 'name' | 'email' | 'company' | 'service']}</span>
          <input
            name={field}
            required={field !== 'company'}
            type={field === 'email' ? 'email' : 'text'}
            className="w-full border-0 border-b border-zinc-300 bg-transparent px-0 py-2 text-base focus:border-ink"
          />
        </label>
      ))}

      <label className="block space-y-2 text-sm">
        <span className="text-xs uppercase tracking-[0.14em] text-zinc-500">{labels.message}</span>
        <textarea name="message" required rows={5} className="w-full border border-zinc-300 bg-stone px-3 py-3" />
      </label>

      <button type="submit" disabled={status === 'loading'} className="bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-stone hover:bg-olive disabled:opacity-70">
        {status === 'loading' ? labels.loading : labels.submit}
      </button>

      {status === 'success' ? <p className="text-sm text-green-700">{labels.success}</p> : null}
      {status === 'error' ? <p className="text-sm text-red-700">{labels.error}</p> : null}
    </form>
  );
}
