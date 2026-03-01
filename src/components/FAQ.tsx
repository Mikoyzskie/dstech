import { useState } from "react";
import { FAQS } from "./constants"

function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="sm:py-24 py-16 px-[5%] bg-white">
      <div className="max-w-200 my-0 mx-auto">
        <div className="text-center sm:mb-14 mb-8">
          <div className="text-[#f97316] font-bold text-xs tracking-[2] mb-3">
            FAQS
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-black text-[#0d1b3e]">
            Most Common <span className="text-[#f97316]">Questions</span>
          </h2>
        </div>
        {
          FAQS.map((f, i) => (
            <div key={i} className="border-b border-b-[#e5e7eb] mb-4">
              <button onClick={
                () => setOpenFaq(openFaq === i ? null : i)
              }
                className="w-full bg-none border-0 text-left py-5 px-0 cursor-pointer flex justify-between items-center gap-4"
              >
                <span className="font-bold text-[#0d1b3e] text-base">
                  {f.q}
                </span>
                <span className="text-[#f97316] text-2xl font-light min-w-6 text-center leading-none">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {
                openFaq === i &&
                <div className="pb-5 text-[#6b7280] leading-[1.8] text-base">
                  {f.a}
                </div>
              }
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default FAQ
