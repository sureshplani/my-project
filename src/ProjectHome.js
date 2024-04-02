import React, { useState } from "react";
import "./projecthome.css";
import { LuArrowDownRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


function ProjectHome() {
  const Skills = [
    {
      id: 1,
      name: "Java",
      sum: [
        { id: 1, s1: "Very strong knowledge on Oops concepts." },
        { id: 2, s1: "Having good knowledge in Constructors and Interface." },
        { id: 3, s1: "Good knowledge in Collections." },
        { id: 4, s1: "Having good knowledge in Exception Handling." },
        { id: 5, s1: "Having good knowledge in Spring Framework." },
      ],
    },
    {
      id: 2,
      name: "HTML & CSS",
      sum: [
        { id: 1, s1: "Knowledge of the HTML language with CSS." },
        { id: 2, s1: "Javascript knowledge." },
        { id: 3, s1: "Basics of the back-end technologies like API’s,databases such as MySQL.", },
        {id: 4,s1: "Basics of graph designing skills for making beautifuldesigns.",},
        {id: 5, s1: "Knowledge of frameworks and libraries such asBootstrap.", },
      ],
    },
    {
      id: 3,
      name: "Mysql",
      sum: [
        { id: 1, s1: "Good Knowledge in writing SQL queries" },
        { id: 2, s1: "Good knowledge in DDL, DML, TCL, DCL and DQL." },
        { id: 3, s1: "Good knowledge in Joins and its Types." },
        { id: 4, s1: "Having good knowledge in Constructors and Interface." },
        { id: 5, s1: "Having good knowledge in Constructors and Interface." },
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const current = Skills[index];
  const navigate = useNavigate();

  const handleNext = () => {
    const next = index === Skills.length - 1 ? 0 : index + 1;
    setIndex(next);
  };

  const handlePrev = () => {
    const Prev = index === 0 ? Skills.length - 1 : index - 1;
    setIndex(Prev);
  };

  return (
    <div className="project-home">

      <div className="project-bg-img"></div>

      <article className="article-p">

        <p> 
            I would like to turn out to be software professionalwhere, I can
            work as a team member and to secure aposition where I can
            efficiently contribute my skills andabilities to the growth of the
            organization and make myprofessional career.
         </p>

      </article>

      <div className="skills-temp">
       
       <h2>Skills</h2>
 
       </div>
 
      <div className="skills-logo">
      <img src="java.png" width="100px" height="100px" alt="java" />
      <img src="html.png" width="100px" height="100px" alt="html" />
      <img src="css.png" width="100px" height="100px" alt="css" />
      <img src="js.png" width="100px" height="100px" alt="js" />
      <img src="mysql.png" width="100px" height="100px" alt="mysql" />
      <img src="logo192.png" width="100px" height="100px" alt="react" />
      </div>

  <div className="skills-temp">
       
      <h2>Summary</h2>

   </div>

      <div className="skills-container" >
        
        <button onClick={handlePrev}>
          <IoIosArrowBack />
         </button>
        
        <ul>

          <h1> {current.name} </h1>
          {current.sum.map((data) => (
            <li key={data.id}>{data.s1}</li>
          ))}

        </ul>

        <button onClick={handleNext}>
          <IoIosArrowForward />
         </button>

      </div>

      <section className="project-home-box">
        <div className="project-home-bg">
          <h1>01</h1>
          <h3>Home</h3>
          <img
            className="project-home-pic"
            src="https://i.pinimg.com/236x/11/4f/28/114f281cedf36b0b45a330169a7c59d1.jpg"
            width="100px"
            height="100px"
            alt="img"
          />
          <LuArrowDownRight
            className="project-home-box-icon"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="project-home-bg">
          <h1>02</h1>
          <h3>Color Change Project</h3>
          <img
            className="project-home-pic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw--P2vlRtBQXrl7SqEqYJQDXDDbA-bNzsaA&usqp=CAU"
            width="100px"
            height="100px"
            alt="img"
          />
          <LuArrowDownRight
            className="project-home-box-icon"
            onClick={() => navigate("/color")}
          />
        </div>
        <div className="project-home-bg">
          <h1>03</h1>
          <h3>Workout Home</h3>
          <img
            className="project-home-pic"
            src="https://image.cdn2.seaart.ai/2023-09-28/18437320834328581/66f261411b491dc979c9c64acd5e37a0d900c952_high.webp"
            width="100px"
            height="100px"
            alt="img"
          />
          <LuArrowDownRight
            className="project-home-box-icon"
            onClick={() => navigate("/workoutHome")}
          />
        </div>
      </section>
    </div>
  );
}

export default ProjectHome;
