import {
  Cpu,
  ShieldCheck,
  BarChart2,
  FileText,
  Globe,
  ArrowRight,
} from "lucide-react";
import ScoreBar from "@/components/ui/ScoreBar";
import DiagnosticCard from "@/components/ui/DiagnosticCard";
import ActionItem from "@/components/ui/ActionItem";
import SystemCard from "@/components/ui/SystemCard";
import ButtonCommand from "@/components/ui/ButtonCommand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auditoria de Saúde Digital",
  description:
    "Relatório executivo do estado real do seu site. Performance, SEO, segurança e LGPD diagnosticados com clareza.",
};

const dimensions = [
  {
    dimension: "Performance",
    score: 42,
    status: "crit" as const,
    icon: Cpu,
    description:
      "O site demora mais de 4 segundos para carregar no mobile. Cada segundo a mais reduz conversões em até 20%. O servidor responde lentamente e não há cache configurado.",
    findings: [
      "LCP acima de 4s (ideal: abaixo de 2.5s)",
      "Imagens sem otimização: +1.8MB de payload desnecessário",
      "Sem cache de servidor configurado",
      "JS não está sendo minimizado",
    ],
  },
  {
    dimension: "SEO",
    score: 58,
    status: "warn" as const,
    icon: BarChart2,
    description:
      "Presença orgânica limitada. Páginas sem meta tags adequadas e estrutura de headings inconsistente prejudicam o ranqueamento.",
    findings: [
      "14 páginas sem meta description",
      "Estrutura de H1/H2 inconsistente",
      "Sitemap.xml desatualizado",
      "Imagens sem atributo alt",
    ],
  },
  {
    dimension: "Segurança",
    score: 71,
    status: "warn" as const,
    icon: ShieldCheck,
    description:
      "Configuração básica de segurança presente, mas com lacunas relevantes. Headers de segurança ausentes expõem o site a ataques comuns.",
    findings: [
      "HTTPS configurado — OK",
      "Content Security Policy ausente",
      "X-Frame-Options não configurado",
      "Certificado SSL com 12 dias para expirar",
    ],
  },
  {
    dimension: "LGPD",
    score: 35,
    status: "crit" as const,
    icon: FileText,
    description:
      "Alto risco de autuação. Coleta de dados sem consentimento explícito e política de privacidade genérica não atendem à Lei 13.709/2018.",
    findings: [
      "Sem banner de consentimento de cookies",
      "Política de privacidade genérica sem DPO indicado",
      "Formulários coletam dados sem finalidade declarada",
      "Ausência de canal para requisição de dados (Art. 18)",
    ],
  },
  {
    dimension: "Indexação",
    score: 80,
    status: "ok" as const,
    icon: Globe,
    description:
      "Páginas principais estão indexadas e acessíveis ao Google. Monitoramento ativo confirma ausência de bloqueios no robots.txt.",
    findings: [
      "38 de 42 páginas indexadas",
      "Robots.txt configurado corretamente",
      "Google Search Console ativo",
    ],
  },
];

const overallScore = Math.round(
  dimensions.reduce((acc, d) => acc + d.score, 0) / dimensions.length
);

const actionPlan = [
  {
    label: "Ativar cache de servidor e CDN para assets estáticos",
    description: "Impacto direto na performance — redução estimada de 40% no tempo de carga",
    priority: "high" as const,
    status: "pending" as const,
  },
  {
    label: "Otimizar e converter imagens para WebP",
    description: "Redução de payload de ~1.8MB. Melhora LCP em mobile",
    priority: "high" as const,
    status: "pending" as const,
  },
  {
    label: "Implementar banner de consentimento LGPD",
    description: "Requisito legal. Elimina risco de autuação imediata",
    priority: "high" as const,
    status: "pending" as const,
  },
  {
    label: "Renovar certificado SSL e configurar renovação automática",
    description: "Prazo: 12 dias. Vencimento gera alerta de segurança para usuários",
    priority: "high" as const,
    status: "pending" as const,
  },
  {
    label: "Adicionar meta descriptions nas 14 páginas sem descrição",
    description: "Melhora CTR orgânico. Resultado visível em 2-4 semanas",
    priority: "medium" as const,
    status: "pending" as const,
  },
  {
    label: "Configurar Content Security Policy e headers de segurança",
    description: "Proteção contra XSS e clickjacking",
    priority: "medium" as const,
    status: "pending" as const,
  },
  {
    label: "Atualizar política de privacidade com DPO e finalidades declaradas",
    description: "Conformidade LGPD Art. 18 e Art. 41",
    priority: "medium" as const,
    status: "pending" as const,
  },
];

export default function AuditPage() {
  return (
    <div className="flex flex-col gap-12 py-8 animate-[fadeIn_0.4s_ease-in-out]">

      {/* ── PAGE HEADER ── */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#FFD166] animate-pulse" />
          <span className="font-mono text-xs text-[#9CA3AF] tracking-widest uppercase">
            módulo — auditoria de saúde digital
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#E5E7EB]">
          Relatório de Diagnóstico
        </h1>
        <p className="text-[#9CA3AF] max-w-2xl leading-relaxed">
          Uma análise objetiva do estado real do seu site. Cada dimensão é avaliada
          com foco no impacto direto no negócio — não apenas em métricas técnicas.
        </p>
      </section>

      {/* ── OVERALL SCORE ── */}
      <SystemCard label="Score Geral do Sistema" accent={overallScore >= 80 ? "ok" : overallScore >= 50 ? "warn" : "crit"}>
        <div className="flex flex-col gap-5">
          <div className="flex items-end gap-4">
            <span
              className={`font-mono text-6xl font-bold ${
                overallScore >= 80
                  ? "text-[#00E676]"
                  : overallScore >= 50
                  ? "text-[#FFD166]"
                  : "text-[#EF476F]"
              }`}
            >
              {overallScore}
            </span>
            <span className="text-[#9CA3AF] text-lg mb-2">/100</span>
          </div>
          <ScoreBar score={overallScore} size="lg" />
          <p className="text-xs text-[#9CA3AF] leading-relaxed max-w-lg">
            Score calculado com base nas 5 dimensões críticas. Melhorias nos itens P1
            do plano de ação elevariam o score para acima de 70 em 2 semanas.
          </p>
        </div>
      </SystemCard>

      {/* ── DIAGNOSTIC DIMENSIONS ── */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">
            diagnóstico por dimensão
          </span>
          <span className="flex-1 h-px bg-[#1F2937]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {dimensions.map((d) => (
            <DiagnosticCard key={d.dimension} {...d} />
          ))}
        </div>
      </section>

      {/* ── ACTION PLAN ── */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">
            plano de ação — itens priorizados
          </span>
          <span className="flex-1 h-px bg-[#1F2937]" />
        </div>
        <SystemCard label="Ações recomendadas" accent="info">
          <div className="flex flex-col">
            {actionPlan.map((item, i) => (
              <ActionItem key={i} {...item} />
            ))}
          </div>
        </SystemCard>
      </section>

      {/* ── CTA ── */}
      <section className="border border-[#1F2937] bg-[#121722] rounded-sm p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">
            próximo passo
          </span>
          <p className="text-[#E5E7EB] text-lg font-medium max-w-lg">
            Quer esse diagnóstico aplicado ao{" "}
            <span className="text-[#4CC9F0]">seu site?</span>
          </p>
          <p className="text-[#9CA3AF] text-sm">
            Entrego o relatório completo em até 48h, com plano de ação priorizado e custo estimado de cada correção.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <ButtonCommand href="/contact" variant="primary" size="lg">
            solicitar auditoria
          </ButtonCommand>
          <ButtonCommand href="/cases" variant="ghost" size="sm">
            ver resultados reais
            <ArrowRight size={12} />
          </ButtonCommand>
        </div>
      </section>

    </div>
  );
}
