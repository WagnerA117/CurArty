import "./App.scss";
import {Button, NavBar} from "./components";
import {TextInput} from "./components/TextInput/TextInput";
import {useState} from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Gallery} from "./pages/Gallery/Gallery";

function App() {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (value: string) => {
		setInputValue(value);
	};

	console.log(inputValue);
	return (
		<>
			<Router>
				<NavBar />

				<Routes>
					<Route path="/" Component={Home} />
					<Route path="/gallery" Component={Gallery} />
				</Routes>
			</Router>
			<TextInput value={inputValue} onChange={handleInputChange} />

			<Button label="testButton" />
			<div>Yeah this is the one</div>
		</>
	);
}

export default App;
