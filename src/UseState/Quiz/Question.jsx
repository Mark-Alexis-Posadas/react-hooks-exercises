import Option from "./Option";

export default function Question({ quizQuestions }) {
  const currentQuestion = quizQuestions[0];
  return (
    <div>
      <h3>Question {currentQuestion.id}</h3>
      <h5 className="mt-2">{currentQuestion.question}</h5>
      <form>
        <Option quizQuestions={currentQuestion.options} />
        <button type="submit" className="text-white rounded bg-blue-600 p-2">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
