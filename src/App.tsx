import { useEffect, useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {
  Nav,
  Hero,
  Stats,
  Services,
  WhyUs,
  HowItWorks,
  Testimonials,
  FAQ,
  Cta,
  Footer,
  ToTop
} from "./components"

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main ref={ref} className="font-sans bg-white text-[#111] overflow-x-hidden">
        <Nav />
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Cta />
        <Footer />
      </main>
      <ToTop isVisible={isVisible} />
    </>
  )
}

export default App
