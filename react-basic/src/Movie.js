function Movie({ image, title, year, summary, genres }) {
	return (
		<div>
			<img src={image} alt="thumbnail" />
			<h2>
				{title} ({year})
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
