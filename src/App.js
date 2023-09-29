import React, { useState } from "react";
import "./App.css";
import { Employee } from "./employee.js";
import {} from "./state.js";

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

  return (
    <div className="App">
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
      <label>Please input your age:</label>
      <input name="age" type="text" onChange={handleInput}></input>
      <div onClick={checkAgesystem}>
        <AgeButton />
      </div>

      <div className="food">
        {snacks.map((snack, key) => {
          return <Snacks name={snack.name} type={snack.type} />;
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
    </div>
  );
}

export default App;
