import { Route, Routes } from "react-router";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import { useEffect, useState } from "react";

function App() {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState({});

    const numItemsInCart = Object.keys(cart).reduce(
        (acc, curr) => acc + cart[curr], 0
    );

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) =>
                setItems(
                    data.map((item) => {
                        return {
                            id: item.id,
                            title: item.title,
                            image: item.image,
                        };
                    }),
                ),
            );
    }, []);

    const addToCart = (e, id) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const quantityToAdd = Number(formData.get("quantity"));
        const quantityInCart = cart[id] ?? 0;

        setCart({ ...cart, [id]: quantityInCart + quantityToAdd });

        e.target.reset();
    };

    return (
        <>
            <Navbar numItemsInCart={numItemsInCart} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="shop" element={<Shop items={items} addToCart={addToCart} />} />
                <Route path="cart" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
