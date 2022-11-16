import React, { useState, useEffect } from "react";
import Dates from "../../components/Dates";

// import { workoutAtom } from "../../atom";

export interface IYearMonth {
  id: number;
  year: number;
  month: number;
}

const Home = () => {
  const [yearMonths, setyearMonths] = useState<IYearMonth[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/yearMonth")
      .then((res) => res.json())
      .then((data) => {
        setyearMonths(data);
      });
  }, []);

  return (
    <div>
      {yearMonths.map((yearMonth) => (
        <div key={yearMonth.id}>
          <div className="year-month">
            {yearMonth.year}년 {yearMonth.month}월
          </div>
          <div className="dates">
            <Dates yearMonth={yearMonth} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
