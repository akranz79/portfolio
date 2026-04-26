import LogBlock from "@/components/ui/LogBlock";
import SystemCard from "@/components/ui/SystemCard";
import ButtonCommand from "@/components/ui/ButtonCommand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mim",
  description:
    "Perfil do sistema. Engenharia de software com foco em resultado de negócio.",
};

const profile = [
  { label: "USER", value: "Seu Nome" },
  { label: "ROLE", value: "Engenheiro de Software" },
  { label: "FOCUS", value: "Engenharia aplicada a negócio" },
  { label: "EXP", value: "8+ anos em ambientes críticos" },
  { label: "STATUS", value: "Disponível para projetos" },
];

const timeline = [
  { timestamp: "2016", level: "info" as const, message: "Início na área de desenvolvimento — foco em sistemas web e automação" },
  { timestamp: "2018", level: "info" as const, message: "Primeiro projeto em ambiente crítico — sistema de gestão hospitalar" },
  { timestamp: "2019", level: "ok" as const, message: "Certificação em segurança de aplicações — OWASP Top 10 aplicado" },
  { timestamp: "2020", level: "info" as const, message: "Transição para full-stack — Node.js, React e PostgreSQL" },
  { timestamp: "2021", level: "warn" as const, message: "Projeto de alta disponibilidade: migração zero-downtime de banco legado" },
  { timestamp: "2022", level: "ok" as const, message: "Primeiro produto SaaS como tech lead — 300+ usuários ativos" },
  { timestamp: "2023", level: "info" as const, message: "Especialização em diagnóstico de performance e auditoria de sistemas" },
  { timestamp: "2024", level: "ok" as const, message: "Foco em consultoria técnica com impacto direto em resultado de negócio" },
];

const values = [
  {
    label: "Ambientes Críticos",
    description:
      "Experiência em sistemas onde falha tem custo real — saúde, financeiro e e-commerce de alta demanda. Isso muda como você trata logs, erros e performance.",
    accent: "warn" as const,
  },
  {
    label: "Engenharia com Propósito",
    description:
      "Tecnologia não é fim. É meio. Cada decisão técnica precisa ter resposta clara: como isso impacta o negócio? Se não tem resposta, não tem prioridade.",
    accent: "info" as const,
  },
  {
    label: "Clareza sobre Complexidade",
    description:
      "O trabalho técnico mais valioso é transformar complexidade em clareza. Diagnósticos objetivos, linguagem executiva, ação imediata.",
    accent: "ok" as const,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 py-8 animate-[fadeIn_0.4s_ease-in-out]">

      {/* ── PAGE HEADER ── */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#4CC9F0]" />
          <span className="font-mono text-xs text-[#9CA3AF] tracking-widest uppercase">
            módulo — whoami / perfil do sistema
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#E5E7EB]">Sobre Mim</h1>
      </section>

      {/* ── PROFILE BLOCK + TIMELINE ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile */}
        <div className="flex flex-col gap-4">
          <SystemCard label="Identificação do Sistema" accent="info">
            <div className="flex flex-col gap-3">
              {profile.map(({ label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="font-mono text-[10px] text-[#4CC9F0] tracking-widest w-16 shrink-0 mt-0.5">{label}</span>
                  <span className="text-[#9CA3AF] text-xs">:</span>
                  <span className="text-[#E5E7EB] text-sm">{value}</span>
                </div>
              ))}
            </div>
          </SystemCard>

          <div className="flex flex-col gap-4">
            {values.map(({ label, description, accent }) => (
              <SystemCard key={label} label={label} accent={accent}>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{description}</p>
              </SystemCard>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">
            trajetória — execution log
          </span>
          <LogBlock title="career.log" entries={timeline} maxHeight="520px" />
        </div>
      </div>

      {/* ── POSITIONING ── */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">
            posicionamento
          </span>
          <span className="flex-1 h-px bg-[#1F2937]" />
        </div>
        <div className="bg-[#121722] border border-[#1F2937] rounded-sm p-6 flex flex-col gap-4">
          <p className="text-[#E5E7EB] text-base leading-relaxed max-w-2xl">
            Não sou só desenvolvedor. Sou o profissional que senta com você, lê os números do negócio
            e diz{" "}
            <span className="text-[#4CC9F0] font-medium">
              &quot;o problema não é seu site, é a velocidade dele — e aqui está o quanto isso está custando.&quot;
            </span>
          </p>
          <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-2xl">
            Trabalho com quem quer decisões baseadas em dados técnicos reais, não em suposições. Se você precisa de
            alguém que entregue diagnóstico, plano e execução com clareza, estamos alinhados.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonCommand href="/contact" variant="primary" size="md">
              iniciar conversa
            </ButtonCommand>
            <ButtonCommand href="/cases" variant="secondary" size="md">
              ver meu trabalho
            </ButtonCommand>
          </div>
        </div>
      </section>

    </div>
  );
}
