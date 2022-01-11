import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateExercise from "./pages/CreateExercise";
import EditExercise from "./pages/EditExercise";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" exact element={<HomePage />}></Route>
        <Route
          path="/create-exercise"
          exact
          element={<CreateExercise />}
        ></Route>
        <Route
          path="/exercises/:id/edit"
          exact
          element={<EditExercise />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
