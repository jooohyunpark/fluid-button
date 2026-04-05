import { useState } from "react";
import { words } from "./data";
import Button from "./components/Button";

function App() {
  const [word, setWord] = useState(words[0]);

  return (
    <Button
      onClick={() => setWord(words[Math.floor(Math.random() * words.length)])}
    >
      {word}
    </Button>
  );
}

export default App;
