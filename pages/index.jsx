import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import About from '@components/About'
import Services from '@components/Services'
import Benefits from '@components/Benefits'
import Testimonials from '@components/Testimonials'
import Contact from '@components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fátima Camará | Massoterapia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <Benefits/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer />
    </div>
  )
}