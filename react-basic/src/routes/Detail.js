import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
	// useParams로 param값을 사용했던 변수명 그대로 가져와서 체크할 수 있다.
	const { id } = useParams();
	const [loading, setLoadng] = useState(true);
	const [details, setDetails] = useState([]);
	const getDetails = async () => {
		const res = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setDetails(res.data.movie);
		setLoadng(false);
	};
	useEffect(() => {
		getDetails();
	}, []);
	console.log(details);
	return <div>{loading ? <h1>Loading...</h1> : <h1>Detail...</h1>}</div>;
}

export default Detail;
