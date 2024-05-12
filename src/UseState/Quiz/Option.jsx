export default function Option({ quizQuestions }) {
  return (
    <>
      {quizQuestions.map((question, index) => (
        <div key={index}>
          <input type="radio" name="option" value={question} />
          <label className="form-check-label">{question}</label>
        </div>
      ))}
    </>
  );
}
