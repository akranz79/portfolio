import { ReactNode } from "react";
import Link from "next/link";

interface ButtonCommandProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

const variantStyles = {
  primary:
    "text-[#0B0E14] bg-[#4CC9F0] hover:bg-[#4CC9F0]/90 border-[#4CC9F0]",
  secondary:
    "text-[#4CC9F0] bg-transparent hover:bg-[#4CC9F0]/10 border-[#4CC9F0]/50 hover:border-[#4CC9F0]",
  ghost:
    "text-[#9CA3AF] bg-transparent hover:text-[#E5E7EB] hover:bg-[#1F2937] border-[#1F2937] hover:border-[#374151]",
};

const sizeStyles = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-sm px-6 py-3",
};

export default function ButtonCommand({
  children,
  href,
  onClick,
  variant = "secondary",
  size = "md",
  className = "",
  external = false,
  disabled = false,
}: ButtonCommandProps) {
  const baseStyles = `
    inline-flex items-center gap-2 font-mono border rounded-sm
    transition-all duration-200 focus-visible:outline focus-visible:outline-1
    focus-visible:outline-[#4CC9F0] cursor-pointer select-none
    ${variantStyles[variant]} ${sizeStyles[size]}
    ${disabled ? "opacity-40 cursor-not-allowed" : ""}
    ${className}
  `;

  const content = (
    <>
      <span className="opacity-60">&gt;</span>
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseStyles}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={baseStyles} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
