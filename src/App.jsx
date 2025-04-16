import { useReducer } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import taskReducer from './reducers/taskReducer';

function App() {
  // const initialTasks = [
  //   { id: 0, text: 'Html, CSS, JavaScript, React', done: true },
  //   { id: 1, text: 'Reactive Accelerator Batch 2', done: false },
  //   { id: 2, text: 'Programming Hero', done: false },
  //   { id: 3, text: 'Programming Hero Restart', done: false },
  // ];
  const initialTasks = [
    { id: 0, text: 'Understand the concept of state management in React using useReducer', done: true },
    { id: 2, text: 'Learn the flow of dispatching actions and updating state with useReducer', done: false },
    { id: 3, text: 'Refactor a to-do list app using useReducer to manage tasks state', done: false },
    { id: 4, text: 'Master different actions like "added", "changed", "deleted" in useReducer', done: false },
    { id: 5, text: 'Practice adding new tasks, editing tasks, and deleting tasks using useReducer', done: false },
  ];

  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce(
      (prev, current) => (prev && prev.id > current.id ? prev : current.id),
      0
    );
    return maxId + 1;
  };

  const handleAddTask = (text) => {
    dispatch({ type: 'added', text, id: getNextId(tasks) });
  };

  const handleChangeTask = (task) => {
    dispatch({ type: 'changed', task });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({ type: 'deleted', id: taskId });
  };

  // 🧊 Full-screen glassy background
  const appStyle = {
    height: '100vh',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)', // DARK gradient
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const glassCard = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    width: '100%',
    padding: '2rem',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    color: 'white',
  };

  const title = {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    textAlign: 'center',
    color: '#00ffff', // neon cyan
    textShadow: '0 0 8px #00ffff',
  };

  const subtitle = {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#c0f0ff',
  };

  const shape1 = {
    position: 'absolute',
    width: '400px',
    height: '400px',
    background: 'rgba(0, 255, 255, 0.2)',
    borderRadius: '50%',
    filter: 'blur(100px)',
    top: '-100px',
    left: '-100px',
    animation: 'float1 12s infinite ease-in-out',
  };

  const shape2 = {
    position: 'absolute',
    width: '300px',
    height: '300px',
    background: 'rgba(0, 255, 180, 0.15)',
    borderRadius: '50%',
    filter: 'blur(80px)',
    bottom: '-80px',
    right: '-80px',
    animation: 'float2 14s infinite ease-in-out',
  };

  return (
    <div style={appStyle}>
      {/* Animated blurred background shapes */}
      <div style={shape1}></div>
      <div style={shape2}></div>

      {/* Glass card */}
      <div style={glassCard}>
        <h1 style={title}>🚀 Task Manager</h1>
        <h2 style={subtitle}>Built with React + useReducer</h2>

        <AddTask onAdd={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>

      {/* Keyframe styles inside a <style> tag */}
      <style>
        {`
          @keyframes float1 {
            0% { transform: translate(0, 0); }
            50% { transform: translate(50px, 50px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes float2 {
            0% { transform: translate(0, 0); }
            50% { transform: translate(-30px, -60px); }
            100% { transform: translate(0, 0); }
          }
        `}
      </style>
    </div>
  );
}

export default App;
