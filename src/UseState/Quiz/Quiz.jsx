import { useState } from "react";
import quizQuestions from "./data";
import Question from "./Question";
import Score from "./Score";

export default function Quiz() {
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
    handleNextQuestion();
  };

  const checkAnswer = () => {
    //answer
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
      setSelectedOption("");
    } else {
      setQuizEnd(true);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="font-bold text-xl mb-5">Quiz App</h1>
      {!quizEnd ? (
        <Question
          quizQuestions={quizQuestions[currentQuestion]}
          selectedOption={selectedOption}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      ) : (
        <Score score={score} onNextQuestion={handleNextQuestion} />
      )}
    </div>
  );
}
