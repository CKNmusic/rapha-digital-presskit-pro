
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

enum Language {
  PTBR = 'PT-BR',
  ENG = 'ENG',
  SPA = 'SPA',
}

const BioSection: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.PTBR);
  
  const bioContent = {
    [Language.PTBR]: (
      <>
        <p className="mb-4">
          A trajetória de DJ Rapha é marcada por sua versatilidade e presença de palco, consolidando-se como um dos nomes mais completos do cenário Open Format no Rio de Janeiro. Com mais de 10 anos de experiência, Rapha domina a arte de mesclar gêneros musicais com fluidez — transitando entre Hip-Hop, Funk, Pop, House, Eletrônico e muito mais — criando experiências únicas que se conectam com diferentes públicos e momentos.
        </p>
        <p className="mb-4">
          Seu estilo Open Format o tornou um nome requisitado em clubes, eventos corporativos, festas privadas e festivais, sempre com sets dinâmicos que transformam a pista em um ambiente vibrante e imprevisível. Ao longo da carreira, DJ Rapha construiu uma identidade musical marcada por feeling de pista, técnica refinada e leitura apurada do público.
        </p>
        <p className="mb-6">
          Atualmente, DJ Rapha segue expandindo sua atuação na cena nacional, levando sua assinatura sonora a novos palcos e consolidando sua presença como artista.
        </p>
        <p className="italic text-center">
          Um som pra cada vibe, uma vibe pra cada pista.
        </p>
      </>
    ),
    [Language.ENG]: (
      <p className="text-center text-gray-400 italic">English bio not available yet</p>
    ),
    [Language.SPA]: (
      <p className="text-center text-gray-400 italic">Biografía en español no disponible todavía</p>
    )
  };

  return (
    <section id="bio" className="section">
      <h2 className="presskit-heading">Bio</h2>
      
      <div className="flex justify-center mb-8 space-x-2">
        {Object.values(Language).map((lang) => (
          <button 
            key={lang}
            onClick={() => setLanguage(lang)}
            className={cn(
              "presskit-button",
              language === lang ? "bg-white text-black" : ""
            )}
          >
            {lang}
          </button>
        ))}
      </div>
      
      <div className="text-center max-w-2xl mx-auto">
        {bioContent[language]}
      </div>
    </section>
  );
};

export default BioSection;
