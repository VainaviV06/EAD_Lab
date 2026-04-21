import React from "react";
import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Student Profiles</h1>

      <div className="card-container">
        <StudentCard
          name="Revanth"
          branch="CSE"
          year="3rd Year"
          image="https://via.placeholder.com/150"
        />

        <StudentCard
          name="Vainavi"
          branch="IT"
          year="2nd Year"
          image="https://via.placeholder.com/150"
        />

        <StudentCard
          name="Sadhika"
          branch="ECE"
          year="4th Year"
          image="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
}

export default App;