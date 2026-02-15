'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

import { useAuth } from '@/context/auth-context';
import { LoginInput, loginSchema } from '@/lib/schemas';

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [values, setValues] = useState<LoginInput>({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = loginSchema.safeParse(values);

    if (!result.success) {
      setError(result.error.issues[0]?.message ?? 'Dados inválidos');
      return;
    }

    setError('');
    login(values.email);
    router.push('/dashboard');
  };

  return (
    <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold text-slate-900">Entrar</h2>
      <p className="text-sm text-slate-500">Acesse seu painel administrativo.</p>

      <input
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#ef4ea7]"
        placeholder="Email"
        type="email"
        value={values.email}
        onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
      />
      <input
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#ef4ea7]"
        placeholder="Senha"
        type="password"
        value={values.password}
        onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))}
      />

      {error ? <p className="text-sm text-red-500">{error}</p> : null}

      <button className="w-full rounded-2xl bg-panel-navy px-4 py-3 font-semibold text-white" type="submit">
        Entrar
      </button>
    </form>
  );
}
