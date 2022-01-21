import Task from "./Task";

function TasksList() {
	const taskItemsList = [
		"Follow Edukasyon.ph on Facebook.",
		"Follow AWS Siklab Pilipinas on Facebook.",
		"Follow Zuitt Coding Bootcamps ph on Facebook."
	];
	return (
		<div>
			<input className="task-input"/>	
			<ul>
				{taskItemsList.map((task, index) => {
					console.log(task, index);
					return <Task key={index} taskName={task}/>
				})}
			</ul>
		</div>
	);
}

export default TasksList;