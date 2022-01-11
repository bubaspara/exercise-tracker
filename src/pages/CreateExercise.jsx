import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateExercise.css";

export default function CreateExercise() {
  const [exercise, setExercise] = useState({
    title: "",
    details: "",
  });

  const navigate = useNavigate();

  const handleExerciseCreation = (e) => {
    e.preventDefault();
    const newExercise = {
      title: exercise.title,
      details: exercise.details,
      complete: false,
      id: Math.floor(Math.random() * 10000),
    };

    fetch(`http://localhost:3111/exercises`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExercise),
    })
      .then(() => navigate("/home"))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleExerciseCreation}>
      <label htmlFor="">Title</label>
      <input
        name="title"
        type="text"
        onChange={(e) =>
          setExercise({ ...exercise, [e.target.name]: e.target.value })
        }
        value={exercise.title}
      />
      <label htmlFor="">Details</label>
      <textarea
        name="details"
        cols="30"
        rows="10"
        value={exercise.details}
        onChange={(e) =>
          setExercise({ ...exercise, [e.target.name]: e.target.value })
        }
        required
      ></textarea>
      <button>Add Exercise</button>
    </form>
  );
}
