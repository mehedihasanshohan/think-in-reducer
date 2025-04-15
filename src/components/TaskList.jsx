import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
