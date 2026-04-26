import { Terminal } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1F2937] bg-[#0B0E14]">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#4CC9F0]">
            <Terminal size={14} strokeWidth={1.5} />
            <span className="font-mono text-xs tracking-wider">sistema:~$</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">
              exit code: 0
            </span>
            <span className="text-[#1F2937]">|</span>
            <span className="font-mono text-[10px] text-[#9CA3AF]">
              © {year}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00E676]" />
            <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">
              all systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
