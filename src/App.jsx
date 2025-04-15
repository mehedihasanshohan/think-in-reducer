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



  return (
   <>
    <h2 className='text-rose-800 font-bold text-2xl text-center'>React Reducer</h2>
      <AddTask></AddTask>
      <TaskList tasks={tasks}></TaskList>

   </>
  )
}

export default App
