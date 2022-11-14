import { atom } from "recoil";

export const workoutAtom = atom({
  key: "workoutAtom",
  default: [
    {
      id: 0,
      title: "2022년 11월 13일 일요일",
      meal: "닭가슴살",
      exercisePart: "하체, 어깨, 이두, 유산소",
      exerciseSet: "",
      exerciseTime: "6시 40분 ~ 8시 10분",
    },
  ],
});
