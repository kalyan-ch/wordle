
const firstRow = "qwertyuiop";
const secondRow = "asdfghjkl";
const thirdRow = "zxcvbnm";

const getRowButtons = (rowLetters) => {
  const buttons = [];
  for (let i = 0; i < rowLetters.length; i++) {
    buttons.push(
      <button
        key={rowLetters.charAt(i)}
        className="ui inverted basic button">
        {rowLetters.charAt(i).toUpperCase()}
      </button>
    );
  }
  return buttons;
};


const Keyboard = ({ onEnterClick }) => {

  return (
    <div className="keyboard">
      <div className="keyRow">
        {getRowButtons(firstRow)}
      </div>
      <div className="keyRow secRow">
        {getRowButtons(secondRow)}
      </div>
      <div className="keyRow thirdRow">
        <button className="ui inverted basic button specialBtn" onClick={onEnterClick}>Enter</button>
        {getRowButtons(thirdRow)}
        <button className="ui inverted basic button specialBtn">&lt;=</button>
      </div>
    </div>
  );

}

export default Keyboard;