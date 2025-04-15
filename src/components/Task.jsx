import { useState } from "react";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if(isEditing){
    taskContent = (
      <>
        <input
            value={task.text}
            // onChange={(e) => }
            type="text"
            className="bg-gray-200 border-2 border-pink-400 rounded-sm"></input>
        <button
            onClick={() => setIsEditing(false)}
            className="px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-900 ml-2"
        >Save</button>
      </>
    )
  }
  else{
    taskContent = (
      <>
        {task.text}
        <button  onClick={() => setIsEditing(true)}
                 className="px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-900 ml-2">Edit</button>
      </>
    )
  }


  return (
    <li className="flex items-center space-x-4 ml-8 p-3 rounded-lg ">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="form-checkbox text-blue-500 focus:ring-blue-500"
        />
       {taskContent}
        <button className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Delete
        </button>
      </label>
    </li>
  );
};

export default Task;
