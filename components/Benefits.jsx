import Image from "next/image";
import { Check } from "lucide-react";

const benefits = [
  "Redução de stress e ansiedade",
  "Alívio de dores musculares e tensões",
  "Melhoria da circulação sanguínea",
  "Aumento da flexibilidade e mobilidade",
  "Recuperação muscular pós-treino",
  "Melhoria da qualidade do sono",
  "Equilíbrio energético e emocional",
  "Fortalecimento do sistema imunológico",
  "Redução de inflamações",
  "Bem-estar físico e mental"
];

export default function Benefits() {
  return (
    <section id="beneficios" className="w-full py-16 md:py-24 bg-linear-to-b from-muted/20 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
              <span className="text-sm">Benefícios</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl">
              Transforme sua <span className="text-primary">Saúde e Bem-estar</span>
            </h2>
            
            <p className="text-muted-foreground">
              A massoterapia oferece inúmeros benefícios comprovados para o corpo e mente. Seja qual for sua necessidade - relaxamento, recuperação ou reabilitação - você encontrará resultados significativos.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <Image
                  src="/foto-7.jpeg"
                  alt="Reiki e harmonização"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-4/3 rounded-2xl overflow-hidden relative">
                <Image
                  src="/foto-5.jpeg"
                  alt="Massagem para bebês"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-4/3 rounded-2xl overflow-hidden relative">
                <Image
                  src="/foto-6.jpeg"
                  alt="Massagem para idosos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <Image
                  src="/foto-8.jpg"
                  alt="Massagem desportiva"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
