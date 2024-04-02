import React, { useContext, useEffect, useState } from "react";
import "./workout.css";
import { useNavigate, useParams } from "react-router-dom";
import fit from "./fit";
import { IoArrowBackOutline } from "react-icons/io5";
import useSound from "use-sound";
import { FitnessItems } from "./Context";
import { CiPause1 } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";

function Workout() {
  const sound = "/Whistel-sound.mp3";
  // const [count, setCount] = useState(60)
  const [running, setRunning] = useState(false);
  const [playSound] = useSound(sound);

  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    setWorkout,
    workout,
  } = useContext(FitnessItems);

  // const [next, setNext] = useState(0)
  //  useEffect(
  //       ()=> {
  //           let time
  //           if(running) {
  //          time = setInterval(
  //              () => {
  //            if(count <= 0){
  //              clearInterval(time)
  //              setRunning(false)
  //                playSound()
  //           }
  //              setCount(count-1)

  //             }, 1000)
  //           }

  //          return()=> clearInterval(time)
  //         },[count, running, playSound]
  //         )

  //  const start = () =>{
  //    setRunning(!running)
  // }

  // const reset = () =>{
  //   setCount(60)
  //   setRunning(false)
  // }

  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  const fitdata = fit;

  const { id } = useParams();

  const indexid = new URLSearchParams(window.location.search);
  const userid = indexid.get("indexid");

  console.log("id", userid);

  const workouts = fitdata.find((data) => data.id.toString() === id);
  const excersise = workouts.excersises;
  const current = excersise[index];

  const [min, setMin] = useState(current?.min);

  useEffect(() => {
    let time;

    if (running) {
      time = setTimeout(() => {
        if (min > 0) {
          setMin(min - 1);
        } else {
          setRunning(false);
          playSound();
        }
      }, 1000);
    }
    return () => clearTimeout(time);
  }, [min, running, playSound]);

  const handleMinDec = () => {
    setRunning(!running);
  };

  const handleBack = () => {
    navigate(`/workout/${workouts.id}`);
  };

  useEffect(() => {
    setMin(current?.min);
  }, [current]);
  // console.log("index",  index );

  useEffect(() => {
    if (userid && userid > 0) {
      setIndex(Number(userid));
    }
  }, [userid]);

  const handleNext = () => {
    const isLastSlide = index === excersise.length - 1;
    const go = isLastSlide ? 0 : index + 1;
    setIndex(go);
    setRunning(false);
  };

  console.log("index1", index);
  const handlePrev = () => {
    const isFirstSlide = index === 0;
    const back = isFirstSlide ? excersise.length - 1 : index - 1;
    setIndex(back);
    setRunning(false);
  };

  return (
    <div className="workout">
      <IoArrowBackOutline className="backicon" onClick={handleBack} />

      <section className="gifcontainer">
        <img
          src={current?.gif}
          alt="img"
          width="250"
          height="250"
          className="workoutgif"
        />

        <h2> {current?.name}</h2>

        {current?.sets ? <h2> x{current?.sets} </h2> : <h2>{min} sec</h2>}

        {current?.min && (
          <button className="playbtn" onClick={handleMinDec}>
            {!running ? (
              <CiPlay1 className="playicon" />
            ) : (
              <CiPause1 className="playicon" />
            )}
          </button>
        )}
      </section>

      <section className="donebtn-container">
        {index + 1 >= excersise.length ? (
          <button
            className="donebtn"
            onClick={() => {
              navigate("/workoutHome");
            }}
          >
            DONE
          </button>
        ) : (
          <button
            className="donebtn"
            onClick={() => {
              navigate(`/rest/${workouts.id}/${index}`);
              setCompleted([...completed, current?.name]);
              setIndex(indexid + 1);
              setWorkout(workout + 1);
              setMinutes(minutes + 2);
              setCalories(calories + 6);
              setRunning(false);
              setTimeout(() => {
                setIndex(index + 1);
              }, 0);
            }}
          >
            DONE
          </button>
        )}
      </section>
      <section className="gonext">
        <button className="btn3" onClick={handlePrev}>
          Previous
        </button>
        <button className="btn4" onClick={handleNext}>
          Next
        </button>
      </section>
    </div>
  );
}

export default Workout;
/* 
<section className='time'>

          <button className='btn1' onClick={start}>
            {!running ? "Start" : "Stop"}
          </button>

          <span className='timebox'>

             <p>
             {count >= 0 ? count : 0} 
             </p> 

           </span>

          <button className='btn2' onClick={reset}>
            Reset
          </button>

     </section>   */
