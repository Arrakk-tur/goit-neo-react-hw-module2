import css from "./Options.module.css";

function Options({ onLeaveFeedback, onResetFeedback, totalFeedback }) {
  return (
    <div className={css.options}>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>

      {totalFeedback > 0 && (
        <button onClick={onResetFeedback} className={css.resetButton}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
