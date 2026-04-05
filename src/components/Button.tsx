import { motion } from "motion/react";
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
      <motion.span>{children}</motion.span>
    </motion.button>
  );
}

export default Button;
