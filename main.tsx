function MyApp() {
	return (<>
		<h1>It works!</h1>
		<p>This is a <em>React app</em>.</p>
	</>);
}

function main() {
	const mainElement = document.getElementById("main-element");
	if (!mainElement) {
		throw new Error("missing element with id `\"main-element\"`");
	}
	ReactDOM.render(<MyApp />, mainElement);
}
