import Link from "next/link";

export default function ListItems() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  const listItem = animals.map((item) => <li key={item.toString()}>{item}</li>);
  return (
    <div>
      <h1>Excercise 5 Mapping Through List</h1>
      <Link href="/">
        <a>Back To List of Excercises</a>
      </Link>
      <ul>{listItem}</ul>
    </div>
  );
}
