import React, { useState } from "react";
import "./App.css";

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

const Employee = (props) => {
  return (
    <div>
      <p> {props.occupation}</p>
      <p> {props.salary} </p>
      <p> {props.company}</p>
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
    { snack: "biltong :", type: "healthy" },
    { snack: "chips :", type: "unhealthy" },
    { snack: "chocolate :", type: "depends. haha!" },
  ];

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
      <input name="age" onChange={handleInput}></input>
      <div onClick={checkAgesystem}>
        <AgeButton />
      </div>

      {snacks.map((treat, key) => {
        return (
          <p key={key}>
            {" "}
            {treat.snack} {treat.type}
          </p>
        );
      })}
    </div>
  );
}

export default App;
