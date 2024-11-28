import css from "./Feedback.module.css";

function Feedback({ feedbacks, totalFeedback, positiveFeedbackPercentage }) {
  return (
    <div className={css.feedbacks}>
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedbackPercentage}%</p>
    </div>
  );
}

export default Feedback;
