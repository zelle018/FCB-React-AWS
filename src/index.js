import React from "react";

import ReactDOM from "react-dom";

import "./index.css";

function App() {

	return (

		<div className="app">

			<header className="app-header">

				<h1>My Amazing ToDo-List App</h1>

				<p>The most simple and amazing todo-list React App</p>

			</header>

		</div>

	);
}

ReactDOM.render(<App/>, document.getElementById("root"));