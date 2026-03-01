import { NAV } from "./constants"
import Btn from "./Btn"
import { useEffect, useState } from "react"
import clsx from "clsx"

function Nav() {
  const [isShown, setIsShown] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShown(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-999 bg-[rgba(5,10,24,0.96)] backdrop-blur-[14px] border-b border-b-[rgba(249,115,22,0.12)]">
      <div className="h-16 max-w-300 my-0 mx-auto py-0 px-8 flex items-center justify-between relative">
        <div className="font-black text-2xl text-white -tracking-[0.5px]">
          Ds<span className="text-[#f97316]">Tech</span>
        </div>
        <div className="min-[768px]:flex hidden gap-8 items-center">
          {
            NAV.map(nav =>
              <a href={nav.link} className="text-[#9ca3af] hover:text-[#f97316] text-sm decoration-0 transition-colors duration-200 font-medium">
                {nav.label}
              </a>
            )
          }
          <Btn small href="#contact">Get a Quote</Btn>
        </div>
        <Btn small style="!w-fit !px-3 !py-3 min-[768px]:hidden" onClick={() => setIsShown(!isShown)}>
          <div className="flex flex-col gap-0.5">
            <div className="h-0.5 bg-white w-4 rounded-2xl"/>
            <div className="h-0.5 bg-white w-4 rounded-2xl"/>
            <div className="h-0.5 bg-white w-4 rounded-2xl"/>
          </div>
        </Btn>
        <div className={clsx(
          isShown ? "flex" : "hidden",
          "absolute bg-[rgba(5,10,24,0.96)] backdrop-blur-[14px] text-white flex-col gap-2 items-center inset-x-8.5 -bottom-55 z-999 p-6 rounded-2xl"
        )}>
          {
            NAV.map((nav,i) =>
              <>
                <a href={nav.link} className={clsx(
                  "text-sm decoration-0 font-medium"
                )}>
                  {nav.label}
                </a>
                {
                  i !== NAV.length - 1 &&
                  <div className="h-px w-1/2 mx-auto bg-linear-to-r from-transparent via-white to-transparent"></div>
                }
                
              </>
            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Nav
