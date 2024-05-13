export default function Option({
  quizQuestions,
  handleChange,
  selectedOption,
}) {
  return (
    <>
      {quizQuestions.map((option, index) => (
        <div key={index} className="flex items-center my-2">
          <input
            className="mr-2"
            type="radio"
            name="option"
            checked={selectedOption === option}
            value={option}
            onChange={handleChange}
            id={option.id}
          />
          <label htmlFor={option.id} className="form-check-label">
            {option}
          </label>
        </div>
      ))}
    </>
  );
}
