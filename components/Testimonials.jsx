import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

const testimonials = [
  {
    name: "Maria Silva",
    initials: "MS",
    role: "Cliente Regular",
    text: "A massagem sueca da Fátima é simplesmente incrível! Sinto-me completamente renovada após cada sessão. O atendimento ao domicílio é super conveniente e profissional.",
    rating: 5,
  },
  {
    name: "João Pereira",
    initials: "JP",
    role: "Atleta Amador",
    text: "Excelente trabalho na massagem desportiva! Após treinos intensos, as sessões ajudam muito na recuperação muscular. A Fátima entende exatamente onde está a tensão.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    initials: "AC",
    role: "Mãe de Primeira Viagem",
    text: "As massagens para o meu bebê são um momento especial. A Fátima é muito cuidadosa e carinhosa. Recomendo a todas as mães!",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    initials: "CM",
    role: "Executivo",
    text: "O Reiki e a harmonização energética me trouxeram um equilíbrio que eu não conseguia há anos. Profissionalismo e dedicação impecáveis.",
    rating: 5,
  },
  {
    name: "Teresa Rodrigues",
    initials: "TR",
    role: "Aposentada",
    text: "Tenho 72 anos e as massagens adaptadas para idosos me ajudam muito com dores nas articulações. A Fátima é muito atenciosa e paciente.",
    rating: 5,
  },
  {
    name: "Ricardo Santos",
    initials: "RS",
    role: "Profissional de TI",
    text: "Sofria de dores crônicas nas costas por ficar muito tempo sentado. A massagem terapêutica fez maravilhas! Já são 6 meses de tratamento e me sinto ótimo.",
    rating: 5,
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-[#C89B7B] text-[#C89B7B]"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="w-full py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">O Que Dizem Meus Clientes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A satisfação de quem confia no meu trabalho é o que me motiva a
            continuar proporcionando bem-estar e qualidade de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12 bg-primary/10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="mb-1">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {testimonial.role}
                    </p>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 shrink-0" />
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-lg border border-border">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#C89B7B] text-[#C89B7B]"
                />
              ))}
            </div>
            <span className="text-muted-foreground">
              5.0 • Baseado em dezenas de avaliações
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
