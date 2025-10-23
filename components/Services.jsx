// ARQUIVO: components/Services.tsx

import { Sparkles, Dumbbell, Baby, Users, Leaf, Zap, Heart, Activity } from "lucide-react";
import { Card } from "./ui/card";
import Image from "next/image";

const relaxingServices = [
  { icon: Sparkles, title: "Massagem Sueca", description: "Técnica clássica que promove relaxamento profundo e melhora a circulação sanguínea.", color: "relaxing" },
  { icon: Leaf, title: "Massagem com Óleos Aromáticos", description: "Aromaterapia combinada com massagem para relaxamento sensorial completo.", color: "relaxing" },
  { icon: Heart, title: "Reiki & Harmonização Energética", description: "Terapia energética para equilíbrio emocional e espiritual.", color: "relaxing" },
  { icon: Baby, title: "Massagem para Bebês", description: "Técnicas suaves que fortalecem o vínculo e promovem o bem-estar dos pequenos.", color: "relaxing" }
];
const therapeuticServices = [
  { icon: Dumbbell, title: "Massagem Desportiva", description: "Prevenção de lesões e recuperação muscular para atletas e praticantes de atividades físicas.", color: "therapeutic" },
  { icon: Activity, title: "Massagem Terapêutica", description: "Alívio de dores crônicas e tensões musculares com técnicas específicas.", color: "therapeutic" },
  { icon: Zap, title: "Massagem Miofascial", description: "Liberação de pontos de tensão na fáscia para maior mobilidade e alívio da dor.", color: "therapeutic" },
  { icon: Users, title: "Massagem para Idosos & Reabilitação", description: "Tratamento adaptado para melhorar mobilidade e qualidade de vida.", color: "therapeutic" }
];

function ServiceCard({ icon: Icon, title, description, color }) {
  const colorClasses = {
    relaxing: "bg-[#F5E8E0] text-[#C89B7B]",
    therapeutic: "bg-[#DFE9E5] text-[#7A8B6F]"
  };
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow border-2 h-full">
      <div className={`w-14 h-14 rounded-xl ${colorClasses[color]} flex items-center justify-center mb-4`}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}

// CORREÇÃO: Adicionado "export default"
export default function Services() {
  return (
    <section id="servicos" className="w-full py-16 md:py-24 bg-linear-to-b from-white to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-4">
            <span className="text-sm">Serviços</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Tratamentos Personalizados para o Seu Bem-Estar
          </h2>
          <p className="text-muted-foreground">
            Oferecemos uma ampla gama de serviços adaptados às suas necessidades, desde relaxamento profundo até recuperação desportiva e reabilitação.
          </p>
        </div>
        <div className="space-y-20">
          {/* Serviços Desportivos & Terapêuticos */}
          <div className="max-w-7xl mx-auto">
            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-8 shadow-xl">
              <Image
                src="/foto-4.jpeg"
                alt="Atleta recebendo massagem desportiva para recuperação muscular"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#7A8B6F]/95 via-[#7A8B6F]/85 to-transparent flex items-center">
                <div className="container mx-auto px-8">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                        <Dumbbell className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl text-white font-semibold">Desportivo & Terapêutico</h3>
                    </div>
                    <p className="text-white/95 text-lg leading-relaxed">
                      Tratamentos especializados para recuperação muscular, alívio de dores, reabilitação física e melhoria da performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {therapeuticServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
          {/* Serviços Relaxantes & Bem-estar */}
          <div className="max-w-7xl mx-auto">
            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-8 shadow-xl">
              <Image
                src="/foto-3.jpeg"
                alt="Ambiente de spa com velas e pedras quentes para massagem relaxante"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#C89B7B]/95 via-[#C89B7B]/85 to-transparent flex items-center">
                <div className="container mx-auto px-8">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl text-white font-semibold">Relaxante & Bem-estar</h3>
                    </div>
                    <p className="text-white/95 text-lg leading-relaxed">
                      Tratamentos para aliviar o stress do dia a dia, promover relaxamento profundo e equilibrar suas energias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relaxingServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}