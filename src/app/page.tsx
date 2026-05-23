import { AIAssistantProvider } from "@/components/assistant/AIAssistantProvider";
import { AIAssistantFAB } from "@/components/assistant/AIAssistantFAB";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { DemoLab } from "@/components/demos/DemoLab";
import { Products } from "@/components/sections/Products";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Stack } from "@/components/sections/Stack";
import { Vision } from "@/components/sections/Vision";
import { Booking } from "@/components/sections/Booking";
import { Journal } from "@/components/sections/Journal";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <AIAssistantProvider>
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <DemoLab />
        <Products />
        <Services />
        <Process />
        <Stack />
        <Vision />
        <Booking />
        <Journal />
        <CTA />
      </main>
      <Footer />
      <AIAssistantFAB />
    </AIAssistantProvider>
  );
}
