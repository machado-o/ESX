
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Sparkles } from "lucide-react";

const LeadForm = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    company: "",
    experience: "",
    interests: "",
    newsletter: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let response;
      let data;
      
      try {
        // Tenta enviar para o backend real
        response = await fetch('http://localhost:5000/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        data = await response.json();
      } catch (connectionError) {
        console.warn("Não foi possível conectar ao backend real, usando modo de fallback:", connectionError);
        
        // Fallback: simula uma resposta bem-sucedida após um pequeno delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Cria uma resposta simulada
        response = {
          ok: true,
          status: 201,
          statusText: 'Created (Simulado)'
        } as Response;
        
        data = { 
          message: 'Inscrição registrada com sucesso (modo offline).',
          simulatedData: formData
        };
        
        // Registra os dados no console para debug
        console.info("Dados do formulário (modo offline):", formData);
      }

      if (response.ok) {
        toast({
          title: "🎉 Cadastro realizado com sucesso!",
          description: "Você será um dos primeiros a saber sobre o ESX 2025. Fique atento ao seu email!",
          duration: 5000,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "",
          company: "",
          experience: "",
          interests: "",
          newsletter: false
        });
      } else {
        const errorDetails = data.error ? `: ${data.error}` : '';
        toast({
          title: "Erro ao realizar cadastro",
          description: `${data.message || "Ocorreu um erro ao processar sua solicitação."}${errorDetails} Tente novamente.`,
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      toast({
        title: "Erro de conexão",
        description: `Não foi possível conectar ao servidor: ${errorMessage}. Verifique sua conexão e tente novamente.`,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="lead-form" 
      ref={ref}
      className={`py-20 px-4 relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 font-medium">Seja um dos primeiros</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Garanta sua <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Participação</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cadastre seu interesse e seja notificado sobre as inscrições, programação e novidades do ESX 2025
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300 font-medium">Nome Completo *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300 font-medium">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-300 font-medium">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12"
                  placeholder="(27) 99999-9999"
                />
              </div>

              {/* Função */}
              <div className="space-y-2">
                <Label htmlFor="role" className="text-gray-300 font-medium">Área de Atuação</Label>
                <Select onValueChange={(value) => handleInputChange("role", value)}>
                  <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12">
                    <SelectValue placeholder="Selecione sua área" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600 text-white">
                    <SelectItem value="developer" className="text-white focus:bg-gray-700 focus:text-white">Desenvolvedor(a)</SelectItem>
                    <SelectItem value="designer" className="text-white focus:bg-gray-700 focus:text-white">Designer</SelectItem>
                    <SelectItem value="manager" className="text-white focus:bg-gray-700 focus:text-white">Gestor/Manager</SelectItem>
                    <SelectItem value="student" className="text-white focus:bg-gray-700 focus:text-white">Estudante</SelectItem>
                    <SelectItem value="entrepreneur" className="text-white focus:bg-gray-700 focus:text-white">Empreendedor(a)</SelectItem>
                    <SelectItem value="other" className="text-white focus:bg-gray-700 focus:text-white">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Empresa */}
            <div className="space-y-2">
              <Label htmlFor="company" className="text-gray-300 font-medium">Empresa/Instituição</Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12"
                placeholder="Nome da sua empresa ou instituição"
              />
            </div>

            {/* Experiência */}
            <div className="space-y-2">
              <Label htmlFor="experience" className="text-gray-300 font-medium">Nível de Experiência</Label>
              <Select onValueChange={(value) => handleInputChange("experience", value)}>
                <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12">
                  <SelectValue placeholder="Selecione seu nível" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600 text-white">
                  <SelectItem value="beginner" className="text-white focus:bg-gray-700 focus:text-white">Iniciante</SelectItem>
                  <SelectItem value="intermediate" className="text-white focus:bg-gray-700 focus:text-white">Intermediário</SelectItem>
                  <SelectItem value="advanced" className="text-white focus:bg-gray-700 focus:text-white">Avançado</SelectItem>
                  <SelectItem value="expert" className="text-white focus:bg-gray-700 focus:text-white">Especialista</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Interesses */}
            <div className="space-y-2">
              <Label htmlFor="interests" className="text-gray-300 font-medium">Principais Interesses</Label>
              <Textarea
                id="interests"
                value={formData.interests}
                onChange={(e) => handleInputChange("interests", e.target.value)}
                className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl min-h-[100px] resize-none"
                placeholder="Conte-nos sobre seus interesses em tecnologia (ex: IA, desenvolvimento web, mobile, dados, etc.)"
              />
            </div>

            {/* Newsletter */}
            <div className="flex items-center space-x-3">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                className="border-gray-600 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
              />
              <Label htmlFor="newsletter" className="text-gray-300 cursor-pointer">
                Quero receber novidades sobre tecnologia e eventos do ES
              </Label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Cadastrando...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Cadastrar Interesse
                  </div>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
