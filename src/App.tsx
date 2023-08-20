import "./App.scss";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Gallery} from "./pages/Gallery/Gallery";
import {NavBar} from "./components";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</>
	);
}

export default App;
