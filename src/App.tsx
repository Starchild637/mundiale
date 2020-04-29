import React from "react";
import "./App.css";
import { Home, Details } from "@screens";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Female from "@assets/images/female_avatar.jpeg";
import Male from "@assets/images/male_avatar.jpg";

function App() {
  const items = [
    { id: "A", name: "Alan Harper", job: "Doctor", image: Male, slots: 3 },
    {
      id: "B",
      name: "Bob Dylan",
      job: "Nobel Prize Winner",
      image: Male,
      slots: 3,
    },
    { id: "C", name: "Charlie Harper", job: "Musician", image: Male, slots: 3 },
    { id: "D", name: "Don Corleone", job: "Godfather", image: Male, slots: 3 },
    {
      id: "E",
      name: "Elvira",
      job: "Queen of Darkness",
      image: Female,
      slots: 3,
    },
    {
      id: "F",
      name: "Faith Fraser",
      job: "Movie Director",
      image: Female,
      slots: 3,
    },
    {
      id: "G",
      name: "Gwen Stefani",
      job: "Conqueror",
      image: Female,
      slots: 3,
    },
  ];
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/home" render={() => <Home items={items} />} />
          <Route path="/details" render={() => <Details />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
