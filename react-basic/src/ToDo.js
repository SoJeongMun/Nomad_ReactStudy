import { useState } from 'react';

function ToDo() {
	const [toDo, setToDo] = useState('');
	const [list, setList] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (e) => {
		e.preventDefault();
		if (toDo === '') {
			return;
		}
		setList((cur) => [...cur, toDo]);
		setToDo('');
	};

	return (
		<div>
			<h1>To Dos : ({list.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={toDo}
					type="text"
					placeholder="Write here..."
				/>
				<button>Add</button>
			</form>
			<hr />
			<ul>
				{/* vue의 v-for와 비슷하다고 생각함... */}
				{list.map((item, idx) => (
					// key값이 필요함
					// map은 두번째 인자로 index를 받기 때문에 그걸 사용하는게 좋을 것 같음
					<li key={idx}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default ToDo;
