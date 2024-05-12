export default function Option({
  quizQuestions,
  handleChange,
  selectedOption,
}) {
  return (
    <>
      {quizQuestions.map((question, index) => (
        <div key={index}>
          <input
            type="radio"
            name="option"
            checked={selectedOption === question}
            value={question}
            onChange={handleChange}
          />
          <label className="form-check-label">{question}</label>
        </div>
      ))}
    </>
  );
}
