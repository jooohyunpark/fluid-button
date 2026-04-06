import { useRef, type ReactNode, type ButtonHTMLAttributes } from "react";

function Button({
  children,
  ...props
}: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={ref}
      className="bg-white text-black py-2 px-6 rounded-full"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
