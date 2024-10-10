import { createRoot } from 'react-dom/client';

// export default 
function HelloWorld() {
	return (
		<h1> Hello World </h1>
		);
}

console.log("Hello World");
const root = createRoot(document.getElementById('root'));
root.render(HelloWorld());