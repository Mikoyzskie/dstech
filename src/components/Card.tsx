type Props = {
  icon: string,
  title: string,
  desc: string
}

function Card({
  icon,
  title,
  desc
}:Props) {
  
  return (
    <div className={"bg-white rounded-[14px] p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(249,115,22,0.18)] border border-solid border-[#e5e7eb] hover:border-[#f97316] hover:-translate-y-1.5 cursor-pointer transition-all duration-[.25s]"}>
      <div className="flex lg:flex-col flex-row gap-5 items-center lg:items-start lg:gap-0">
        <div className="h-13 w-13 bg-[rgba(249,115,22,0.1)] rounded-xl flex items-center justify-center text-2xl mb-5">
          {icon}
        </div>
        <h3 className="font-extrabold text-lg text-[#0d1b3e] mb-2.5" >
          {title}
        </h3>
      </div>
      <p className="text-[#6b7280] text-sm leading-6 m-0">
        {desc}
      </p>
      <div className="mt-5 text-[#f97316] font-bold text-sm">
        Learn More →
      </div>
    </div>
  );
}

export default Card;
