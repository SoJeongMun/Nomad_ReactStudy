import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from "./routes/Detail";
import Home from "./routes/Home";

// router 최신버전은 <BrowserRouter> <Routes> <Route path="" element={<>}> 구조로 되어있음
function App() {
	return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/movie" element={<Detail />}></Route>
		</Routes>
	</BrowserRouter>
	)
}

export default App;
