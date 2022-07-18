// 调用子元素回调 numTimes 次，来重复生成组件
function Repeat(props) {
	let items = [];
	for (let i = 0; i < props.numTimes; i++) {
		items.push(props.children(i));
	}
	return <div>{items}</div>;
}

export default function ListOfTenThings() {
	return (
		<Repeat numTimes={10}>
			{(index) => <p key={index}>This is item {index} in the list</p>}
		</Repeat>
	);
}
