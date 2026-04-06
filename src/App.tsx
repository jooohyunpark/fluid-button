import { useState } from "react";
import { words } from "./data";
import Button from "./components/Button";
import ButtonTwo from "./components/ButtonTwo";

function App() {
  const [word, setWord] = useState(words[0]);
  const [wordTwo, setWordTwo] = useState(words[0]);

  return (
    <div className="flex gap-8">
      <Button
        onClick={() => setWord(words[Math.floor(Math.random() * words.length)])}
      >
        {word}
      </Button>

      <ButtonTwo
        onClick={() =>
          setWordTwo(words[Math.floor(Math.random() * words.length)])
        }
      >
        {wordTwo}
      </ButtonTwo>
    </div>
  );
}

export default App;
