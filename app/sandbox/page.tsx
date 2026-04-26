"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown, Code2, ExternalLink } from "lucide-react";
import ButtonCommand from "@/components/ui/ButtonCommand";

const projects = [
  {
    id: "proj-001",
    name: "seo-toolkit",
    path: "/projects/seo-toolkit",
    description: "Plataforma de auditoria e diagnóstico SEO com scoring automatizado, geração de relatórios executivos em PDF e análise de múltiplas dimensões (performance, LGPD, segurança).",
    stack: ["Node.js", "Puppeteer", "Lighthouse API", "PDFKit", "Express"],
    learnings: [
      "Orquestração de múltiplas APIs de análise",
      "Geração programática de PDFs estruturados",
      "Normalização e pontuação de dados técnicos para audiência não técnica",
    ],
    github: "https://github.com",
    status: "em desenvolvimento",
  },
  {
    id: "proj-002",
    name: "transparency-platform",
    path: "/projects/transparency-platform",
    description: "Dashboard público de gastos de deputados federais. Consome a API oficial da Câmara dos Deputados, calcula indicadores de outliers e gera cards para Instagram Stories.",
    stack: ["React", "Node.js", "Prisma", "PostgreSQL", "Recharts"],
    learnings: [
      "Integração com APIs governamentais brasileiras",
      "Cálculo de outliers e normalização estatística",
      "Design de dados para comunicação visual (Instagram Cards)",
    ],
    github: "https://github.com",
    status: "concluído",
  },
  {
    id: "proj-003",
    name: "yellow-pages",
    path: "/projects/yellow-pages",
    description: "Plataforma de negócios locais com roteamento SEO-friendly, RBAC para donos e admins, e sistema de templates dinâmicos por tipo de negócio.",
    stack: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT"],
    learnings: [
      "Roteamento dinâmico com slugs SEO-friendly",
      "RBAC com JWT e refresh tokens",
      "Sistemas de templates com customização por categoria",
    ],
    github: "https://github.com",
    status: "em desenvolvimento",
  },
  {
    id: "proj-004",
    name: "kanban-sheets",
    path: "/projects/kanban-sheets",
    description: "Board Kanban completo com drag-and-drop e Google Sheets como backend. CRUD total sincronizado via Google Apps Script.",
    stack: ["Vanilla HTML", "CSS3", "JavaScript", "Google Apps Script", "Google Sheets API"],
    learnings: [
      "Drag and drop nativo sem bibliotecas",
      "Google Apps Script como backend serverless",
      "Sincronização otimista entre UI e planilha",
    ],
    github: "https://github.com",
    status: "concluído",
  },
];

const statusColors: Record<string, string> = {
  "concluído": "text-[#00E676]",
  "em desenvolvimento": "text-[#FFD166]",
};

export default function SandboxPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <div className="flex flex-col gap-12 py-8 animate-[fadeIn_0.4s_ease-in-out]">
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#9CA3AF]" />
          <span className="font-mono text-xs text-[#9CA3AF] tracking-widest uppercase">
            módulo — sandbox / diretório de projetos
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#E5E7EB]">Projetos de Aprendizado</h1>
        <p className="text-[#9CA3AF] max-w-2xl leading-relaxed">
          Repositório de projetos técnicos. Cada item representa uma exploração deliberada de uma tecnologia ou padrão.
          Abertos, documentados e com aprendizados explícitos.
        </p>
      </section>

      {/* Directory listing */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">
            ls -la /projects
          </span>
          <span className="flex-1 h-px bg-[#1F2937]" />
          <span className="font-mono text-[10px] text-[#9CA3AF]">{projects.length} items</span>
        </div>

        <div className="bg-[#0B0E14] border border-[#1F2937] rounded-sm overflow-hidden">
          {/* Dir header */}
          <div className="flex items-center gap-4 px-4 py-2 border-b border-[#1F2937] bg-[#121722]">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF476F]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD166]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#00E676]/60" />
            </div>
            <span className="font-mono text-[10px] text-[#9CA3AF] ml-2">~/projects</span>
          </div>

          {/* Items */}
          {projects.map((proj, i) => (
            <div key={proj.id} className={i < projects.length - 1 ? "border-b border-[#1F2937]" : ""}>
              {/* Directory row */}
              <button
                onClick={() => toggle(proj.id)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#1F2937]/50 transition-colors duration-150"
              >
                {openId === proj.id
                  ? <ChevronDown size={14} className="text-[#4CC9F0] shrink-0" />
                  : <ChevronRight size={14} className="text-[#9CA3AF] shrink-0" />
                }
                <span className="font-mono text-sm text-[#4CC9F0]">drwxr-xr-x</span>
                <span className="font-mono text-sm text-[#E5E7EB] flex-1">{proj.name}/</span>
                <span className={`font-mono text-[10px] tracking-widest uppercase ${statusColors[proj.status] || "text-[#9CA3AF]"}`}>
                  {proj.status}
                </span>
              </button>

              {/* Expanded card */}
              {openId === proj.id && (
                <div className="border-t border-[#1F2937] bg-[#121722] p-5 flex flex-col gap-5">
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">{proj.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">stack</span>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.stack.map((tech) => (
                          <span key={tech} className="font-mono text-[10px] px-2 py-0.5 bg-[#1F2937] border border-[#374151] rounded text-[#9CA3AF]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">aprendizados</span>
                      <ul className="flex flex-col gap-1">
                        {proj.learnings.map((l, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#9CA3AF]">
                            <span className="font-mono text-[#4CC9F0] shrink-0">—</span>
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <ButtonCommand href={proj.github} variant="ghost" size="sm" external>
                      <Code2 size={12} />
                      ver repositório
                    </ButtonCommand>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="flex items-start gap-3 bg-[#121722] border border-[#1F2937] rounded-sm px-5 py-4">
        <span className="font-mono text-[10px] text-[#4CC9F0] tracking-widest uppercase shrink-0 mt-0.5">// nota</span>
        <p className="text-xs text-[#9CA3AF] leading-relaxed">
          Esta seção contém projetos de aprendizado e experimentação. Para projetos com resultados de negócio documentados, consulte os{" "}
          <a href="/cases" className="text-[#4CC9F0] hover:underline underline-offset-2">Cases Reais</a>.
        </p>
      </div>
    </div>
  );
}
