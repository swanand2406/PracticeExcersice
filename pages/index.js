import Link from "next/link";
import styles from "../styles/Home.module.css";
import ListItems from "../pages/sixth_excercise";

export default function IndexPage() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  return (
    <div className={styles.container}>
      <h1>Swanand Sambhus</h1>
      <h2>React Exercies</h2>

      <Link href="/first_excercise">
        <a>
          <h4>Exercise 1 : Hello World</h4>
        </a>
      </Link>

      <Link href="/second_excercise">
        <a>
          <h4>Exercise 2 : Capturing User Clicks</h4>
        </a>
      </Link>

      <Link href="/third_excercise">
        <a>
          <h4>Exercise 3 : Custom Component</h4>
        </a>
      </Link>

      <Link href="/fourth_excercise">
        <a>
          <h4>Exercise 4 : State and Props</h4>
        </a>
      </Link>

      <Link href="/fifth_excercise">
        <a>
          <h4>Exercise 5 : Mapping a List</h4>
        </a>
      </Link>

      <h4>Exercise 6 : Mapping a List From seperate components</h4>
      <ListItems animals={animals} />

      <Link href="/seventh_excercise">
        <a>Exercise 7 : Building Forms</a>
      </Link>

      <div>
        <Link href="/eighth_excercise">
          <a>Exercise 8 : Rendering JSON</a>
        </Link>
      </div>

      <Link href="/nineth_excercise">
        <a>Exercise 9 : API Calling</a>
      </Link>
    </div>
  );
}
