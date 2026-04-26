import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sistema — Engenharia de Software para Decisões de Negócio",
    template: "%s | Sistema",
  },
  description:
    "Diagnósticos precisos, soluções claras. Engenharia de software aplicada a resultados reais de negócio.",
  keywords: [
    "engenharia de software",
    "auditoria digital",
    "consultoria técnica",
    "diagnóstico web",
    "performance",
    "segurança",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0B0E14] text-[#E5E7EB] font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
