import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const sentences = [
  "The quick brown fox jumps over the lazy dog",
  "The quick brown fox jumps over th",
  "s 123i9jasl ekf aslkdf s",
  "1 231k2j 3lk21j3l12k3j l2k3j12lk3j k",
  "The qu12312312th",
  " sldkjf kldjf ls812u312lk lm1k23m k12m3 l",
];

const LAYOUT_DURATION = 2;

function App() {
  const [sentence, setSentence] = useState("123 123 23 12");
  const [next, setNext] = useState<string | null>(null);

  return (
    <>
      <motion.button
        className="bg-white text-black py-2 px-4 rounded-full "
        onClick={() => {
          if (next) return;
          setNext(sentences[Math.floor(Math.random() * sentences.length)]);
        }}
        layout
        transition={{ duration: LAYOUT_DURATION }}
      >
        <AnimatePresence
          onExitComplete={() => {
            setSentence(next!);
            setNext(null);
          }}
        >
          {!next && (
            <motion.span
              key={sentence}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, delay: LAYOUT_DURATION }}
            >
              {sentence}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}

export default App;
