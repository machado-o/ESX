
import { Code, Heart, MapPin, Mail, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-gray-800/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                ESX
              </h3>
              <div className="flex items-center gap-1 text-cyan-400 font-mono">
                <Code className="w-4 h-4" />
                <span>2025</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              O maior evento de tecnologia do Espírito Santo. Conectando pessoas, ideias e o futuro da inovação.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>contato@esx.dev.br</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Espírito Santo, Brasil</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>Em breve - 2025</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Acompanhe</h4>
            <p className="text-gray-400">
              Fique por dentro das novidades e atualizações sobre o evento.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Heart className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 ESX. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>para a comunidade tech do ES</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
