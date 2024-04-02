import React from "react";
import "./workout.css";
import { useNavigate, useParams } from "react-router-dom";
import fit from "./fit";
import { IoArrowBackOutline } from "react-icons/io5";

function WorkoutList() {
  const fitdata = fit;
  const { id } = useParams();
  const workout = fitdata.find((data) => data.id.toString() === id);

  const navigate = useNavigate();

  const handleNavivation = () => {
    navigate(`/workoutpage/${workout.id}`);
  };
  const handleBack = () => {
    navigate("/workoutHome");
  };

  return (
    <div className="workoutlist-container">
      <IoArrowBackOutline className="homeback" onClick={handleBack} />
      <img
        src={workout.bg}
        height="300rem"
        width="90%"
        className="bg-list"
        alt="img"
      />

      <ul className="workoutlist">
        {workout.excersises.map((data1) => (
          <li key={data1.id} className="boxlist">
            {data1.name}
          </li>
        ))}
        <button className="startbtn" onClick={handleNavivation}>
          Start
        </button>
      </ul>
    </div>
  );
}

export default WorkoutList;
