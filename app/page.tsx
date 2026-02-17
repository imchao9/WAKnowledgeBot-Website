import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatsAppSimulator from '@/components/WhatsAppSimulator';
import RAGVisualizer from '@/components/RAGVisualizer';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatsAppSimulator />
      <RAGVisualizer />
      <Pricing />
      <Footer />
    </main>
  );
}
