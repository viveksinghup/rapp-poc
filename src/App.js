import Button from "@mui/material/Button";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="logo" alt="logo" />
            </header>

            <Button
                onClick={() => {
                    console.log("btn-clicked");
                }}
                variant="contained"
            >
                Test Button
            </Button>
        </div>
    );
}

export default App;
