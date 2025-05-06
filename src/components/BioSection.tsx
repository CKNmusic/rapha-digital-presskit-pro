
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
      <>
        <p className="mb-4">
          DJ Rapha's journey is marked by versatility and stage presence, establishing him as one of the most complete names in the Open Format scene in Rio de Janeiro. With over 10 years of experience, Rapha masters the art of blending musical genres with fluidity — moving between Hip-Hop, Funk, Pop, House, Electronic and much more — creating unique experiences that connect with different audiences and moments.
        </p>
        <p className="mb-4">
          His Open Format style has made him a sought-after name in clubs, corporate events, private parties, and festivals, always with dynamic sets that transform the dance floor into a vibrant and unpredictable environment. Throughout his career, DJ Rapha has built a musical identity marked by dancefloor feeling, refined technique, and keen audience reading.
        </p>
        <p className="mb-6">
          Currently, DJ Rapha continues to expand his presence on the national scene, bringing his sonic signature to new stages and consolidating his presence as an artist.
        </p>
        <p className="italic text-center">
          A sound for every vibe, a vibe for every floor.
        </p>
      </>
    ),
    [Language.SPA]: (
      <>
        <p className="mb-4">
          La trayectoria de DJ Rapha está marcada por su versatilidad y presencia escénica, consolidándose como uno de los nombres más completos de la escena Open Format en Río de Janeiro. Con más de 10 años de experiencia, Rapha domina el arte de mezclar géneros musicales con fluidez — transitando entre Hip-Hop, Funk, Pop, House, Electrónico y mucho más — creando experiencias únicas que conectan con diferentes públicos y momentos.
        </p>
        <p className="mb-4">
          Su estilo Open Format lo ha convertido en un nombre solicitado en clubes, eventos corporativos, fiestas privadas y festivales, siempre con sets dinámicos que transforman la pista en un ambiente vibrante e impredecible. A lo largo de su carrera, DJ Rapha ha construido una identidad musical marcada por el feeling de pista, técnica refinada y lectura precisa del público.
        </p>
        <p className="mb-6">
          Actualmente, DJ Rapha continúa expandiendo su actuación en la escena nacional, llevando su firma sonora a nuevos escenarios y consolidando su presencia como artista.
        </p>
        <p className="italic text-center">
          Un sonido para cada vibra, una vibra para cada pista.
        </p>
      </>
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
