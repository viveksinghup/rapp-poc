import Button from "@mui/material/Button";
import Header from "./components/Header";
import MsgTicker from "./components/MsgTicker";
import "./App.css";

function App() {
    const getHeaderImg = () => {
        const imgLogo = document.getElementsByClassName("logo");
        console.log("LogoLink", imgLogo[0].src);
    };
    return (
        <>
            <Header />
            <div className="container">
                <div className="heroBlock">
                    <div className="heroBlock-logo">
                        <img
                            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                            alt="logo"
                            className="img"
                        />
                    </div>
                    <h1 className="heroBlock-text">Header Label</h1>
                </div>
                <div className="container-body">
                    <Button
                        onClick={getHeaderImg}
                        variant="contained"
                    >
                        Test Button
                    </Button>
                </div>
            </div>
            <MsgTicker msg="Welcome" />
        </>
    );
}

export default App;
