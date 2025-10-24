import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar o formulário
    console.log("Form submitted:", formData);
    alert("Mensagem enviada! Entrarei em contato em breve.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openInstagram = () => {
    const username = "fatimacc_";
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
            Entre em contato para agendar sua sessão ou tirar dúvidas. Atendimento personalizado e no conforto da sua casa.
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <Card className="p-6 border-2">
              <form onSubmit={handleSubmit} className="space-y-4" name="contact" method="POST" data-netlify="true">
                <div>
                  <label htmlFor="name" className="block mb-2">Nome Completo</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2">Telefone</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(XX) XXXXX-XXXX"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">E-mail</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">Mensagem</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-me sobre suas necessidades e preferências..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">

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
      </div>
    </section>
  );
}
