import { CTA, CTA_CONTACT } from "./constants"

function Cta() {
  return (
    <section id="contact" className="sm:py-24 py-16 px-[5%] bg-[#f9fafb]">
      <div className="max-w-300 my-0 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-8 items-center">
        <div>
          <div className="text-[#f97316] font-bold text-xs tracking-[2] mb-3">
            GET IN TOUCH
          </div>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-black text-[#0d1b3e] mb-5">
            Ready to Secure <span className="text-[#f97316]">Your Business?</span>
          </h2>
          <p className="text-[#6b7280] leading-[1.8] mb-8">
            Whether you need a single camera or a nationwide multi-site deployment, our team is ready to help. Reach out for a free, no-obligation site assessment.
          </p>
          {
            CTA.map((cta, i) => (
              <div key={i} className="flex items-center gap-3 mb-4 text-[#374151] text-base">
                <span className="text-xl">{cta.icon}</span>{cta.text}
              </div>
            ))
          }
        </div>
        <div className="bg-white rounded-[20px] p-10 shadow-[0_4px_32px_rgba(0,0,0,0.08)] border border-[#e5e7eb]">
          <h3 className="font-extrabold text-[#0d1b3e] mb-6 text-xl">
            Request a Free Quote
          </h3>
          {
            CTA_CONTACT.map((input) => (
              <input
                key={input.label}
                type={input.type}
                placeholder={input.label}
                className="w-full py-3.5 px-4 border border-[#e5e7eb] rounded-lg mb-4 text-base outline-0 font-[inherit]"
              />
            ))
          }
          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            className="w-full py-3.5 px-4 border border-[#e5e7eb] rounded-lg mb-5 text-base outline-0 font-[inherit] resize-y"
          />
          <button className="w-full bg-[#f97316] text-white border-0 p-4 rounded-lg font-bold text-base cursor-pointer">
            Send Message →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cta
