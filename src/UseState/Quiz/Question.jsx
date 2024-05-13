import Option from "./Option";

export default function Question({
  quizQuestions,
  handleSubmit,
  handleChange,
  selectedOption,
}) {
  return (
    <div className="bg-green-100 shadow-lg rounded p-4 w-[600px]">
      <h3>Question {quizQuestions.id}</h3>
      <h5 className="mt-2 font-bold text-sm">{quizQuestions.question}</h5>
      <form onSubmit={handleSubmit}>
        <Option
          quizQuestions={quizQuestions.options}
          handleChange={handleChange}
          selectedOption={selectedOption}
        />
        <button type="submit" className="text-white rounded bg-blue-600 p-2">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
