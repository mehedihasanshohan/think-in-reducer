import { useReducer } from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'


function App() {
  const initialTasks = [
    {id:0, text:"Html Css Javascript React", done: true},
    {id:1, text:"Reactive Accelator batch2", done: false},
    {id:2, text:"Programming Hero", done: false},
    {id:3, text:"Programming Hero restart", done: false},
  ]

  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
        prev && prev.id > current.id ? prev : current.id, 0
    );

    return maxId + 1;
};

// handlers
const handleAddTask = (text) => {
  dispatch({
      type: "added",
      text,
      id: getNextId(tasks),
  });
};

const handleChangeTask = (task) => {
  dispatch({
      type: "changed",
      task,
  });
};


const handleDeleteTask = (taskId) => {
  dispatch({
      type: "deleted",
      id: taskId,
  });
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
