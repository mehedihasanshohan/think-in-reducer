import { useState } from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'


function App() {
  const initialTasks = [
    {id:0, text:"Html Css Javascript React", done: true},
    {id:1, text:"Reactive Accelator batch2", done: false},
    {id:2, text:"Programming Hero restart", done: false},
  ]

  const [tasks, setTasks] = useState(initialTasks)

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
        prev && prev.id > current.id ? prev : current.id, 0
    );

    return maxId + 1;
};

// handlers
const handleAddTask = (text) => {
    setTasks([
        ...tasks,
        {
            id: getNextId(tasks),
            text: text,
            done: false,
        },
    ]);
};

const handleChangeTask = (task) => {
    const nextTasks = tasks.map((t) => {
        if (t.id === task.id) {
            return task;
        } else {
            return t;
        }
    });

    setTasks(nextTasks);
};

const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
};


  return (
   <>
    <h2 className='text-rose-800 font-bold text-2xl text-center'>React Reducer</h2>
      <AddTask onAdd={handleAddTask}></AddTask>

      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}></TaskList>

   </>
  )
}

export default App
