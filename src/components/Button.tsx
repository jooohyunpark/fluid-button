import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";

type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
};

function useMeasure(): [
  (node: HTMLElement | null) => void,
  { width: number; height: number },
] {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [bounds, setBounds] = useState({ width: 0, height: 0 });

  const ref = useCallback((node: HTMLElement | null) => {
    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      setBounds({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);

  return [ref, bounds];
}

function Button({ children, ...props }: ButtonProps) {
  const [ref, bounds] = useMeasure();

  useEffect(() => {
    console.log(bounds);
  }, [bounds]);

  return (
    <motion.button
      animate={{ width: bounds.width > 0 ? bounds.width : "auto" }}
      transition={{ duration: 0.15 }}
      className="bg-white text-black inline-flex items-center justify-center"
      style={{ borderRadius: 9999 }}
      {...props}
    >
      <div ref={ref}>
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
          className="inline-block whitespace-nowrap px-4 py-2"
          key={String(children)}
        >
          {children}
        </motion.span>
      </div>
    </motion.button>
  );
}

export default Button;
