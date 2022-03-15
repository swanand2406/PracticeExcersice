import React from "react";
import Link from "next/link";

export default function ExcersicTwo() {
  const myFunction = () => {
    alert("Clicked!" + 1);
  };
  return (
    <>
      <Link href="/">
        <a>Back To List of Excercises</a>
      </Link>
      <div>
        <button onClick={myFunction}>Click</button>
      </div>
    </>
  );
}
