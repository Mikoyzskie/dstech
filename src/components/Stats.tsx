import {STATS} from "./constants"

function Stats() {
  return (
    <section className="bg-[#f97316] py-10 px-[5%]">
      <div className="max-w-300 my-0 mx-auto flex gap-4 text-center justify-evenly items-center flex-wrap">
        {STATS.map((s, i) => (
          <div key={i}>
            <div className="min-[663px]:text-4xl text-2xl font-black text-white">
              {s.val}
            </div>
            <div className="text-sm text-[rgba(255,255,255,0.85)] font-medium mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
