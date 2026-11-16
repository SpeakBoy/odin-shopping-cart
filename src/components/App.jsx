import { Route, Routes } from "react-router";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";

function App() {
    return ( 
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="cart" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;