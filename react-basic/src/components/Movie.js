import { Link } from "react-router-dom"

function Movie({ image, title, year, summary, genres }) {
	return (
		<div>
			<img src={image} alt="thumbnail" />
			<h2>
				{/* to에 중괄호 열고 써야함.. */}
				<Link to={'/movie'}>{title} ({year})</Link>
			</h2>
			<p>{summary}</p>
			<ul>
				{genres.map((g) => (
					<li key={g}>{g}</li>
				))}
			</ul>
		</div>
	);
}

export default Movie;
