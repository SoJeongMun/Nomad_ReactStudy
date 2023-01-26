import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

// router 최신버전은 <BrowserRouter> <Routes> <Route path="" element={<>}> 구조로 되어있음
function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				{/* :id = 경로 param 설정하는 방법, 여기서 id는 변수명일 뿐 */}
				<Route path="/movie/:id" element={<Detail />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
