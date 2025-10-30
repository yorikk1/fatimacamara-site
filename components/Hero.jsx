"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sparkles, Dumbbell } from "lucide-react";

const stats = [
  { value: "6+", label: "Anos de Experiência" },
  { value: "500+", label: "Clientes Atendidos" },
  { value: "100%", label: "Personalizado" },
];

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden w-full bg-linear-to-br from-[#F5EDE5] via-[#FAF7F4] to-[#E8EDE8]">
      
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
              <Sparkles className="w-4 h-4 text-[#C89B7B]" />
              <span className="text-sm">Atendimento ao Domicílio</span>
              <Dumbbell className="w-4 h-4 text-[#7A8B6F]" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
              Equilíbrio entre <span className="text-[#C89B7B]">Relaxamento</span> e <span className="text-[#7A8B6F]">Performance</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Massoterapia profissional no conforto da sua casa. Tratamentos personalizados para relaxamento, bem-estar e recuperação física.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contato" passHref>
                <Button size="lg" className="bg-primary">
                  Agendar Sessão
                </Button>
              </Link>
              <Link href="#servicos" passHref>
                <Button size="lg" variant="outline">
                  Conhecer Serviços
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden relative">
            <Image
                src="/foto-1.jpg"
                alt="Ambiente de spa relaxante com toalhas, velas e óleos de massagem"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4B5A0] rounded-full blur-3xl opacity-40 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#B8CEC4] rounded-full blur-3xl opacity-40 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}