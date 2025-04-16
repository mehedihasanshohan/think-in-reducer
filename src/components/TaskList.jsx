import Task from './Task';

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <Task
            key={task.id}
            task={task}
            onChangeTask={onChangeTask}
            onDeleteTask={onDeleteTask}/>
      ))}
    </ul>
  );
};

export default TaskList;
