import React from "react";
import SubReddit from "./components/SubRedditPage/SubReddit";
import Navbar from "./Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <SubReddit />
    </div>
  );
}
