import Link from 'next/link';

import { AuthShell } from '@/components/auth/auth-shell';
import { SignupForm } from '@/components/auth/signup-form';

export default function SignupPage() {
  return (
    <AuthShell
      title="Crie sua conta"
      subtitle="Estrutura pronta para autenticação real e integração futura com backend."
    >
      <div className="w-full max-w-md space-y-6">
        <SignupForm />
        <p className="text-sm text-slate-500">
          Já possui conta?{' '}
          <Link className="font-semibold text-[#ef4ea7]" href="/login">
            Entrar
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
