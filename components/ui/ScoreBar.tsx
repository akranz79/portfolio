interface ScoreBarProps {
  score: number; // 0-100
  label?: string;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
}

function getScoreColor(score: number) {
  if (score >= 80) return { bar: "#00E676", text: "text-[#00E676]", label: "OK" };
  if (score >= 50) return { bar: "#FFD166", text: "text-[#FFD166]", label: "ATENÇÃO" };
  return { bar: "#EF476F", text: "text-[#EF476F]", label: "CRÍTICO" };
}

const sizeMap = {
  sm: { height: "h-1", text: "text-[10px]" },
  md: { height: "h-1.5", text: "text-xs" },
  lg: { height: "h-2", text: "text-sm" },
};

export default function ScoreBar({
  score,
  label,
  showValue = true,
  size = "md",
}: ScoreBarProps) {
  const { bar, text, label: statusLabel } = getScoreColor(score);
  const clamped = Math.min(100, Math.max(0, score));
  const { height, text: textSize } = sizeMap[size];

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        {label && (
          <span className={`font-mono ${textSize} text-[#9CA3AF] uppercase tracking-wider`}>
            {label}
          </span>
        )}
        {showValue && (
          <div className="flex items-center gap-2 ml-auto">
            <span className={`font-mono text-[10px] tracking-widest ${text}`}>
              {statusLabel}
            </span>
            <span className={`font-mono font-semibold ${textSize} ${text}`}>
              {clamped}
            </span>
          </div>
        )}
      </div>
      <div className={`w-full ${height} rounded-full bg-[#1F2937] overflow-hidden`}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${clamped}%`, backgroundColor: bar }}
        />
      </div>
    </div>
  );
}
