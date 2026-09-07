import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { SignatureDishes } from "@/components/SignatureDishes";
import { Occasion } from "@/components/Occasion";
import { MenuTeaser } from "@/components/MenuTeaser";
import { VisitBook } from "@/components/VisitBook";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-noir-900">
      <div className="film-grain" aria-hidden="true" />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-noir-950"
      >
        Zum Inhalt springen
      </a>
      <Header />
      <main id="main" className="flex flex-1 flex-col">
        <Hero />
        <ProofStrip />
        <SignatureDishes />
        <Occasion />
        <MenuTeaser />
        <VisitBook />
      </main>
      <Footer />
    </div>
  );
}
