import { useState } from "react";
import Question from "./Question";
import Score from "./Score";
import quizQuestions from "./data";
export default function Quiz() {
  const [question] = useState(quizQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
  };

  const checkAnswer = () => {
    //answer
    if (selectedOption === question[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < question.length) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
      selectedOption("");
    } else {
      setQuizEnd(true);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-xl">Quiz App</h1>
      {!quizEnd ? (
        <Question
          quizQuestions={quizQuestions}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          selectedOption={selectedOption}
        />
      ) : (
        <Score score={score} onNextQuestion={handleNextQuestion} />
      )}
    </div>
  );
}
