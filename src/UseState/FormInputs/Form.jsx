import { useState } from "react";
import Input from "./Input";
import inputData from "./data";
import SubmittedDataItems from "./SubmittedDataItems";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !gender || !password) {
      alert("please fill up the fields");
      return;
    }
    setSubmittedData({ firstName, lastName, email, password, gender });
    console.log({ firstName, lastName, email, password, gender });
  };

  return (
    <div className="h-screen flex items-center justify-center p-20">
      <form
        className="bg-slate-50 shadow-md rounded p-20 w-6/12 h-auto"
        onSubmit={handleSubmit}
      >
        {inputData.map((data, idx) => (
          <Input
            classNames={`${
              idx === 3 || idx === 4
                ? ""
                : "bg-white border border-slate-200 p-2 rounded w-full"
            }`}
            text={data.text}
            key={data.id}
            type={data.inputType}
            name={data.name}
            handleChange={handleChange}
          />
        ))}

        <button className="w-full text-white bg-green-400 rounded p-2">
          Submit
        </button>
      </form>

      {submittedData && (
        <ul className="w-6/12 ml-5">
          {Object.entries(submittedData).map(([key, value]) => (
            <SubmittedDataItems key={key} label={key} value={value} />
          ))}
        </ul>
      )}
    </div>
  );
}
