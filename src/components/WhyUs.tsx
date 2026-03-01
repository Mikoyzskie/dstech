import { useEffect, useRef, useState } from "react";
import { WHY_US, DAHUA_TECH } from "./constants"
import "./styles/animation.css"
import clsx from "clsx";

function WhyUs() {

  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="sm:py-24 py-16 px-[5%] bg-white">
      <div>
        <div className="text-[#f97316] font-bold text-xs leading-loose mb-3 text-center">
          WHY DSTECH
        </div>
        <h2 className="text-center text-[clamp(1.8rem,3vw,2.5rem)] font-black text-[#0d1b3e] mb-5">
          Customized Solutions to Meet <span className="text-[#f97316]">Every Need</span>
        </h2>
        <p className="text-[#6b7280] leading-[1.8] mb-8 max-w-150 text-center my-4 mx-auto">
          We're not just installers — we're your long-term technology partners. With nationwide reach, certified expertise, and 24/7 support, DsTech is the trusted choice for businesses across the Philippines.
        </p>
      </div>
      <div className="max-w-300 my-0 mx-auto flex md:gap-10 lg:gap-20 min-[636px]:items-center gap-8 min-[636px]:flex-row flex-col-reverse items-start">
        <div className="relative basis-1/2 w-full min-[636px]:w-auto">
          <div className="bg-linear-to-br from-[#050a18] to-[#0d1b3e] rounded-[20px] p-10 relative overflow-hidden">
            <div className="absolute -top-7.5 -right-7.5 w-30 h-30 rounded-full bg-[rgba(249,115,22,0.12)] " />
            <div className="text-5xl mb-4 text-center">🛡️</div>
            <h3 className="text-white font-extrabold text-center text-xl mb-6">
              Dahua Technology<br />
              <span className="text-[#f97316]">
                Certified Partner
              </span>
            </h3>
            {
              WHY_US.map((why, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[#e5e7eb] text-sm mb-3">
                  <span className="text-[#f97316] font-black text-base">
                    ✓
                  </span>
                  {why}
                </div>
              ))
            }
          </div>
        </div>
        <div ref={ref} className="basis-1/2">
          {
            DAHUA_TECH.map((tech, i) => (
              <div key={i} className={clsx("flex gap-4 mb-5 items-start", isVisible ? "fade-slide" : "")} style={{ animationDelay: `${i * 150}ms` }}> 
                <div className="w-11 h-11 min-w-11 bg-[rgba(249,115,22,0.1)] rounded-[10px] flex items-center justify-center text-xl">
                  {tech.icon}
                </div>
                <div>
                  <div className="font-bold text-[#0d1b3e] text-base mb-0.5">
                    {tech.title}
                  </div>
                  <div className="text-[#6b7280] text-sm leading-[1.6]">
                    {tech.desc}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default WhyUs
