type LogLevel = "info" | "ok" | "warn" | "crit" | "debug";

interface LogEntry {
  timestamp?: string;
  level: LogLevel;
  message: string;
}

interface LogBlockProps {
  entries: LogEntry[];
  title?: string;
  maxHeight?: string;
}

const levelConfig = {
  info: { label: "INFO ", color: "text-[#4CC9F0]" },
  ok: { label: "OK   ", color: "text-[#00E676]" },
  warn: { label: "WARN ", color: "text-[#FFD166]" },
  crit: { label: "CRIT ", color: "text-[#EF476F]" },
  debug: { label: "DEBUG", color: "text-[#9CA3AF]" },
};

export default function LogBlock({ entries, title, maxHeight = "none" }: LogBlockProps) {
  return (
    <div className="bg-[#0B0E14] border border-[#1F2937] rounded-sm overflow-hidden">
      {title && (
        <div className="flex items-center gap-2 px-4 py-2 border-b border-[#1F2937] bg-[#121722]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF476F]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD166]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#00E676]/60" />
          </div>
          <span className="font-mono text-[10px] text-[#9CA3AF] tracking-wider ml-2">
            {title}
          </span>
        </div>
      )}
      <div
        className="p-4 overflow-y-auto"
        style={{ maxHeight: maxHeight === "none" ? undefined : maxHeight }}
      >
        {entries.map((entry, i) => {
          const { label, color } = levelConfig[entry.level];
          return (
            <div key={i} className="flex items-start gap-3 font-mono text-xs leading-6">
              {entry.timestamp && (
                <span className="text-[#9CA3AF]/50 shrink-0 select-none">
                  {entry.timestamp}
                </span>
              )}
              <span className={`${color} shrink-0 select-none`}>[{label}]</span>
              <span className="text-[#E5E7EB]/80 break-words">{entry.message}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
