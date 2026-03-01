import clsx from "clsx";

type Props = {
  children: React.ReactNode,
  href?: string,
  outline?: boolean,
  small?:boolean,
  style?:string,
  onClick?: ()=>void,
}

function Btn({ children, href, outline, small, style, onClick }: Props) {
  
  return(
    <a 
      onClick={onClick}
      href={href}
      className={clsx( style,
        "inline-block decoration-0 font-bold rounded-lg cursor-pointer transition-all text-white text-center w-full min-[986px]:w-auto ",
        small ? "text-sm py-2 px-5" : "text-base px-8 py-3",
        outline ? "border-2 border-solid hover:border-[#f97316] border-[rgba(255,255,255,0.25)] hover:text-[#f97316] bg-transparent"
          : `bg-[#f97316] hover:bg-[#ea580c] border-0`
      )}
    >
        {children}
    </a>
  );
}

export default Btn;

