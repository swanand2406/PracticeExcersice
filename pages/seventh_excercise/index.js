import { useState } from "react";
import Link from "next/link";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <Link href="/">
        <a>Back To List of Excercises</a>
      </Link>
      <form>
        <label>
          Please Enter your First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Please Enter your Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />

        <button onClick={handleSubmit}>Greet Me</button>
      </form>
    </div>
  );
}
