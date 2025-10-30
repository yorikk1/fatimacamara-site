import { Heart, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  const openEmail = () => {
    const email = "fatimac.ftc45@gmail.com";
    const subject = "Agendamento de Sessão de Massoterapia";
    const bodyMessage = "Olá! Gostaria de agendar uma sessão.";
    
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyMessage)}`;
    
    window.open(mailtoUrl, '_blank'); 
  };
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4">Massoterapia</h3>
            <p className="text-sm opacity-80">
              Bem-estar e equilíbrio através da massoterapia profissional ao domicílio.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Massagem Desportiva</li>
              <li>Massagem Terapêutica</li>
              <li>Massagem Miofascial</li>
              <li>Massagem para Idosos e Reabilitação</li>
              <li>Massagem Sueca</li>
              <li>Massagem com Óleos Aromáticos</li>
              <li>Reiki & Harmonização</li>
              <li>Massagem para Bebês</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>+351 962 918 148</li>
              <li>fatimac.ftc45@gmail.com</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://www.instagram.com/fatimacc_" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
              
              <a 
                href="#" 
                onClick={openEmail} 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm opacity-80 flex items-center justify-center gap-2">
          <span>Fátima Camará © {new Date().getFullYear()}. Desenvolvido por Yuri Baggio </span>
        </div>
      </div>
    </footer>
  );
}