import { SERVICES } from "./constants"
import Card from "./Card"

function Services() {
  return (
    <section id="services" className="sm:py-24 py-16 px-[5%] bg-[#f9fafb]">
      <div className="max-w-300 my-0 mx-auto">
        <div className="text-center mb-14">
          <div className="text-[#f97316] font-bold text-xs tracking-[2px] mb-3">
            WHAT WE DO
          </div>
          <h2 className="text-[#0d1b3e] font-black text-[clamp(1.8rem,3vw,2.5rem)]">
            Exclusive <span className="text-[#f97316]">IT & Security</span> Services
          </h2>
          <p className="text-[#6b7280] max-w-125 my-4 mx-auto leading-7">
            Everything your business needs to stay secure, connected, and competitive — delivered by local experts across the Philippines.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
          {
            SERVICES.map((service, i) => <Card key={i} {...service} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Services
