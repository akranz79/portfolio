import { CheckCircle2, Circle, AlertCircle } from "lucide-react";

type Priority = "high" | "medium" | "low";
type ItemStatus = "done" | "pending" | "blocked";

interface ActionItemProps {
  label: string;
  description?: string;
  priority?: Priority;
  status?: ItemStatus;
}

const priorityConfig = {
  high: { label: "P1", color: "text-[#EF476F]" },
  medium: { label: "P2", color: "text-[#FFD166]" },
  low: { label: "P3", color: "text-[#9CA3AF]" },
};

const statusConfig = {
  done: { icon: CheckCircle2, color: "text-[#00E676]" },
  pending: { icon: Circle, color: "text-[#9CA3AF]" },
  blocked: { icon: AlertCircle, color: "text-[#EF476F]" },
};

export default function ActionItem({
  label,
  description,
  priority = "medium",
  status = "pending",
}: ActionItemProps) {
  const { label: pLabel, color: pColor } = priorityConfig[priority];
  const { icon: StatusIcon, color: sColor } = statusConfig[status];

  return (
    <div className="flex items-start gap-3 py-3 border-b border-[#1F2937] last:border-b-0 hover:bg-[#1F2937]/30 -mx-1 px-1 rounded transition-colors duration-150">
      <StatusIcon size={14} className={`${sColor} mt-0.5 shrink-0`} />
      <div className="flex-1 min-w-0">
        <p
          className={`text-xs ${
            status === "done" ? "line-through text-[#9CA3AF]" : "text-[#E5E7EB]"
          }`}
        >
          {label}
        </p>
        {description && (
          <p className="text-[10px] text-[#9CA3AF] mt-0.5">{description}</p>
        )}
      </div>
      <span className={`font-mono text-[10px] shrink-0 ${pColor}`}>{pLabel}</span>
    </div>
  );
}
