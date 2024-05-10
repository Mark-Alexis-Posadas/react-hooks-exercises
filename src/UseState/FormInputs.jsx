import { useState } from "react";

export default function FormInputs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const [submittedData, setSubmittedData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !gender || !password) {
      alert("please fill up the fields");
      return;
    }
    setSubmittedData(
      ...firstName,
      ...lastName,
      ...email,
      ...password,
      ...gender
    );
  };

  return (
    <div className="h-screen flex items-center justify-center p-20">
      <form
        className="bg-slate-50 shadow-md rounded p-20 w-6/12 h-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="first_name">first name</label>
          <input
            type="text"
            className="bg-white border border-slate-200 p-2 rounded w-full"
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="first_name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last_name">last name</label>
          <input
            type="text"
            className="bg-white border border-slate-200 p-2 rounded w-full"
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="last_name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="bg-white border border-slate-200 p-2 rounded w-full"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>
        <div className="mb-4">
          <label>gender</label>
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <label htmlFor="female" className="mr-2">
                Female
              </label>
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
                id="female"
              />
            </div>

            <div className="flex items-center">
              <label htmlFor="male" className="mr-2">
                Male
              </label>
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
                id="male"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="bg-white border border-slate-200 p-2 rounded w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </div>
        <button className="w-full text-white bg-green-400 rounded p-2">
          Submit
        </button>
      </form>
      {submittedData && (
        <ul className="w-6/12 ml-5">
          <li className="mb-3 flex items-center">
            First Name: <h1>{firstName}</h1>
          </li>
          <li className="mb-3 flex items-center">
            Last Name: <h1>{lastName}</h1>
          </li>
          <li className="mb-3 flex items-center">
            Email: <h1>{email}</h1>
          </li>
          <li className="mb-3 flex items-center">
            Gender: <h1>{gender}</h1>
          </li>
          <li className="mb-3 flex items-center">
            Password: <h1>{password}</h1>
          </li>
        </ul>
      )}
    </div>
  );
}
