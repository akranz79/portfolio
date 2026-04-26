import { ReactNode } from "react";

interface SystemCardProps {
  title?: string;
  subtitle?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  accent?: "ok" | "warn" | "crit" | "info" | "none";
}

const accentColors = {
  ok: "border-l-[#00E676]",
  warn: "border-l-[#FFD166]",
  crit: "border-l-[#EF476F]",
  info: "border-l-[#4CC9F0]",
  none: "border-l-[#1F2937]",
};

export default function SystemCard({
  title,
  subtitle,
  label,
  children,
  className = "",
  accent = "none",
}: SystemCardProps) {
  return (
    <div
      className={`
        bg-[#161B26] border border-[#1F2937] border-l-2 ${accentColors[accent]}
        rounded-sm p-5 flex flex-col gap-3
        hover:border-[#374151] transition-all duration-200
        ${className}
      `}
    >
      {(title || label) && (
        <div className="flex items-start justify-between gap-3">
          <div>
            {label && (
              <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase block mb-1">
                {label}
              </span>
            )}
            {title && (
              <h3 className="text-[#E5E7EB] text-sm font-medium">{title}</h3>
            )}
            {subtitle && (
              <p className="text-[#9CA3AF] text-xs mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>
      )}
      <div className="flex-1">{children}</div>
    </div>
  );
}
