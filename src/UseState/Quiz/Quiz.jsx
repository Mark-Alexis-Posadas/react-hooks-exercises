import Question from "./Question";
import Score from "./Score";
import quizQuestions from "./data";
export default function Quiz() {
  return (
    <div>
      <h1 className="font-bold text-xl">Quiz App</h1>
      <Question quizQuestions={quizQuestions} />
      <Score />
    </div>
  );
}
