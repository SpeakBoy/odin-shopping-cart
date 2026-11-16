import { Route, Routes } from "react-router";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import { useEffect, useState } from "react";

function App() {
    const [items, setItems] = useState(null); 
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data.map(
                item => {
                    return {
                        id: item.id, 
                        title: item.title, 
                        image: item.image
                    };
                }
            )));
    }, []);

    return ( 
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="shop" element={<Shop {...{items}} />} />
                <Route path="cart" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;