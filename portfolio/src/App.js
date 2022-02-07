import "./App.scss";
import "./assets/styling/themes.scss";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./containers/NavBar";
import ContentContainer from "./containers/ContentContainer";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar></NavBar>
                <ContentContainer></ContentContainer>
            </Router>
        </div>
    );
}

export default App;
