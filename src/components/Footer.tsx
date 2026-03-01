import { FOOTER } from "./constants"

function Footer() {
  return (
    <footer className="bg-[#050a18] pt-12 px-[5%] pb-8">
      <div className="max-w-300 my-0 mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] min-[450px]:grid-cols-2 grid-cols-1 min-[450px]:gap-12 gap-7 pb-10 border-b border-b-[rgba(255,255,255,0.08)]">
          <div>
            <div className="font-black text-2xl text-white mb-4">
              Ds<span className="text-[#f97316]">Tech</span>
            </div>
            <p className="text-[#6b7280] text-sm leading-[1.8] max-w-70">
              Your trusted IT and security partner across the Philippines. Powered by Dahua Technology.
            </p>
          </div>
          {
            FOOTER.map((foot, idx) => (
              <div key={idx}>
                <div className="text-white font-bold mb-5 text-base">
                  {foot.main}
                </div>
                {
                  foot.links.map(it =>
                    <div key={it} className="text-[#6b7280] text-sm mb-2.5">
                      {it}
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
        <div className="pt-6 flex justify-between items-center flex-wrap gap-4">
          <div className="text-[#6b7280] text-sm">© 2025 DsTech. All rights reserved. | Powered by Dahua Technology</div>
          <div className="text-[#6b7280] text-sm">Licensed IT Services Provider · Philippines</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
