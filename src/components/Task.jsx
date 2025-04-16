import { useState } from "react";

const Task = ({ task, onChangeTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDeleteTask(task.id);
    }, 300);
  };

  return (
    <li
      className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
        isDeleting ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100'
      }`}
    >
      <div className="flex items-center gap-3 w-full">
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) =>
            onChangeTask({
              ...task,
              done: e.target.checked,
            })
          }
          className="form-checkbox text-blue-500 focus:ring-blue-500"
        />

        {isEditing ? (
          <>
            <input
              value={task.text}
              onChange={(e) =>
                onChangeTask({
                  ...task,
                  text: e.target.value,
                })
              }
              type="text"
              className="bg-gray-100 text-rose-600 px-2 py-1 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={() => setIsEditing(false)}
              className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <span
              className={`text-md font-medium ${
                task.done ? 'line-through text-gray-400' : ''
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Edit
            </button>
          </>
        )}

        <button
          onClick={handleDelete}
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
