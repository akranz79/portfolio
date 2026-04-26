import ButtonCommand from "@/components/ui/ButtonCommand";
import { Mail, MessageSquare, Link2, Code2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Pare de adivinhar. Comece a decidir com clareza. Entre em contato para iniciar um diagnóstico.",
};

const contactOptions = [
  {
    id: "email",
    icon: Mail,
    label: "E-mail direto",
    value: "seu@email.com",
    description: "Para propostas e diagnósticos formais",
    href: "mailto:seu@email.com",
    variant: "primary" as const,
    cta: "enviar e-mail",
  },
  {
    id: "whatsapp",
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+55 (11) 9 9999-9999",
    description: "Para conversa rápida e alinhamento inicial",
    href: "https://wa.me/5511999999999?text=Olá, gostaria de iniciar um diagnóstico.",
    variant: "secondary" as const,
    cta: "abrir conversa",
  },
  {
    id: "linkedin",
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/seuperfil",
    description: "Para contexto profissional e network",
    href: "https://linkedin.com/in/seuperfil",
    variant: "ghost" as const,
    cta: "ver perfil",
  },
  {
    id: "github",
    icon: Code2,
    label: "GitHub",
    value: "github.com/seuuser",
    description: "Para ver o código e os projetos",
    href: "https://github.com/seuuser",
    variant: "ghost" as const,
    cta: "ver repositórios",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12 py-8 animate-[fadeIn_0.4s_ease-in-out]">

      {/* ── PAGE HEADER ── */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#4CC9F0] animate-pulse" />
          <span className="font-mono text-xs text-[#9CA3AF] tracking-widest uppercase">
            módulo — contato / prompt final
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#E5E7EB]">Contato</h1>
      </section>

      {/* ── MAIN PROMPT ── */}
      <section className="bg-[#121722] border border-[#1F2937] rounded-sm p-8 flex flex-col gap-6">
        {/* Terminal prompt style */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs text-[#9CA3AF] tracking-widest uppercase">
            stdout —— chamada do sistema
          </span>
          <div className="flex items-start gap-3">
            <span className="font-mono text-[#4CC9F0] text-xl">$</span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#E5E7EB] leading-snug">
              Pare de adivinhar.
              <br />
              <span className="text-[#4CC9F0]">Comece a decidir com clareza.</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-2 pl-7">
          <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xl">
            Se o seu site está custando mais do que deveria, convertendo menos do que poderia ou
            te deixando vulnerável sem que você saiba — isso é resolvível.
          </p>
          <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xl">
            Um diagnóstico leva 48h. O plano de ação chega em formato executivo. A primeira conversa é gratuita.
          </p>
        </div>

        <div className="pl-7 flex flex-wrap gap-3">
          <ButtonCommand href="mailto:seu@email.com" variant="primary" size="lg">
            iniciar diagnóstico
          </ButtonCommand>
          <ButtonCommand href="https://wa.me/5511999999999?text=Olá, gostaria de iniciar um diagnóstico." variant="secondary" size="lg" external>
            via WhatsApp
          </ButtonCommand>
        </div>
      </section>

      {/* ── CONTACT OPTIONS ── */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">
            canais disponíveis
          </span>
          <span className="flex-1 h-px bg-[#1F2937]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactOptions.map(({ id, icon: Icon, label, value, description, href, variant, cta }) => (
            <div key={id} className="bg-[#161B26] border border-[#1F2937] rounded-sm p-5 flex flex-col gap-4 hover:border-[#374151] transition-all duration-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-[#1F2937] flex items-center justify-center">
                  <Icon size={14} className="text-[#9CA3AF]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">{label}</p>
                  <p className="text-sm text-[#E5E7EB]">{value}</p>
                </div>
              </div>
              <p className="text-xs text-[#9CA3AF]">{description}</p>
              <ButtonCommand href={href} variant={variant} size="sm" external={id !== "email"}>
                {cta}
                <ArrowRight size={12} />
              </ButtonCommand>
            </div>
          ))}
        </div>
      </section>

      {/* ── SYSTEM MESSAGE ── */}
      <div className="flex items-center gap-3 border-t border-[#1F2937] pt-6">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
        <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest">
          sistema aguardando input — resposta em até 24h
        </span>
      </div>

    </div>
  );
}
