import './App.css';
import Pages from "./Routes/Pages";
import {Navbar} from "./Containers/Header/navbar";
// import { Navbar } from "./components/";
import Footer from "./Containers/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Pages/>
            <Footer/>
        </div>
    );
}

export default App;
