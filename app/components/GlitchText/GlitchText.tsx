import React from "react";

interface GlitchTextProps {
  text: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text }) => {
  // Função para gerar um caractere aleatório
  const getRandomCharacter = () => {
    const characters = '!@#$%^&*()_+[]{}|;:",.<>?';
    return characters.charAt(Math.floor(Math.random() * characters.length));
  };

  // Função para gerar o texto com efeito de glitch
  const generateGlitchText = () => {
    return text
      .split("")
      .map((char, index) => {
        // Substitui aleatoriamente 20% dos caracteres por caracteres aleatórios
        if (Math.random() < 0.2) {
          return getRandomCharacter();
        }
        return char;
      })
      .join("");
  };

  return (
    <div className="mono whitespace-pre text-xl">{generateGlitchText()}</div>
  );
};

export default GlitchText;
