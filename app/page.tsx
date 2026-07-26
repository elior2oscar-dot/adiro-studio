import { About } from "@/components/About";
import { Audiences } from "@/components/Audiences";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Audiences />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
