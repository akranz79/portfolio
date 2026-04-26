import { LucideIcon } from "lucide-react";
import ScoreBar from "./ScoreBar";

type Status = "ok" | "warn" | "crit" | "info";

interface DiagnosticCardProps {
  dimension: string;
  score: number;
  status: Status;
  description: string;
  findings?: string[];
  icon?: LucideIcon;
}

const statusConfig = {
  ok: {
    label: "OK",
    dot: "bg-[#00E676]",
    badge: "text-[#00E676] bg-[#00E676]/10 border-[#00E676]/20",
  },
  warn: {
    label: "ATENÇÃO",
    dot: "bg-[#FFD166]",
    badge: "text-[#FFD166] bg-[#FFD166]/10 border-[#FFD166]/20",
  },
  crit: {
    label: "CRÍTICO",
    dot: "bg-[#EF476F]",
    badge: "text-[#EF476F] bg-[#EF476F]/10 border-[#EF476F]/20",
  },
  info: {
    label: "INFO",
    dot: "bg-[#4CC9F0]",
    badge: "text-[#4CC9F0] bg-[#4CC9F0]/10 border-[#4CC9F0]/20",
  },
};

export default function DiagnosticCard({
  dimension,
  score,
  status,
  description,
  findings = [],
  icon: Icon,
}: DiagnosticCardProps) {
  const { label, dot, badge } = statusConfig[status];

  return (
    <div className="bg-[#161B26] border border-[#1F2937] rounded-sm p-5 flex flex-col gap-4 hover:border-[#374151] transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          {Icon && <Icon size={14} className="text-[#9CA3AF] mt-0.5 shrink-0" />}
          <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">
            {dimension}
          </span>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest px-2 py-0.5 border rounded-full ${badge}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
          {label}
        </span>
      </div>

      {/* Score */}
      <ScoreBar score={score} showValue={false} size="sm" />

      {/* Description */}
      <p className="text-[#9CA3AF] text-xs leading-relaxed">{description}</p>

      {/* Findings */}
      {findings.length > 0 && (
        <ul className="flex flex-col gap-1">
          {findings.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-[#9CA3AF]">
              <span className="font-mono text-[#4CC9F0] mt-0.5 shrink-0">—</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
