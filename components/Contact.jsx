"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

export default function Contact() {
  const openInstagram = () => {
    const username = "fatimacc_"; // Seu usuário do Instagram
    const instagramUrl = `https://www.instagram.com/${username}`;
    window.open(instagramUrl, '_blank');
  };

  {/* const openWhatsApp = () => {
  const phoneNumber = "351962918148";
  const message = "Olá! Gostaria de agendar uma sessão de massoterapia.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}; */}

  return (
    <section id="contato" className="w-full py-16 md:py-24 bg-linear-to-b from-white to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-4">
            <span className="text-sm">Contato</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">
            Agende sua <span className="text-primary">Sessão</span>
          </h2>
          <p className="text-muted-foreground">
            Para um atendimento mais ágil e personalizado, todo o contato, 
            agendamento e esclarecimento de dúvidas é feito diretamente pelo Instagram. 
            Clique no botão abaixo para iniciar nossa conversa!
          </p>
          <div className="mt-6">
            <Button 
              onClick={openInstagram} 
              size="lg"
              className="gap-2 text-white bg-linear-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
            >
              <Instagram className="w-4 h-4" />
              Agendar pelo Instagram
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 border-2 opacity-50 cursor-not-allowed">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="mb-1">Telefone</h4>
                <p className="text-sm text-muted-foreground line-through">+351 962 918 148</p>
                <p className="text-xs text-muted-foreground mt-1">Telefone temporariamente indisponível</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 border-2">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="mb-1">E-mail</h4>
                <p className="text-sm text-muted-foreground">fatimac.ftc45@gmail.com</p>
                <p className="text-xs text-muted-foreground mt-1">Resposta em até 24h</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 border-2">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="mb-1">Área de Atendimento</h4>
                <p className="text-sm text-muted-foreground">Atendimento ao domicílio</p>
                <p className="text-xs text-muted-foreground mt-1">Consulte disponibilidade para sua região</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 border-2">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="mb-1">Horário de Atendimento</h4>
                <p className="text-sm text-muted-foreground">Segunda a Sábado</p>
                <p className="text-xs text-muted-foreground mt-1">8h às 20h (agendamento prévio)</p>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}