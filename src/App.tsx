import { useState } from "react";
import { words } from "./data";
import Button from "./components/Button";

function App() {
  const [word, setWord] = useState(words[0]);

  return (
    <div className="flex gap-8">
      <Button
        onClick={() => setWord(words[Math.floor(Math.random() * words.length)])}
      >
        {word}
      </Button>
    </div>
  );
}

export default App;
