import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Button({ children, ...props }) {
  const [displayed, setDisplayed] = useState(children);
  const [pending, setPending] = useState<string | null>(null);

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
            key={displayed}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15, delay: 0.15 } }}
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
