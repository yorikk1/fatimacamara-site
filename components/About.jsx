import Image from "next/image";
import { Award, Heart, Home } from "lucide-react";

export default function About() {
  return (
    <section id="sobremim" className="w-full py-16 md:py-24 bg-linear-to-b from-white to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-4/5 rounded-3xl overflow-hidden relative">
              <Image
                src="/perfil.jpg"
                alt="Massoterapeuta profissional sorrindo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
              <span className="text-sm">Sobre Mim</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold">
              Dedicada ao seu <span className="text-primary">Bem-estar Completo</span>
            </h2>
            
            <p className="text-muted-foreground">
              Sou massoterapeuta certificada com formação em diversas técnicas de massagem e terapias complementares. Minha missão é proporcionar bem-estar, alívio de dores e equilíbrio físico e energético através de tratamentos personalizados.
            </p>

            <p className="text-muted-foreground">
              Atendo no conforto da sua casa, levando todos os equipamentos necessários para uma sessão completa e profissional. Cada tratamento é adaptado às suas necessidades específicas, seja para relaxamento, recuperação desportiva ou reabilitação.
            </p>

            <div className="grid gap-4 pt-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Certificação Profissional</h4>
                  <p className="text-sm text-muted-foreground">Formação completa em massoterapia e terapias holísticas</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#DFE9E5] flex items-center justify-center shrink-0">
                  <Home className="w-6 h-6 text-[#7A8B6F]" />
                </div>
                <div>
                  <h4 className="font-medium">Atendimento Domiciliar</h4>
                  <p className="text-sm text-muted-foreground">Conforto e praticidade sem sair de casa</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#F5E8E0] flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-[#C89B7B]" />
                </div>
                <div>
                  <h4 className="font-medium">Tratamento Personalizado</h4>
                  <p className="text-sm text-muted-foreground">Cada sessão é única e adaptada às suas necessidades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}