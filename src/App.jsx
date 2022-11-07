import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Counter from "./Components/Counter";
import ReducerCounter from "./Components/ReducerCounter";
import Heading from "./Components/Heading";
import "./App.css";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Helmet
          title={"A counter app"}
          description="Counter is a beautiful app"
        />
        <Heading />
        <NavBar />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/ReducerCounter" element={<ReducerCounter />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
