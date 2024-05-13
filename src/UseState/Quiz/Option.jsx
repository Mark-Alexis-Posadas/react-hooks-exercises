export default function Option({
  quizQuestions,
  handleChange,
  selectedOption,
}) {
  return (
    <>
      {quizQuestions.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name="option"
            checked={selectedOption === option}
            value={option}
            onChange={handleChange}
          />
          <label className="form-check-label">{option}</label>
        </div>
      ))}
    </>
  );
}
