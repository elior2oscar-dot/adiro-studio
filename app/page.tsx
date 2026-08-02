import { About } from "@/components/About";
import { AsmrBackground } from "@/components/AsmrBackground";
import { Capabilities } from "@/components/Capabilities";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Nav } from "@/components/Nav";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <>
      <AsmrBackground />
      <CursorSpotlight />
      <Nav />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Problem />
        <Works />
        <Capabilities />
        <Services />
        <Metrics />
        <Process />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
