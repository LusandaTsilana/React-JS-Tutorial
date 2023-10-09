import React, { useEffect, useState } from "react";
import "./App.css";
import { Employee } from "./employee.js";
import {} from "./state.js";
import myImage from "./clown.jpg";
import { Task } from "./task.js";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";

import { Section } from "./text";

const title = <h3>Welcome to my Youtube Channel!</h3>;

const Button = () => {
  return (
    <div>
      <button className="button">Subscribe</button>
    </div>
  );
};

const AgeButton = () => {
  return (
    <div>
      <button className="agebutton">Submit</button>
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      <h1> {props.name}</h1>
      <h1> {props.age}</h1>
      <h1> {props.gender}</h1>
    </div>
  );
};

function App() {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber(number + 2);
  };

  const [digit, setDigit] = useState("");

  //the below can be useful for taking users name from a login and using elsewhere in the app
  //to create familiarity for the user, better experiecnce

  const multipleDigit = (event) => {
    setDigit(event.target.value);
  };

  const [userAge, setUserAge] = useState(""); // State variable to store user's age

  const handleInput = (event) => {
    setUserAge(event.target.value); // Update the age when the user types
  };

  const checkAgesystem = () => {
    !userAge
      ? alert("Field is required. Please input your age")
      : userAge < 0
      ? alert("Invalid age. Age cannot be < 0. Please input your age")
      : userAge >= 18
      ? alert("Good! You have a pass.")
      : alert("You are under-age");
  };

  const snacks = [
    { name: "biltong :", type: "healthy" },
    { name: "chips :", type: "unhealthy" },
    { name: "chocolate :", type: "depends. haha!" },
  ];

  const Snacks = (props) => {
    return (
      <div>
        <p>
          {props.name}
          {props.type}
        </p>
      </div>
    );
  };

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
  ];

  const Planets = ({ name, isGasPlanet }) => {
    const backgroundColor = isGasPlanet ? "green" : "red";

    return (
      <div style={{ backgroundColor }} className="planet">
        {name}
      </div>
    );
  };

  const [showImage, setshowImage] = useState(false);

  const [showText, setshowText] = useState(false);

  const [textColor, setTextColor] = useState("blue");

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 2);
  };

  const decrease = () => {
    setCount(count - 2);
  };

  const zero = () => {
    setCount(0);
  };

  const result = (event) => {
    setCount(event.target.value);
  };

  const [todo, setTodo] = useState([]);

  const [newTask, setNewtask] = useState();

  //could be useful when user adds exercises to workout app
  const addtask = () => {
    const task = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodo([...todo, task]);
  };

  const handleChange = (event) => {
    setNewtask(event.target.value);
  };

  const deletetask = (id) => {
    setTodo(todo.filter((task) => task.id !== id));
  };

  const complete = (id) => {
    setTodo(
      todo.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  const [catFact, setCatFact] = useState("");

  const catpush = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
    console.log("fact loaded");
  };

  // below the useEffect is used to monitor the rendering of the function
  useEffect(() => {
    //catpush();
    console.log("page loaded");
  }, []);

  const [createdExcuse, setCreatedExcuse] = useState("");
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (response) => {
        setCreatedExcuse(response.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      {/* under normal circumstance, this app.js will only have the router
      declarations and paths */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>

      <nav>
        <div className="nav-list">
          <ul>
            <li href="/">Home</li>
            <li href="/About">About</li>
          </ul>
        </div>
      </nav>

      {title}
      <Button />
      <User name="Stacy" age={17} gender="female" />
      <User name="Billy" age={10} gender="male" />
      <User name="Candice" age={75} gender="female" />
      <br />
      <div className="employee">
        <Employee occupation="engineer" salary="R35 000" company="navy" />
        <Employee
          occupation="doctor"
          salary="R35 000"
          company="Tygerberg Hospital"
        />
        <Employee
          occupation="teacher"
          salary="R30 000"
          company="Sunny Primary School"
        />
      </div>
      {/* Ways of writing conditional statements without using if-else */}
      <label>Please complete the below:</label>
      <input
        name="age"
        type="text"
        placeholder="age"
        onChange={handleInput}
      ></input>
      <div onClick={checkAgesystem}>
        <AgeButton />
      </div>
      <div className="food">
        {snacks.map((snack, key) => {
          return <Snacks key={key} name={snack.name} type={snack.type} />;
        })}
      </div>
      <div className="planets">
        {planets.map((planet, key) => {
          return (
            <Planets
              key={key}
              name={planet.name}
              isGasPlanet={planet.isGasPlanet}
            />
          );
        })}
      </div>
      <div>
        {number} <br />
        <button onClick={increaseNumber}>counter</button>
      </div>
      <div className="multiples">
        <label>
          Please input a digit
          <input type="text" id="input" onChange={multipleDigit} />
        </label>
        {digit}
      </div>
      <div>{showImage && <img src={myImage} alt="Clown" id="Clown" />}</div>
      <button
        onClick={() => {
          setshowImage(!showImage);
        }}
        id="scary-button"
      >
        Peek-Or-Boo
      </button>
      <h1 style={{ color: textColor }}>Hey!!</h1>
      <button
        onClick={() => {
          setTextColor(textColor === "blue" ? "red" : "blue");
        }}
      >
        Click to change color
      </button>
      <br />
      <div className="activity">
        <h1>Activity ↓ </h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={zero}>Set to Zero</button>
        <p className="count" onChange={result}>
          {count}
        </p>
      </div>
      <div className="CRUD">
        <div className="addtask">
          <h2> To do list </h2>
          <input onChange={handleChange} />
          <button onClick={addtask}>Add Task</button>

          <div className="list">
            {todo.map((task, key) => {
              return (
                <Task
                  key={key}
                  taskName={task.taskName}
                  id={task.id}
                  completed={task.completed}
                  deletetask={deletetask}
                  complete={complete}
                />
              );
            })}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setshowText(!showText);
        }}
      >
        ShowText
      </button>
      {showText && <Section />}
      <div>
        <button onClick={catpush}>Cat Fact</button>
        <p> {catFact}</p>
      </div>
      <div className="excuses">
        <h1>Generate an excuse</h1>
        <button onClick={() => fetchExcuse("party")}>Party</button>
        <button onClick={() => fetchExcuse("family")}>Family</button>
        <button onClick={() => fetchExcuse("office")}>Office</button>

        <p>{createdExcuse}</p>
      </div>
    </div>
  );
}

export default App;
