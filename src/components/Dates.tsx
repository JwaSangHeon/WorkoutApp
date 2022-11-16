import React, { useEffect, useState } from "react";

import { IYearMonth } from "../pages/Home/index";

interface IDate {
  id: number;
  year: number;
  month: number;
  date: number;
}

const Dates = ({ yearMonth }: any) => {
  const [dates, setDates] = useState<IDate[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/dates")
      .then((res) => res.json())
      .then((data) => {
        setDates(data);
      });
  }, []);
  return (
    <>
      {dates.map(
        (date) =>
          yearMonth.year === date.year &&
          date.month === yearMonth.month && <div key={date.id}>{date.date}</div>
      )}
    </>
  );
};

export default Dates;
