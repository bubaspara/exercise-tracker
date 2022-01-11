import React, { useEffect, useState } from "react";
import ExercisesList from "../components/ExercisesList";
import BaseFilter from "../components/BaseFilter";

export default function HomePage() {
  const [exercises, setExercises] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  const updateFilterHandler = (filter) => {
    setCurrentFilter(filter);
  };

  useEffect(() => {
    async function fetchExercises() {
      try {
        const response = await fetch(`http://localhost:3111/exercises`);
        const fetchedExercises = await response.json();
        setExercises(fetchedExercises);
      } catch (error) {
        console.error(error);
      }
    }
    fetchExercises();
  }, []);

  const deleteExerciseHandler = (id) => {
    const patchedExercises = exercises.filter((exercise) => exercise.id !== id);
    setExercises(patchedExercises);
  };

  const toggleExerciseCompletionHandler = (id) => {
    const clonedExercises = [...exercises];
    const clickedExerciseIndex = clonedExercises.findIndex(
      (exercise) => exercise.id === id
    );
    const clickedExercise = clonedExercises[clickedExerciseIndex];

    clickedExercise.complete = !clickedExercise.complete;

    setExercises(clonedExercises);
  };

  let jsx = (
    <ExercisesList
      exercises={exercises}
      onDeleteExercise={deleteExerciseHandler}
      onToggleExercise={toggleExerciseCompletionHandler}
    />
  );

  if (currentFilter === "completed") {
    jsx = (
      <ExercisesList
        exercises={exercises.filter((exercise) => exercise.complete)}
        onDeleteExercise={deleteExerciseHandler}
        onToggleExercise={toggleExerciseCompletionHandler}
      />
    );
  } else if (currentFilter === "pending") {
    jsx = (
      <ExercisesList
        exercises={exercises.filter((exercise) => !exercise.complete)}
        onDeleteExercise={deleteExerciseHandler}
        onToggleExercise={toggleExerciseCompletionHandler}
      />
    );
  }

  return (
    <div>
      <BaseFilter
        onUpdate={updateFilterHandler}
        currentFilter={currentFilter}
      />
      {jsx}
    </div>
  );
}
