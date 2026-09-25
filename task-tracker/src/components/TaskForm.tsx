import { useRef } from 'react';

type PropType = {
	handleAddTodo : (title : string) => void
}

const TaskForm = ({ handleAddTodo } : PropType) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e : React.SubmitEvent<HTMLFormElement>) : void => {
		e.preventDefault();
		if(inputRef.current) {
			const title = inputRef.current.value;
			inputRef.current.value = '';
			handleAddTodo(title);
		}
	}

	return (
		<form 
			className="form"
			onSubmit={ handleSubmit }
		>
			<input 
				type="text" 
				className="form-input" 
				ref={ inputRef }
			/>
			<button className="form-button">Add task!</button>
		</form>
	)
};

export default TaskForm;