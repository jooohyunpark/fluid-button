import { motion, AnimatePresence } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
};

function Button({ children, ...props }: ButtonProps) {
  return (
    <motion.button
      layout
      transition={{ layout: { duration: 0.15 } }}
      className="bg-white text-black py-2 px-6"
      style={{ borderRadius: 9999 }}
      {...props}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="inline-block"
          key={String(children)}
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

export default Button;
