import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store.js";


document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<h1>ToDo App</h1>, root);
});

window.store = configureStore;
