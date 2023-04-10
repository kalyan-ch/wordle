import Guess from "./components/Guess";
import Keyboard from "./components/Keyboard";
import axios from "axios";
import { useState } from "react";

const App = () => {

  const [word, setWord] = useState('');
  const [guessWord, setGuessWord] = useState('');

  axios({
    method: 'get',
    url: "https://random-word-api.herokuapp.com/word",
    params: {
      length: 5
    }
  }).then((res) => {
    setWord(res.data[0]);
  });

  const onEnterClick = () => {
    if (word === guessWord) {
      // make all boxes green
      console.log("hooray");
      return;
    }


  }

  return (
    <div className="App">
      <div className="title">
        <h1>Wordle</h1>
      </div>

      <Guess guessWord={guessWord}
          setGuessWord={setGuessWord} />

      <Keyboard onEnterClick={onEnterClick} />
    </div>
  );
}

export default App;
