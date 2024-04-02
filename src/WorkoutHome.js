import { Link } from "react-router-dom";
import "./workout.css";
import fit from "./fit";
import { useContext } from "react";
import { FitnessItems } from "./Context";

function WorkoutHome() {
  const fitdata = fit;

  const {
    minutes,

    calories,

    workout,
  } = useContext(FitnessItems);

  return (
    <div className="workoutcontainer">
      <div className="workoutdone">
        <div className="workoutview">
          <h2> {workout} </h2>
          <p> WORKOUT </p>
        </div>

        <div className="workoutview">
          <h2> {calories} </h2>
          <p> KCAL </p>
        </div>

        <div className="workoutview">
          <h2> {minutes} </h2>
          <p> MINUTE </p>
        </div>
      </div>

      <section>
        {fitdata.map((data) => (
          <div className="workouttemplet" key={data.id}>
            <img
              className="bg"
              src={data.bg}
              alt="img"
              width="500px"
              height="250px"
            />

            <Link to={`/workout/${data.id}`}>
              <span className="temp-h1">
                <h1>{data.title}</h1>
              </span>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default WorkoutHome;
