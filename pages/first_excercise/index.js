import React from "react";
import Link from "next/link";

export default function first_excercise() {
  return (
    <>
      <Link href="/">
        <a>Back To List of Excercises</a>
      </Link>
      <div style={{ backgroundColor: "yellow", flex: 1 }}>
        <h1>hello world</h1>
      </div>
    </>
  );
}
