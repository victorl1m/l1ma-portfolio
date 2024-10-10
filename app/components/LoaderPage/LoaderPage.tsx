"use client";

import { useEffect, useState } from "react";
import GlitchText from "../GlitchText/GlitchText";
import { Loader2Icon } from "lucide-react";

export default function LoaderPage() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [isHydrated, setIsHydrated] = useState(false);

  // Check if hydrated
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            // Set is loading after 1s
            setTimeout(() => {
              setIsLoading(false);
            }, 1000); // Delay para ver a barra completa
            return 100;
          }
          return prev + 10; // Ajuste o valor conforme necessário
        });
      }, 300); // Tempo entre cada incremento
    }
  }, [isLoading]);

  // Disable scroll if loading
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);

  return (
    <div
      className={`absolute inset-0 z-50 flex flex-col justify-center bg-[#050a04] items-center transition-all duration-1000
        ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
    >
      <div className="flex flex-col items-center justify-between gap-4 h-full">
        {/* Largura da barra de progresso da direita para a esquerda */}
        <div
          className={`absolute right-0 top-6 h-1 border border-dashed border-white transition-all duration-300`}
          style={{
            width: isLoading ? `${progress}%` : "0%", // Muda a largura para 0 quando não está carregando
            transition: "width 0.3s ease", // Animação de largura
          }}
        ></div>
        {isHydrated && (
          <div className="absolute top-1/2 flex flex-col gap-2">
            <Loader2Icon size={64} className="animate-spin" />
            <GlitchText text="Loading all magic..." />
          </div>
        )}
        <div
          className={`absolute right-0 bottom-12 border border-dashed border-white transition-all duration-300`}
          style={{
            width: isLoading ? `${progress}%` : "0%", // Muda a largura para 0 quando não está carregando
            transition: "width 0.3s ease", // Animação de largura
          }}
        ></div>
      </div>
    </div>
  );
}
