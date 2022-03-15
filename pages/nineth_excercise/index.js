import { useState } from "react";
import styles from "../../styles/Nine.module.css";
import Link from "next/link";

export default function Excercise_nine() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://random-data-api.com/api/users/random_user?size=10"
    );

    const resData = await response.json();
    setData(resData);
  };

  return (
    <>
      <Link href="/">
        <a>Back To List of Excercises</a>
      </Link>
      <button className={styles.button} onClick={fetchData}>
        Fetch Random{" "}
      </button>
      <div className={styles.container}>
        {data.map((item) => {
          return (
            <div className={styles.flip_card} key={item.id}>
              <div className={styles.flip_card_inner}>
                <div className={styles.flip_card_front}>
                  <img
                    src={item.avatar}
                    alt="Picture of the author"
                    width={300}
                    height={300}
                  />
                </div>
                <div className={styles.flip_card_back}>
                  <h1>
                    {item.first_name} {item.last_name}
                  </h1>
                  <h4>{item.employment.title}</h4>
                  <h5>City: {item.address.city}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
