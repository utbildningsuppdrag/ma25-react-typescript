import type { TaskType } from "../interfaces/tasks";

type PropType = {
	task : TaskType;
	handleTodoClick : (id : number) => void
}

const Task = ({ task, handleTodoClick } : PropType) => {
	return (
		<li 
			className={ task.completed ? 'task task-completed' : 'task'}
			onClick={ () => handleTodoClick(task.id) }
		>
			{ task.title }
		</li>
	);
};

export default Task;
