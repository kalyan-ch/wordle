
const getGuessBoxes = () => {
  const guessRows = [];
  for (let i = 0; i < 6; i++) {
    const guessRow = [];
    const guessLetters = [];
    for (let j = 0; j < 5; j++) {
      guessLetters.push(
        <div key={i +""+ j} className="guessBox"></div>)
    }
    guessRow.push(
      <div
        key={i}
        className="guessRow">
        {guessLetters}
      </div>
    );
    guessRows.push(guessRow);
  }

  return guessRows;
}

const Guess = ({ guessWord, setGuessWord }) => {
  return (
    <div className="guessBoxes">
      {getGuessBoxes()}
    </div>
  );
}

export default Guess;