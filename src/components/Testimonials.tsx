import { TESTIMONIALS } from "./constants"

function Testimonials() {
  return (
    <section id="testimonials" className="sm:py-24 py-16 px-[5%] bg-linear-to-br from-[#050a18] to-[#0d1b3e]">
      <div className="max-w-300 my-0 mx-auto">
        <div className="text-center sm:mb-14 mb-8">
          <div className="text-[#f97316] font-bold text-xs tracking-[2] mb-3">
            CLIENT REVIEWS
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-black text-white">
            What Our <span className="text-[#f97316]">Clients Say</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {
            TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.05)] border border-[rgba(249,115,22,0.2)] rounded-2xl p-8 backdrop-blur-md">
                <div className="mb-4">
                  {
                    Array(t.stars).fill(0).map((_, j) =>
                      <span key={j} className="text-base text-[#f97316]">★</span>
                    )
                  }
                </div>
                <p className="italic text-[#e5e7eb] leading-7 mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10.5 h-10.5 rounded-full bg-[#f97316] flex items-center justify-center text-white font-black text-base">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">
                      {t.name}
                    </div>
                    <div className="text-[#9ca3af] text-sm">
                      {t.role}
                    </div>
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

export default Testimonials
