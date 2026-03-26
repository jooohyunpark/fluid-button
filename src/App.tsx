import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { words } from "./data";

const LAYOUT = 0.3;
const TEXT = 0.15;

function App() {
  const [word, setWord] = useState(words[0]);
  const [nextWord, setNextWord] = useState<string | null>(null);

  return (
    <motion.button
      className="bg-white text-black py-2 px-4"
      onClick={() => {
        if (!nextWord)
          setNextWord(words[Math.floor(Math.random() * words.length)]);
      }}
      layout
      transition={{ layout: { duration: LAYOUT } }}
      style={{ borderRadius: 9999 }}
    >
      <AnimatePresence
        onExitComplete={() => {
          setWord(nextWord!);
          setNextWord(null);
        }}
      >
        {!nextWord && (
          <motion.span
            key={word}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: TEXT, delay: LAYOUT },
            }}
            exit={{ opacity: 0, transition: { duration: TEXT } }}
          >
            {word}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default App;
