import clsx from "clsx"
import { STEPS } from "./constants"

function HowItWorks() {
  return (
    <section className="sm:py-24 py-16 px-[5%] bg-[#f9fafb]">
      <div className="max-w-300 my-0 mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="text-[#f97316] font-bold text-sm tracking-[2] mb-3">
            OUR PROCESS
          </div>
          <h2 className="text-[#0d1b3e] font-black text-[clamp(1.8rem,3vw,2.5rem)]">
            Works in <span className="text-[#f97316]">3</span> Easy Steps
          </h2>
        </div>
        <div className="grid grid-cols-1 min-[565px]:grid-cols-2 gap-4 md:gap-8 relative md:grid-cols-3 justify-center">
          {STEPS.map((step, i) => (
            <div key={i} className={clsx("bg-white rounded-2xl py-10 px-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-[#e5e7eb] text-center relative", 
              i + 1 === STEPS.length ? "col-span-1 min-[565px]:col-span-2 md:col-span-1 md:block text-center md:text-center min-[565px]:flex gap-16 items-center min-[565px]:text-start justify-around" : "")}>
              <div>
                <div className="text-5xl font-black text-[rgba(249,115,22,0.15)] mb-2 leading-none">
                  {step.n}
                </div>
                <div className="w-14 h-14 bg-[#f97316] rounded-full flex items-center justify-center text-2xl mt-0 mx-auto mb-5 text-white font-black">
                  {i + 1}
                </div>
              </div>
              <div>
                <h3 className="font-extrabold text-[#0d1b3e] text-lg mb-3.5">
                  {step.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-[1.7]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
