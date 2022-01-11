import React from "react";
import ExerciseItem from "./ExerciseItem";
import "./ExercisesList.css";

export default function ExercisesList({
  exercises,
  onDeleteExercise,
  onToggleExercise,
}) {
  if (exercises.length === 0) return null;
  return (
    <div className="exercises-list">
      {exercises.map((exercise) => (
        <ExerciseItem
          key={exercise.id}
          exercise={exercise}
          onDeleteExercise={onDeleteExercise}
          onToggleExercise={onToggleExercise}
        />
      ))}
    </div>
  );
}
