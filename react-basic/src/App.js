import { useState, useEffect } from 'react';
import Movie from './Movie';

function App() {
	const [loading, setLoadng] = useState(true);
	const [movies, setMovies] = useState([]);
	// async - await
	const getMovies = async () => {
		const res = await (
			await fetch(
				'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
			)
		).json();
		setMovies(res.data.movies);
		setLoadng(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{movies.map((m) => (
						<Movie
							image={m.medium_cover_image}
							title={m.title}
							summary={m.summary}
							year={m.year}
							genres={m.genres}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
