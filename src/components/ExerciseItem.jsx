import React from "react";
import { Link } from "react-router-dom";
import "./ExerciseItem.css";

export default function ExerciseItem({
  exercise,
  onDeleteExercise,
  onToggleExercise,
}) {
  const performExerciseDeletion = () => {
    fetch(`http://localhost:3111/exercises/${exercise.id}`, {
      method: "DELETE",
    })
      .then(() => {
        onDeleteExercise(exercise.id);
      })
      .catch((err) => console.error(err));
  };

  const performExerciseToggle = () => {
    fetch(`http://localhost:3111/exercises/${exercise.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ complete: !exercise.complete }),
    })
      .then(() => onToggleExercise(exercise.id))
      .catch((err) => console.error(err));
  };

  const classes = ["exercise"];
  if (exercise.complete) classes.push("complete");

  return (
    <div className={classes.join(" ")}>
      <div className="action">
        <h4>{exercise.title}</h4>
        <div className="buttons">
          <button onClick={performExerciseDeletion}>Delete</button>
          <Link to={`/exercises/${exercise.id}/edit`}>Edit</Link>
          <button onClick={performExerciseToggle}>Complete</button>
        </div>
      </div>
      <div className="details">
        <p>{exercise.details}</p>
      </div>
    </div>
  );
}
