import React from "react";
import Link from "next/link";
export default function ExcerciseThree() {
  const myFunction = () => {
    alert("You clicked 1st button");
  };
  const myFunctiontwo = () => {
    alert("You clicked 2nd button");
  };
  const myFunctionthree = () => {
    alert("You clicked 3rd button");
  };
  return (
    <>
      <Link href="/">
        <a>Back To List of Excercises</a>
      </Link>
      <div>
        <button onClick={myFunction}>Button1</button>
        <button onClick={myFunctiontwo}>Button2</button>
        <button onClick={myFunctionthree}>Button3</button>
      </div>
    </>
  );
}
