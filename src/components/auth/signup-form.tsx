'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

import { SignupInput, signupSchema } from '@/lib/schemas';

const initial: SignupInput = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export function SignupForm() {
  const router = useRouter();
  const [values, setValues] = useState(initial);
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = signupSchema.safeParse(values);

    if (!result.success) {
      setError(result.error.issues[0]?.message ?? 'Dados inválidos');
      return;
    }

    setError('');
    router.push('/login');
  };

  return (
    <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold text-slate-900">Criar conta</h2>
      <p className="text-sm text-slate-500">Configure seu acesso para o painel.</p>

      {['name', 'email', 'password', 'confirmPassword'].map((field) => (
        <input
          key={field}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#ef4ea7]"
          placeholder={
            field === 'name'
              ? 'Nome completo'
              : field === 'email'
                ? 'Email'
                : field === 'password'
                  ? 'Senha'
                  : 'Confirmar senha'
          }
          type={field.includes('password') ? 'password' : 'text'}
          value={values[field as keyof SignupInput]}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, [field]: event.target.value }))
          }
        />
      ))}

      {error ? <p className="text-sm text-red-500">{error}</p> : null}

      <button className="w-full rounded-2xl bg-panel-navy px-4 py-3 font-semibold text-white" type="submit">
        Criar conta
      </button>
    </form>
  );
}
