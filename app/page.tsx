import Nav from "@/components/Nav";
import Hero, { HeroDivider } from "@/components/Hero";
import Built from "@/components/Built";
import Experience from "@/components/Experience";
import Reading from "@/components/Reading";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <HeroDivider />
      <Built />
      <Experience />
      <Reading />
      <Contact />
      <Footer />
    </main>
  );
}
