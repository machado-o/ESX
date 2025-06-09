
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { UserPlus, Calendar, Users, Trophy } from "lucide-react";

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`py-20 px-4 relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Funciona</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Participe do ESX 2025 em poucos passos simples e seja parte da revolução tecnológica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <UserPlus className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Cadastre seu Interesse</h3>
            <p className="text-gray-400 leading-relaxed">
              Preencha o formulário com suas informações e áreas de interesse
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Aguarde o Lançamento</h3>
            <p className="text-gray-400 leading-relaxed">
              Receba em primeira mão as datas, programação e como se inscrever
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Participe do Evento</h3>
            <p className="text-gray-400 leading-relaxed">
              Conecte-se, aprenda e faça networking com a comunidade tech
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                4
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Transforme sua Carreira</h3>
            <p className="text-gray-400 leading-relaxed">
              Aplique os conhecimentos e conexões para impulsionar seu futuro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
