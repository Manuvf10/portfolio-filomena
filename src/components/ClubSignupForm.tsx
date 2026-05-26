'use client';

import { FormEvent, useState } from 'react';

type ClubSignupFormProps = {
  labels: {
    name: string;
    email: string;
    dedication: string;
    portfolio: string;
    about: string;
    submit: string;
    loading: string;
    success: string;
    error: string;
  };
};

export function ClubSignupForm({ labels }: ClubSignupFormProps) {
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

  const fields = [
    { label: labels.name, name: 'name', type: 'text' },
    { label: labels.email, name: 'email', type: 'email' },
    { label: labels.dedication, name: 'service', type: 'text' },
    { label: labels.portfolio, name: 'company', type: 'text' },
    { label: labels.about, name: 'message', type: 'text' }
  ];

  return (
    <form onSubmit={onSubmit} className="border-t border-black">
      {fields.map((field) => (
        <label
          key={field.name}
          className="grid grid-cols-[110px_minmax(0,1fr)] items-center gap-6 border-b border-black py-4 text-[13px] md:grid-cols-[150px_minmax(0,1fr)]"
        >
          <span>{field.label}</span>
          <input
            name={field.name}
            required={field.name !== 'company'}
            type={field.type}
            className="h-8 w-full border-0 bg-[#E1E1E1] px-3 text-[14px] outline-none ring-0 focus:bg-zinc-200"
          />
        </label>
      ))}

      <div className="flex flex-col items-center gap-3 py-8">
        <button type="submit" disabled={status === 'loading'} className="text-[13px] disabled:opacity-60">
          {status === 'loading' ? labels.loading : labels.submit}
        </button>
        {status === 'success' ? <p className="text-[13px] text-green-700">{labels.success}</p> : null}
        {status === 'error' ? <p className="text-[13px] text-red-700">{labels.error}</p> : null}
      </div>
    </form>
  );
}
