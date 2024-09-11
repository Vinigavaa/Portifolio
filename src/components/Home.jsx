import React, { useState, useEffect } from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TypewriterEffect = ({ texts, typingSpeed = 150, erasingSpeed = 75, delayBetweenTexts = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer;

    if (isTyping) {
      if (displayText.length < texts[currentTextIndex].length) {
        timer = setTimeout(() => {
          setDisplayText(texts[currentTextIndex].slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setIsTyping(false), delayBetweenTexts);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, erasingSpeed);
      } else {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isTyping, currentTextIndex, texts, typingSpeed, erasingSpeed, delayBetweenTexts]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

const CyanLight = () => (
  <div className="absolute w-96 h-96 rounded-full bg-cyan-400 opacity-20 filter blur-3xl animate-move" />
);

const SocialIcons = () => (
  <div className="flex space-x-4 mt-5 ml-2">
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-white w-6 h-6 opacity-50 transition-transform duration-300 hover:scale-110 hover:opacity-100" />
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-white w-6 h-6 opacity-50 transition-transform duration-300 hover:scale-110 hover:opacity-100" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-white w-6 h-6 opacity-50 transition-transform duration-300 hover:scale-110 hover:opacity-100" />
    </a>
    <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="text-white w-6 h-6 opacity-50 transition-transform duration-300 hover:scale-110 hover:opacity-100" />
    </a>
  </div>
);

function Home() {
  const texts = ["Junior developer Frontend", "Junior developer Backend", "UX/UI Designer"];

  return (
    <div className="pt-5 p-4 bg-custom-purple w-full h-screen flex items-center justify-start overflow-hidden relative">
      <CyanLight />
      <div className="grid grid-cols-2 gap-8 w-full px-40 relative z-10">
        {/* Esquerda - Nome e Sobre */}
        <div className="text-left">
          <h1 className="text-5xl text-white font-bold">Vinicius Gava</h1>
          <p className="text-custom-cyan font-monocraft mt-2 ml-2">
            <TypewriterEffect texts={texts} typingSpeed={150} erasingSpeed={75} delayBetweenTexts={2000} />
          </p>
          <p className="text-white opacity-50 mt-3 ml-2">
            I build interactive, engaging <br />and accessible digital experiences.</p>
            <div className="space-y-5">
            <Link to="/outra-pagina" className="flex items-center space-x-3 group ml-2.5 mt-10 mb-10">
              <div className="w-10 h-0.5 bg-gray-500 transition-all duration-300 transform group-hover:bg-white group-hover:scale-x-110 origin-left"></div>
              <span className="text-gray-400 uppercase text-sm font-semibold tracking-widest transition duration-300 group-hover:text-white">Projects</span>
            </Link>
            </div>  
            <SocialIcons/>
        </div>

        {/* texto longo da direita */}
        <div className="text-left">
          <p className="text-white text-opacity-65">
            Minha jornada no mundo do desenvolvimento começou em <span className="text-custom-cyan">2021</span>, aos 15 anos, quando criei chatbots para o Discord
            utilizando a biblioteca discord.js e desenvolvendo no Visual Studio Code. Esse projeto despertou minha paixão por
            tecnologia, e logo comecei a explorar a criação de sites simples com <span className="text-custom-cyan">HTML, CSS e JavaScript</span>. <br /><br />
            Aos 17 anos, ingressei no curso técnico de <span className="text-custom-cyan">Desenvolvimento de Sistemas </span> no SENAI de Criciúma, onde ampliei
            consideravelmente meus conhecimentos. Dominei linguagens como <span className="text-custom-cyan">Java, JavaScript e Python </span>, além de aprimorar minhas
            habilidades com bancos de dados relacionais (MySQL) e não-relacionais (MongoDB). Também adquiri experiência em
            frameworks como Spring Boot e React, o que me permite desenvolver sistemas completos, APIs, sites e landing pages.
            <br /><br />
            Atualmente, <span className="text-custom-cyan">estou focado no aperfeiçoamento contínuo </span>, estudando inglês diariamente por meio de cursos formais e
            autodidatismo. Sinto-me pronto e capacitado para atuar no mercado, trazendo soluções inovadoras e eficientes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;