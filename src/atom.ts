import { atom } from "recoil";

export const workoutAtom = atom({
  key: "workoutAtom",
  default: {
    meal: {},
    allTime: "",
    exercise: [],
  },
});
