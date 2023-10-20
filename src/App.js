import Button from "@mui/material/Button";
import Header from "./components/Header";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <Button
                    onClick={() => {
                        console.log("btn-clicked");
                    }}
                    variant="contained"
                >
                    Test Button
                </Button>
            </div>
        </>
    );
}

export default App;
