import Link from 'next/link';

import { AuthShell } from '@/components/auth/auth-shell';
import { LoginForm } from '@/components/auth/login-form';

export default function LoginPage() {
  return (
    <AuthShell
      title="Bem-vindo de volta"
      subtitle="Gerencie métricas, campanhas e crescimento da empresa em um painel completo."
    >
      <div className="w-full max-w-md space-y-6">
        <LoginForm />
        <p className="text-sm text-slate-500">
          Não tem conta?{' '}
          <Link className="font-semibold text-[#ef4ea7]" href="/signup">
            Criar conta
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
