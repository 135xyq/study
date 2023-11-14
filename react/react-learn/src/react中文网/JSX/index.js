export default function Test() {
	return (
		<div className="test-bool">
			<div />
			<div></div>
			<div>{false}</div>
			<div>{null}</div>
			<div>{undefined}</div>
			<div>{true}</div>
			<div>{String(false)}</div>
			<div>{String(null)}</div>
			<div>{String(undefined)}</div>
			<div>{String(true)}</div>
		</div>
	);
}
