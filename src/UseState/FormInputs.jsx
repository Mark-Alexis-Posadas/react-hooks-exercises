import { useState } from "react";

export default function FormInputs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-screen flex items-center justify-center p-20">
      <form className="bg-slate-50 shadow-md rounded p-20 w-full h-full">
        <div className="mb-4">
          <label>first name</label>
          <input
            type="text"
            className="bg-white border border-slate-200 p-2 rounded w-full"
            placeholder="first name"
          />
        </div>
        <div className="mb-4">
          <label>last name</label>
          <input
            type="text"
            className="bg-white border border-slate-200 p-2 rounded w-full"
            placeholder="last name"
          />
        </div>
        <div className="mb-4">
          <label>email</label>
          <input
            type="email"
            className="bg-white border border-slate-200 p-2 rounded w-full"
            placeholder="email"
          />
        </div>
        <div className="mb-4">
          <label>gender</label>
          <div>
            <input type="radio" />
            <input type="radio" />
          </div>
        </div>
        <div className="mb-4">
          <label>password</label>
          <input
            type="password"
            className="bg-white border border-slate-200 p-2 rounded w-full"
          />
        </div>
        <button className="w-full text-white bg-green-400 rounded p-2">
          Submit
        </button>
      </form>
    </div>
  );
}
