import { HERO_CIRCLE_ICONS } from "./constants"
import Btn from "./Btn"
import clsx from "clsx"
import "./styles/animation.css"

function Hero() {
  return (
    <section className="bg-linear-to-br from-[#050a18] via-[#0d1b3e] to-[#050a18] min-[663px]:min-h-screen min-h-[84vh] flex items-center relative overflow-hidden py-0 px-[5%] pt-16">
      <div className="absolute top-[15%] right-[5%] w-140 h-140 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.13)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[2%] w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(10,110,253,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-300 my-0 mx-auto w-full grid min-[663px]:grid-cols-2 grid-cols-1 min-[663px]:gap-x-16  items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[rgba(249,115,22,0.12)] border border-[rgba(249,115,22,0.3)] rounded-[20px] py-1.5 px-4 text-xs text-[#f97316] font-bold mb-6 tracking-[1px]" >
            <span>⚡</span> DAHUA TECHNOLOGY PARTNER
          </div>
          <div className="fade-slide text-[clamp(2rem,4vw,3.4rem)] font-black text-white leading-tight mb-6 ">
            Securing the Philippines,<br />
            <div className="text-[#f97316] inline relative">
              <div className="inline one">One Network</div>
              <div className="inline absolute inset-0 top-2.5 bg-[#f97316] reveal"/>
            </div> at a Time.
          </div>
          <p className="text-[#9ca3af] text-base leading-[1.8] mb-10 max-w-120">
            DsTech delivers enterprise-grade CCTV installation, network infrastructure,
            and data services — keeping your business protected and in full control 24/7.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Btn href="#contact">Get Free Assessment</Btn>
            <Btn href="#services" outline>View Services</Btn>
          </div>
          <div className="hidden min-[768px]:flex gap-x-8 gap-y-4 mt-10 border-t border-t-[rgba(255,255,255,0.08)] pt-6 flex-wrap items-center justify-center">
            {
              ["Nationwide Coverage", "Dahua Certified", "24/7 Support"].map(bullet => (
                <div key={bullet} className="flex items-center gap-1.5 text-[#9ca3af] text-sm">
                  <span className="text-[#f97316] font-black whitespace-nowrap">✓</span>{bullet}
                </div>
              ))
            }
          </div>
        </div>
        {/* Hero visual */}
        <div className="min-[663px]:flex items-center justify-center hidden">
          <div className="relative w-95 h-95">
            <div className="absolute inset-0 rounded-full bg-[rgba(249,115,22,0.06)] border border-[rgba(249,115,22,0.15)]" />
            <div className="absolute inset-10 rounded-full bg-[rgba(249,115,22,0.08)] border border-[rgba(249,115,22,0.2)] flex items-center justify-center text-8xl">
              <span>🔒</span>
            </div>
            {
              HERO_CIRCLE_ICONS.map((icon, i) => (
                <div key={i} className={clsx(
                  "absolute bg-[rgba(255,255,255,0.05) backdrop-blur-[10px] border border-[rgba(249,115,22,0.25)] rounded-[10px] py-2 px-3.5 flex items-center gap-2 whitespace-nowrap",
                  icon.top ?? icon.top,
                  icon.bottom ?? icon.bottom,
                  icon.left ?? icon.left,
                  icon.right ?? icon.right
                )}>
                  <span className="text-base">
                    {icon.i}
                  </span>
                  <span className="text-white text-sm font-semibold">
                    {icon.t}
                  </span>
                </div>
              ))
            }
          </div>
        </div>
        <div className="min-[768px]:hidden flex gap-x-8 gap-y-4 mt-10 border-t border-t-[rgba(255,255,255,0.08)] pt-6 col-span-2 items-center justify-center flex-wrap">
          {
            ["Nationwide Coverage", "Dahua Certified", "24/7 Support"].map(bullet => (
              <div key={bullet} className="flex items-center gap-1.5 text-[#9ca3af] text-sm">
                <span className="text-[#f97316] font-black">✓</span>{bullet}
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Hero
