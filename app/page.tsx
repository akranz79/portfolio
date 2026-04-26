import { Cpu, ShieldCheck, BarChart2, FileText, ArrowRight } from "lucide-react";
import ButtonCommand from "@/components/ui/ButtonCommand";
import SystemCard from "@/components/ui/SystemCard";
import ScoreBar from "@/components/ui/ScoreBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home — Dashboard do Sistema",
  description:
    "Engenharia de software aplicada a decisões de negócio. Diagnósticos precisos, soluções claras.",
};

const statusItems = [
  {
    id: "perf",
    icon: Cpu,
    label: "Performance",
    description: "Sistemas que respondem rápido convertem mais e custam menos.",
    score: 92,
  },
  {
    id: "sec",
    icon: ShieldCheck,
    label: "Segurança",
    description: "Proteção de dados como requisito de negócio, não burocracia.",
    score: 88,
  },
  {
    id: "seo",
    icon: BarChart2,
    label: "Visibilidade",
    description: "Presença digital que gera demanda qualificada e previsível.",
    score: 76,
  },
  {
    id: "lgpd",
    icon: FileText,
    label: "Conformidade",
    description: "LGPD e boas práticas como vantagem competitiva, não risco.",
    score: 84,
  },
];

const featuredCapabilities = [
  {
    id: "audit",
    label: "Auditoria de Saúde Digital",
    description:
      "Relatório executivo do estado real do seu site. Performance, SEO, segurança e LGPD em um diagnóstico claro.",
    href: "/audit",
    accent: "info" as const,
  },
  {
    id: "cases",
    label: "Cases Reais",
    description:
      "Problemas reais. Soluções reais. Resultados mensuráveis. Sem estudo de caso genérico.",
    href: "/cases",
    accent: "ok" as const,
  },
  {
    id: "about",
    label: "Perfil do Sistema",
    description:
      "Quem está por trás das análises. Experiência em ambientes críticos e foco em resultado.",
    href: "/about",
    accent: "warn" as const,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 py-8 animate-[fadeIn_0.4s_ease-in-out]">

      {/* ── HERO ── */}
      <section className="flex flex-col gap-8 pt-4">
        {/* System boot line */}
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
          <span className="font-mono text-xs text-[#9CA3AF] tracking-widest uppercase">
            sistema operacional — v2.0.1 — todos os módulos carregados
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <p className="font-mono text-xs text-[#4CC9F0] tracking-widest uppercase">
            $ whoami —— output:
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#E5E7EB] leading-tight">
            Engenharia de Software
            <br />
            <span className="text-[#4CC9F0]">aplicada a decisões</span>
            <br />
            de negócio.
          </h1>
          <p className="text-[#9CA3AF] text-base leading-relaxed max-w-xl">
            Diagnósticos precisos. Soluções objetivas. Resultados que aparecem
            no faturamento — não apenas no relatório técnico.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <ButtonCommand href="/audit" variant="primary" size="lg">
            executar auditoria
          </ButtonCommand>
          <ButtonCommand href="/cases" variant="secondary" size="lg">
            ver soluções
          </ButtonCommand>
          <ButtonCommand href="/contact" variant="ghost" size="lg">
            iniciar conversa
          </ButtonCommand>
        </div>
      </section>

      {/* ── STATUS GRID ── */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">
            diagnóstico — dimensões monitoradas
          </span>
          <span className="flex-1 h-px bg-[#1F2937]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statusItems.map(({ id, icon: Icon, label, description, score }) => (
            <SystemCard
              key={id}
              label={label}
              accent={score >= 80 ? "ok" : score >= 50 ? "warn" : "crit"}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Icon size={14} className="text-[#9CA3AF]" />
                  <ScoreBar score={score} size="sm" />
                </div>
                <p className="text-[10px] text-[#9CA3AF] leading-relaxed">{description}</p>
              </div>
            </SystemCard>
          ))}
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">
            módulos disponíveis
          </span>
          <span className="flex-1 h-px bg-[#1F2937]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredCapabilities.map(({ id, label, description, href, accent }) => (
            <SystemCard key={id} title={label} accent={accent}>
              <div className="flex flex-col gap-4">
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{description}</p>
                <ButtonCommand href={href} variant="ghost" size="sm">
                  acessar módulo
                  <ArrowRight size={12} />
                </ButtonCommand>
              </div>
            </SystemCard>
          ))}
        </div>
      </section>

      {/* ── POSITIONING STATEMENT ── */}
      <section className="border border-[#1F2937] bg-[#121722] rounded-sm p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">
            stdout —— mensagem do sistema
          </span>
          <p className="text-[#E5E7EB] text-lg font-medium max-w-lg">
            Pare de adivinhar.{" "}
            <span className="text-[#4CC9F0]">Comece a decidir com clareza.</span>
          </p>
        </div>
        <ButtonCommand href="/contact" variant="primary" size="lg">
          iniciar diagnóstico
        </ButtonCommand>
      </section>

    </div>
  );
}
