import React from "react";
import "./BaseFilter.css";

export default function BaseFilter({ onUpdate, currentFilter }) {
  return (
    <nav className="filter-nav">
      <button
        onClick={() => onUpdate("all")}
        className={currentFilter === "all" ? "active" : ""}
      >
        View All
      </button>
      <button
        onClick={() => onUpdate("completed")}
        className={currentFilter === "completed" ? "active" : ""}
      >
        Completed
      </button>
      <button
        onClick={() => onUpdate("pending")}
        className={currentFilter === "pending" ? "active" : ""}
      >
        Pending
      </button>
    </nav>
  );
}
