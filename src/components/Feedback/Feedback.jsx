import "./Feedback.module.css";

function Feedback({ feedbacks }) {
  return (
    <div className="feedbacks">
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
    </div>
  );
}

export default Feedback;
