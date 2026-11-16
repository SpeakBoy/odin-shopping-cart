import { Route, Routes } from "react-router";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import Cart from "./Cart.jsx";
import { useEffect, useState } from "react";

function App() {
    const [shopProducts, setShopProducts] = useState([]);
    const [cart, setCart] = useState({});

    const numItemsInCart = Object.keys(cart).reduce((acc, curr) => acc + cart[curr], 0);

    const cartProductIds = Object.keys(cart).map((product) => Number(product));
    const cartProducts = shopProducts
        .filter((product) => cartProductIds.includes(product.id))
        .map((product) => {
            return { ...product, quantity: cart[product.id] };
        });

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) =>
                setShopProducts(
                    data.map((product) => {
                        return {
                            id: product.id,
                            title: product.title,
                            image: product.image,
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
                <Route
                    path="shop"
                    element={<Shop products={shopProducts} addToCart={addToCart} />}
                />
                <Route path="cart" element={<Cart products={cartProducts} />} />
            </Routes>
        </>
    );
}

export default App;
