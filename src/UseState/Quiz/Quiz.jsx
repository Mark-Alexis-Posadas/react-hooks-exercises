import { useState } from "react";
import Question from "./Question";
import Score from "./Score";
import quizQuestions from "./data";
export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  return (
    <div>
      <h1 className="font-bold text-xl">Quiz App</h1>
      <Question quizQuestions={quizQuestions} />
      <Score />
    </div>
  );
}
