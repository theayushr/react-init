import { createRoot } from 'react-dom/client';

function Button() {
	return (<button onClick={handleClick}> Click Me! </button>);
}

function handleClick () {
	alert("Hello World");
}

function HelloWorld() {
	return (
		<React.Fragment>
			<h1> Hello World </h1>
			<Button/>
		</React.Fragment>
		);
}

console.log("Hello World");
const root = createRoot(document.getElementById('root'));
root.render(HelloWorld());
