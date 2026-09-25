import { initialTasks } from "./data/tasks";
import { useState } from 'react';
import type { TaskType } from "./interfaces/tasks";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
	const [tasks, setTasks] = useState<TaskType[]>(initialTasks);

	const handleTodoClick = (id : number) : void => {
		setTasks(prev => {
			return prev.map(task => {
				if(task.id === id) {
					return { ...task, completed : !task.completed };
				}
				return task;
			});
		});
	}

	const handleAddTodo = (title : string) : void => {
		const newTask : TaskType = {
			id : tasks.length + 1,
			title,
			completed : false
		}

		setTasks(prev => [...prev, newTask]);
	}

	return (
		<div className="app">
			<h1 className="title">Task Tracker</h1>
			<TaskForm 
				handleAddTodo={ handleAddTodo }
			/>
			<ul className="task-list">
				{
					tasks.map(task => {
						return <Task 
							key={ task.id }
							task={ task }
							handleTodoClick={ handleTodoClick }
						/>
					})
				}
			</ul>
		</div>
	);
}

export default App;