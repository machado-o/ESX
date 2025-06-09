
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Users, Zap, Trophy, Calendar, MapPin } from "lucide-react";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="saiba-mais" 
      ref={ref}
      className={`py-20 px-4 relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-purple-900/20"></div>
      <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre o <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">ESX 2025</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            O ESX é mais que um evento - é uma experiência transformadora que conecta mentes brilhantes, 
            fomenta a inovação e impulsiona o futuro da tecnologia no Espírito Santo.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Conteúdo de Qualidade</h3>
            <p className="text-gray-400 leading-relaxed">
              Palestras, workshops e painéis com os principais nomes da tecnologia nacional e internacional.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Networking</h3>
            <p className="text-gray-400 leading-relaxed">
              Conecte-se com profissionais, empreendedores e entusiastas da tecnologia de todo o Brasil.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Inovação</h3>
            <p className="text-gray-400 leading-relaxed">
              Descubra as últimas tendências e tecnologias que estão moldando o futuro digital.
            </p>
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Por que participar?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Trophy className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Reconhecimento</h4>
                    <p className="text-gray-400">O maior evento de tecnologia do Espírito Santo</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Comunidade</h4>
                    <p className="text-gray-400">Faça parte de uma comunidade vibrante e engajada</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Aprendizado</h4>
                    <p className="text-gray-400">Desenvolva suas habilidades com especialistas</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Detalhes do Evento
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Data</p>
                    <p className="text-gray-400">A ser anunciada em 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-white font-semibold">Local</p>
                    <p className="text-gray-400">Espírito Santo, Brasil</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-6 h-6 text-pink-400" />
                  <div>
                    <p className="text-white font-semibold">Participantes</p>
                    <p className="text-gray-400">Mais de 1000 esperados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
