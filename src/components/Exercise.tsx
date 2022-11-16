import React from "react";
import { useState } from "react";
import { workoutAtom } from "../atom";
import { useRecoilState } from "recoil";

const Exercise = () => {
  const [count, setCount] = useState<number>(0);
  const [rows, setRows] = useState<number[]>([]);

  const [workout, setWorkout] = useRecoilState(workoutAtom);

  const [allTime, setAllTime] = useState<string>("");

  const onChangeAllTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllTime(e.target.value);
    setWorkout({
      ...workout,
      allTime,
    });
  };

  const onClickAddBtn = () => {
    setCount((prev) => prev + 1);
    setRows([...rows, count]);
  };

  return (
    <>
      <div className="exercise">
        <h2>운동</h2>
        <div className="all-time">
          총 시간 :
          <input type="text" onChange={onChangeAllTime} value={allTime} />
        </div>
        <table>
          <tbody>
            <tr>
              <th>운동 명</th>
              <th>중량</th>
              <th>횟수</th>
              <th>세트 수</th>
            </tr>
            {rows.map((row) => (
              <tr key={row}>
                <td>
                  <input type="text" className="inputText" />
                </td>
                <td>
                  <input type="text" className="inputText" />
                </td>
                <td>
                  <input type="text" className="inputText" />
                </td>
                <td>
                  <input type="text" className="inputText" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="addBtn">
        <button type="button" onClick={onClickAddBtn}>
          +
        </button>
      </div>
    </>
  );
};

export default Exercise;
