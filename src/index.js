import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

import MainApp from './App';


const rootNode = document.getElementById('root')

const root = ReactDOM.createRoot(rootNode);


	root.render(
		<React.StrictMode>
			<MainApp/>
		</React.StrictMode>
	);




// store.subscribe(() => {
// 	// let state = store.getState()
// 	_rerenderEntireTree(store)
// });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// console.log(p.postData);
