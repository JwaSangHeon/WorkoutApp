import React, { useState, useRef } from "react";
import { workoutAtom } from "../../atom";
import { useRecoilState } from "recoil";

const onGetDay = (date: Date): string => {
  const allDays = ["일", "월", "화", "수", "목", "금", "토"];
  return allDays[date.getDay()];
};

const NewPost = () => {
  const today = new Date();
  const day = onGetDay(today);

  const [workouts, setWorkouts] = useState(workoutAtom);

  const nextId = useRef(1);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.dir(e.target);
    // const workout = {
    //   id: nextId.current,
    //   title:
    // };
    // setWorkouts();
  };

  return (
    <div>
      <h1>
        운동일지 - {today.getFullYear()}년 {today.getMonth() + 1}월
        {today.getDate()}일 {day}요일
      </h1>
      <form onSubmit={onSubmitForm}>
        <label>
          오늘의 식사 <input type="text" name="meal" required />
        </label>
        <label>
          운동 부위 <input type="text" name="part" required />
        </label>
        <label>
          운동 세트 <input type="text" name="set" required />
        </label>
        <label>
          운동 시간 <input type="text" name="time" required />
        </label>
        <button>저장하기</button>
      </form>
    </div>
  );
};

export default NewPost;
