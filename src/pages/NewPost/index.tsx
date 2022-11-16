import React from "react";
import Exercise from "../../components/Exercise";
import styles from "./NewPost.module.css";
import { useState } from "react";
import { workoutAtom } from "../../atom";
import { useRecoilState } from "recoil";

const onGetDay = (date: Date): string => {
  const allDays = ["일", "월", "화", "수", "목", "금", "토"];
  return allDays[date.getDay()];
};

interface IMeal {
  id: number;
  breakfast: string;
  lunch: string;
  dinner: string;
  etc: string;
}

const NewPost = () => {
  const today = new Date();
  const day = onGetDay(today);

  const [workout, setWorkout] = useRecoilState(workoutAtom);

  const [meal, setMeal] = useState<IMeal>({
    id: 0,
    breakfast: "",
    lunch: "",
    dinner: "",
    etc: "",
  });

  const { breakfast, lunch, dinner, etc } = meal;

  const onChangeMeal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setMeal({
      ...meal,
      [name]: value,
    });
    setWorkout({
      ...workout,
      meal,
    });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(workout);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <h1>
          {today.getFullYear()}년 {today.getMonth() + 1}월{today.getDate()}일{" "}
          {day}요일
        </h1>
        <div className={styles.meal}>
          <h2>식사</h2>
          <table>
            <tbody>
              <tr>
                <th>아침</th>
                <th>점심</th>
                <th>저녁</th>
                <th>그 외</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    className="inputText"
                    onChange={onChangeMeal}
                    name="breakfast"
                    value={breakfast}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="inputText"
                    onChange={onChangeMeal}
                    name="lunch"
                    value={lunch}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="inputText"
                    onChange={onChangeMeal}
                    name="dinner"
                    value={dinner}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="inputText"
                    onChange={onChangeMeal}
                    value={etc}
                    name="etc"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Exercise />
        <button className="saveBtn">저장하기</button>
      </form>
    </div>
  );
};

export default NewPost;
