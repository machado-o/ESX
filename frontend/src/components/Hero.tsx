
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Users } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Adicione esta linha


const Hero = () => {
  const navigate = useNavigate();

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const aboutElement = document.getElementById('saiba-mais');
    aboutElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSaibaMais = () => {
    navigate("/results");
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 animate-pulse"></div>
      <div className="absolute top-20 left-10 w-32 h-32 border border-purple-500/30 rounded-full animate-spin [animation-duration:20s]"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-cyan-500/30 rounded-full animate-spin [animation-duration:15s] [animation-direction:reverse]"></div>
      
      {/* Circuit pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-purple-400"/>
              <path d="M2,2 L18,2 M2,2 L2,18" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 animate-fade-in">
            ESX
          </h1>
          <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono text-lg">
            <Code className="w-5 h-5" />
            <span>2025</span>
            <Code className="w-5 h-5" />
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          O Maior Evento de
          <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Tecnologia do ES
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Desperte sua curiosidade, viva novas experiências e conecte-se com o futuro da tecnologia no Espírito Santo
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-cyan-400">
            <Users className="w-6 h-6" />
            <span className="text-2xl font-bold">1000+</span>
            <span className="text-gray-400">Participantes</span>
          </div>
          <div className="flex items-center gap-2 text-purple-400">
            <Zap className="w-6 h-6" />
            <span className="text-2xl font-bold">48h</span>
            <span className="text-gray-400">de Conteúdo</span>
          </div>
          <div className="flex items-center gap-2 text-pink-400">
            <Code className="w-6 h-6" />
            <span className="text-2xl font-bold">20+</span>
            <span className="text-gray-400">Palestrantes</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            Quero Participar
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            onClick={handleSaibaMais}
            variant="outline" 
            size="lg"
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
          >
            Saiba Mais
          </Button>
        </div>

        {/* Scroll indicator - moved here */}
        <div className="flex justify-center animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
