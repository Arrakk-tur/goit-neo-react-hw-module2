import { useState } from "react";
import Description from "./components/Description/Description";
import "./App.css";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (type) => {
    setFeedbacks({
      ...feedbacks,
      [type]: feedbacks[type] + 1,
    });
  };
  return (
    <>
      <Description />
      <Options onLeaveFeedback={updateFeedback} />
      <Feedback feedbacks={feedbacks} />
    </>
  );
}

export default App;
