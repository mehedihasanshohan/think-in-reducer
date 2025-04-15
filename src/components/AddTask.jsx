import React, { useState } from 'react';


const AddTask = (onAdd) => {

  const [text, setText] =useState('');

  const handleChangeText = (e) => {
    setText(e.target.value);
          }


  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        className="px-4 py-2 border ml-8 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={()=> {
          setText("");
          onAdd(text);
        }}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Add
      </button>
    </>
  );
};

export default AddTask;
