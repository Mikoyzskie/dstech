import clsx from "clsx";

type Props = {
  isVisible?: boolean;
}

function ToTop({ isVisible }: Props) {
  return (
    <a 
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
      className={clsx(
        isVisible ? "scale-100" : "scale-0 pointer-events-none",
        'cursor-pointer rotate-270 fixed bottom-7 flex shadow-2xl right-7 bg-[#f97316]/90 text-2xl text-white h-16 w-16 rounded-full text-center items-center justify-center transition-transform duration-200 ease-in-out'
      )}>
      <span className='-translate-y-0.75'>→</span>
    </a>
  )
}

export default ToTop
