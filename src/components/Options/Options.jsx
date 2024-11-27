import "./Options.module.css";

function Options({ onLeaveFeedback }) {
  return (
    <div className="options">
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
    </div>
  );
}

export default Options;
