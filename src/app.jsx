import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const rootRoute = createBrowserRouter([
	{
		path : "/",
		element : <HelloWorld/>,
	},
]);

function handleClick() {
	alert("Hello World");
}

function HelloWorld() {
	return (
		<React.Fragment>
			<div id ="content">
				<h1 onClick = {handleClick}> Hello World </h1>
			</div>
		</React.Fragment>
		);
}

console.log("Hello World");
const root = createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<RouterProvider router={rootRoute}></RouterProvider>
	</StrictMode>
);
