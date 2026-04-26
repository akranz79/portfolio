import LogBlock from "@/components/ui/LogBlock";
import SystemCard from "@/components/ui/SystemCard";
import ButtonCommand from "@/components/ui/ButtonCommand";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases Reais",
  description:
    "Problemas reais, soluções reais. Diagnósticos técnicos com resultado mensurável para o negócio.",
};

const cases = [
  {
    id: "CASE-001",
    status: "CONCLUÍDO",
    client: "E-commerce — Varejo Regional",
    context: "Loja virtual com ~800 produtos, operando há 4 anos. Tráfego orgânico consistente, mas conversão abaixo da média do segmento.",
    problem: "Taxa de conversão de 0.8% (benchmark: 2.1-2.8%). Abandono de carrinho acima de 78%. Tempo de carregamento no mobile: 6.2s.",
    solution: "Migração para VPS com cache Redis, otimização de imagens (WebP), minificação de JS/CSS e implementação de lazy loading.",
    result: "Conversão subiu para 2.3% em 45 dias. Tempo de carregamento: 1.8s. Receita mensal cresceu 31% sem aumento de investimento em tráfego.",
    logEntries: [
      { timestamp: "2024-03-01", level: "info" as const, message: "Auditoria inicial — 42 páginas analisadas" },
      { timestamp: "2024-03-03", level: "crit" as const, message: "LCP: 6.2s — acima do threshold de 2.5s" },
      { timestamp: "2024-03-05", level: "warn" as const, message: "Servidor compartilhado com throttling ativo" },
      { timestamp: "2024-03-12", level: "info" as const, message: "Migração VPS concluída — Redis configurado" },
      { timestamp: "2024-03-14", level: "ok" as const, message: "LCP reduzido para 1.8s — threshold atingido" },
      { timestamp: "2024-04-15", level: "ok" as const, message: "Conversão: 2.3% — crescimento de 187%" },
    ],
  },
  {
    id: "CASE-002",
    status: "CONCLUÍDO",
    client: "Prestadora de Serviços — B2B",
    context: "Consultoria financeira, 12 colaboradores. Sem presença orgânica. 100% dos clientes via indicação.",
    problem: "Zero conversão orgânica. Sem SSL válido, sem meta tags, sem política de privacidade (risco LGPD).",
    solution: "Reestruturação SEO on-page, SSL, Schema Markup, sitemap, LGPD e reescrita estratégica dos textos.",
    result: "3 palavras-chave na 1ª página do Google em 90 dias. Canal orgânico: 22% das novas oportunidades.",
    logEntries: [
      { timestamp: "2024-01-08", level: "crit" as const, message: "SSL expirado — alerta de segurança nos browsers" },
      { timestamp: "2024-01-10", level: "info" as const, message: "SSL renovado com renovação automática" },
      { timestamp: "2024-01-15", level: "info" as const, message: "Meta tags, OG e Schema Markup implementados" },
      { timestamp: "2024-01-20", level: "info" as const, message: "Política de privacidade LGPD publicada" },
      { timestamp: "2024-02-28", level: "ok" as const, message: "Posição #7 para 'consultoria financeira [cidade]'" },
      { timestamp: "2024-04-01", level: "ok" as const, message: "Orgânico: 22% das oportunidades — objetivo atingido" },
    ],
  },
  {
    id: "CASE-003",
    status: "CONCLUÍDO",
    client: "SaaS — Startup Early Stage",
    context: "Gestão para clínicas, 8 meses em operação. Churn elevado e tickets de lentidão sobrecarregando o suporte.",
    problem: "Churn mensal de 14%. N+1 queries causando 847 queries por request. Sem índices nas tabelas principais.",
    solution: "Resolução de 11 pontos de N+1, índices compostos nas tabelas críticas e cache Redis em nível de aplicação.",
    result: "Resposta: de 4.1s para 480ms. Churn caiu para 3.2%. Tickets de performance reduziram 91%.",
    logEntries: [
      { timestamp: "2024-06-01", level: "crit" as const, message: "Dashboard: 4.1s de resposta — usuários abandonando" },
      { timestamp: "2024-06-03", level: "crit" as const, message: "N+1 em 11 endpoints — 847 queries/request" },
      { timestamp: "2024-06-07", level: "info" as const, message: "Índices compostos criados — agendamentos/prontuários" },
      { timestamp: "2024-06-10", level: "info" as const, message: "Eager loading: 847 → 14 queries por request" },
      { timestamp: "2024-06-12", level: "ok" as const, message: "Tempo de resposta: 480ms — SLA atingido" },
      { timestamp: "2024-09-01", level: "ok" as const, message: "Churn trimestral: 3.2% — redução de 77%" },
    ],
  },
];

export default function CasesPage() {
  return (
    <div className="flex flex-col gap-12 py-8 animate-[fadeIn_0.4s_ease-in-out]">
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00E676]" />
          <span className="font-mono text-xs text-[#9CA3AF] tracking-widest uppercase">
            módulo — cases reais / relatórios pós-execução
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#E5E7EB]">Casos Reais</h1>
        <p className="text-[#9CA3AF] max-w-2xl leading-relaxed">
          Registros reais de diagnósticos e intervenções. Cada caso inclui contexto, problema, solução e resultado mensurável.
        </p>
      </section>

      <div className="flex flex-col gap-10">
        {cases.map(({ id, status, client, context, problem, solution, result, logEntries }) => (
          <div key={id} className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-[#4CC9F0]">{id}</span>
                <span className="h-3 w-px bg-[#1F2937]" />
                <span className="font-mono text-xs text-[#9CA3AF]">{client}</span>
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest px-2 py-0.5 border rounded-full text-[#00E676] bg-[#00E676]/10 border-[#00E676]/20 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676]" />
                {status}
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <SystemCard label="Contexto" accent="none"><p className="text-xs text-[#9CA3AF] leading-relaxed">{context}</p></SystemCard>
                <SystemCard label="Problema Identificado" accent="crit"><p className="text-xs text-[#9CA3AF] leading-relaxed">{problem}</p></SystemCard>
                <SystemCard label="Solução Aplicada" accent="info"><p className="text-xs text-[#9CA3AF] leading-relaxed">{solution}</p></SystemCard>
                <SystemCard label="Resultado para o Negócio" accent="ok"><p className="text-xs text-[#E5E7EB] leading-relaxed font-medium">{result}</p></SystemCard>
              </div>
              <LogBlock title={`${id} — execution log`} entries={logEntries} maxHeight="380px" />
            </div>
          </div>
        ))}
      </div>

      <section className="border border-[#1F2937] bg-[#121722] rounded-sm p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">próximo case</span>
          <p className="text-[#E5E7EB] text-lg font-medium">O seu negócio pode ser <span className="text-[#4CC9F0]">o próximo aqui.</span></p>
        </div>
        <div className="flex flex-col gap-3">
          <ButtonCommand href="/contact" variant="primary" size="lg">iniciar diagnóstico</ButtonCommand>
          <ButtonCommand href="/audit" variant="ghost" size="sm">ver como funciona a auditoria <ArrowRight size={12} /></ButtonCommand>
        </div>
      </section>
    </div>
  );
}
