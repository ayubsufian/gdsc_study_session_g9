import { useState } from "react";
import Task from "./Task";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask !== "") {
      setTasks([...tasks, { text: newTask, complete: false, id: Date.now() }]);
      setNewTask("");
    }
  };

  const handleCompleteTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task,
      ),
    );
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleMoveTaskUp = (id) => {
    setTasks(
      tasks.map((task, i, arr) => {
        if (task.id === id && i > 0) {
          return arr[i - 1];
        } else if (i < arr.length - 1 && arr[i + 1].id === id) {
          return arr[i + 1];
        } else {
          return task;
        }
      }),
    );
  };

  const handleMoveTaskDown = (id) => {
    setTasks(
      tasks.map((task, i, arr) => {
        if (task.id === id && i < arr.length - 1) {
          return arr[i + 1];
        } else if (i > 0 && arr[i - 1].id === id) {
          return arr[i - 1];
        } else {
          return task;
        }
      }),
    );
  };

  return (
    <div className="p-10 bg-blue-200 min-h-screen">
      <label
        htmlFor="newTask"
        className="block text-sm font-medium text-gray-700"
      >
        New Task:
      </label>
      <input
        id="newTask"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
      <button
        onClick={handleAddTask}
        className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Task
      </button>
      <ul className="mt-5 space-y-4">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            completeTask={handleCompleteTask}
            removeTask={handleRemoveTask}
            moveTaskUp={handleMoveTaskUp}
            moveTaskDown={handleMoveTaskDown}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
