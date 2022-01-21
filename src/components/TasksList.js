import { useState } from "react";
import Task from "./Task";

function TasksList() {
	const taskItemsList = [
		"Follow Edukasyon.ph on Facebook.",
		"Follow AWS Siklab Pilipinas on Facebook.",
		"Follow Zuitt Coding Bootcamps ph on Facebook."
	];

	const [taskValue, setTaskValue] = useState("Just another task");

	const inputChangeValue = (e) => {
		setTaskValue(e.target.value)
	};

	console.log("taskValue: ", taskValue);
	return (
		<div>
			<input 
				className="task-input" 
				placeholder="Create a new task" 
				 onChange={inputChangeValue}
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