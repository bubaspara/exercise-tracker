import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditExercise() {
  const [exercise, setExercise] = useState({
    title: "",
    details: "",
  });

  const navigate = useNavigate();
  const params = useParams();

  const exerciseId = params.id;

  const handleExerciseUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3111/exercises/${exerciseId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exercise),
    })
      .then(() => navigate("/home"))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(`http://localhost:3111/exercises/${exerciseId}`)
      .then((res) => res.json())
      .then((data) =>
        setExercise({
          title: data.title,
          details: data.details,
        })
      )
      .catch((err) => console.error(err));
  }, [exerciseId]);

  return (
    <form onSubmit={handleExerciseUpdate}>
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
      <button>Update Exercise</button>
    </form>
  );
}
