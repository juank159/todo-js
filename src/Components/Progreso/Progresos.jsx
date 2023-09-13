import React, { useContext } from "react";
import { todoContext } from "../../Context/TodoProvider";
import "./Progresos.css";

export function Progresos() {
  const { todos } = useContext(todoContext);
  // Calcula la cantidad de objetos con 'completed' igual a true
  const completedCount = todos.filter((item) => item.completed).length;

  // Calcula el progreso como un porcentaje
  const progress = (completedCount / todos.length) * 100;
  const check = todos.length <= 0;
  return (
    <div>
      {!check && (
        <div className="circulo">
          <div className="circular-progress-container">
            <svg className="circular-progress-circle">
              <circle cx="50%" cy="50%" r="40%" />
              <circle
                className="circular-progress-bar"
                cx="50%"
                cy="50%"
                r="40%"
                style={{ "--percentage": progress / 100 }}
              />
            </svg>
            <span className="circular-progress-text">{`${progress.toFixed(
              0
            )}%`}</span>
          </div>
        </div>
      )}
    </div>
  );
}
