import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
};

function Button({ children, ...props }: ButtonProps) {
  const [displayed, setDisplayed] = useState<ReactNode>(children);
  const [pending, setPending] = useState<ReactNode | null>(null);

  if (children !== displayed && children !== pending) {
    setPending(children);
  }

  return (
    <motion.button
      layout
      transition={{ layout: { duration: 0.15 } }}
      style={{ borderRadius: 9999 }}
      className="bg-white text-black py-2 px-4"
      {...props}
    >
      <AnimatePresence
        onExitComplete={() => {
          setDisplayed(pending!);
          setPending(null);
        }}
      >
        {!pending && (
          <motion.span
            key={String(displayed)}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15, delay: 0.15 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {displayed}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default Button;
