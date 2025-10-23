import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function() {
  const NavLinks = ({ mobile = false }) => (
    <>
      <Link rel="stylesheet" href="#sobremim" className={`hover:text-primary transition-colors  ${mobile ? 'text-left py-2 px-4' : ''}` }>Sobre Mim</Link>
      <Link rel="stylesheet" href="#servicos" className={`hover:text-primary transition-colors  ${mobile ? 'text-left py-2 px-4' : ''}` }>Serviços</Link>
      <Link rel="stylesheet" href="#beneficios" className={`hover:text-primary transition-colors  ${mobile ? 'text-left py-2 px-4' : ''}` }>Benefícios</Link>
      <Link rel="stylesheet" href="#depoimentos" className={`hover:text-primary transition-colors  ${mobile ? 'text-left py-2 px-4' : ''}` }>Depoimentos</Link>
      <Link rel="stylesheet" href="#contato" className={`hover:text-primary transition-colors  ${mobile ? 'text-left py-2 px-4' : ''}` }>Contato</Link>
    </>
  );

  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border'>
        <div className='container mx-auto px-4 py-4'>

          <div className="flex items-center justify-between md:grid md:grid-cols-3">
            <img src="/logo.svg" alt="Logo" className="w-26 lg:w-36 md:w-30"/>

            <nav className="hidden md:flex items-center justify-center gap-8 pl-10 text-nowrap">
              <NavLinks/>
            </nav>

            <div className="flex justify-center">
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="outline" size="icon-lg">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <nav className="font-bold text-lg flex flex-col gap-2 mt-10 ml-6">
                    <NavLinks mobile />
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
