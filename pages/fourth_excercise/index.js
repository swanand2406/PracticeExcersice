import React, { useState } from "react";
import Link from "next/link";
export default function ExcersiceFour() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Link href="/">
        <a>Back To List of Excercises</a>
      </Link>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </>
  );
}
