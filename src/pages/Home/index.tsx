import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { workoutAtom } from "../../atom";

const Home = () => {
  const [workouts, setWorkouts] = useRecoilState(workoutAtom);

  return (
    <div>
      <h1>운동 일지</h1>
      <button>
        <Link to="/newpost">추가하기</Link>
      </button>
      <ol>
        {workouts.map((workout) => (
          <li key={workout.id}>
            <Link to={{ pathname: `/post/${workout.id}` }}>
              {workout.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Home;
