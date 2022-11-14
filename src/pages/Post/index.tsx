import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { workoutAtom } from "../../atom";
import { useRecoilState } from "recoil";

const Post = () => {
  const { id } = useParams();
  // console.log(Number(id));

  const [workouts, setWorkouts] = useRecoilState(workoutAtom);

  const matchPost = (id: number) => {
    return workouts.filter((workout) => workout.id === id);
  };

  const post = matchPost(Number(id))[0];

  return (
    <div>
      <h1>{post.title}</h1>
      <div>
        <span>먹었던 것 : </span>
        {post.meal}
      </div>
      <div>
        <span>운동부위 : </span>
        {post.exercisePart}
      </div>
      <div>
        <span>운동세트 : </span>
        {post.exerciseSet}
      </div>
      <div>
        <span>운동시간 : </span>
        {post.exerciseTime}
      </div>
    </div>
  );
};

export default Post;
