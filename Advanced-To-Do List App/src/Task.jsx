import PropTypes from "prop-types";

const Task = ({ task, completeTask, removeTask, moveTaskUp, moveTaskDown }) => {
  return (
    <li
      className={`task ${
        task.complete ? "line-through" : ""
      } flex justify-between items-center p-4 border rounded-md`}
    >
      {task.text}
      <div className="space-x-2">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => completeTask(task.id)}
        >
          {task.complete ? "Undo" : "Complete"}
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => removeTask(task.id)}
        >
          Remove
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => moveTaskUp(task.id)}
        >
          Up
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => moveTaskDown(task.id)}
        >
          Down
        </button>
      </div>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    complete: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  completeTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  moveTaskUp: PropTypes.func.isRequired,
  moveTaskDown: PropTypes.func.isRequired,
};

export default Task;
