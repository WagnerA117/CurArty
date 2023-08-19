import "./App.scss";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Gallery} from "./pages/Gallery/Gallery";
import {NavBar} from "./components";

function App() {
	return (
		<>
			<Router>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<NavBar />
					<Routes>
						<Route path="/" Component={Home} />
						<Route path="/gallery" Component={Gallery} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
