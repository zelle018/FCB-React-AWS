import { useState } from "react";
import Task from "./Task";

function TasksList() {
	const [taskItemsList, setTaskItemsList] = useState([
		"Follow Edukasyon.ph on Facebook.",
		"Follow AWS Siklab Pilipinas on Facebook.",
		"Follow Zuitt Coding Bootcamps ph on Facebook."
	]);

	const [taskValue, setTaskValue] = useState("");

	const inputChangeValue = (e) => {
		setTaskValue(e.target.value)
	};

	const addTaskHandler = () => {
		setTaskItemsList([taskValue, ...taskItemsList]);
		setTaskValue("");
	};

	return (
		<div>
			<input 
				className="task-input" 
				placeholder="Create a new task" 
				onChange={inputChangeValue}
				onBlur={addTaskHandler}
				value={taskValue}
			/>	
			<ul>
				{taskItemsList.map((task, index) => {
					return <Task key={index} taskName={task}/>
				})}
			</ul>
		</div>
	);
}

export default TasksList;