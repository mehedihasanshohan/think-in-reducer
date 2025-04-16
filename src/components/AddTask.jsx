// import React, { useState } from 'react';


// const AddTask = ({onAdd}) => {

//   const [text, setText] =useState('');

//   // eslint-disable-next-line no-unused-vars
//   const handleChangeText = (e) => {
//     setText(e.target.value);
//           };


//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Add task"
//         onChange={handleChangeText}
//         className="px-4 py-2 border ml-8 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <button
//         onClick={()=> {
//           setText('');
//           onAdd(text);
//         }}
//         className="mt-2 px-4 py-2 ml-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
//       >
//         Add
//       </button>
//     </>
//   );
// };

// export default AddTask;
import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [bounce, setBounce] = useState(false);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (text.trim() === '') return;

    onAdd(text);
    setText('');

    // Add bounce animation
    setBounce(true);
    setTimeout(() => setBounce(false), 300); // Remove bounce after 300ms
  };

  return (
    <div className="flex items-center ml-8 gap-2">
      <input
        type="text"
        value={text}
        placeholder="Add task"
        onChange={handleChangeText}
        className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAdd}
        className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform duration-300 ${
          bounce ? 'scale-110' : ''
        }`}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
