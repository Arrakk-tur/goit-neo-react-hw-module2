import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");
    return savedFeedbacks
      ? JSON.parse(savedFeedbacks)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const positiveFeedbackPercentage = Math.round(
    (feedbacks.good / totalFeedback) * 100
  );

  const updateFeedback = (type) => {
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [type]: prevFeedbacks[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <>
      <Description />
      <Options
        onLeaveFeedback={updateFeedback}
        onResetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;
