import { Route, Routes } from "react-router";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import Cart from "./Cart.jsx";
import { useEffect, useState } from "react";
import "../styles/App.css";

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

    const decrementProductInCart = (id) => {
        const quantityInCart = cart[id];
        const newQuantity = quantityInCart - 1;

        if (newQuantity === 0) {
            return removeFromCart(id);
        }

        setCart({ ...cart, [id]: newQuantity });
    };

    const incrementProductInCart = (id) => {
        const quantityInCart = cart[id];
        const newQuantity = quantityInCart + 1;

        setCart({ ...cart, [id]: newQuantity });
    };

    const removeFromCart = (id) => {
        const { [id]: _, ...rest } = cart;
        setCart(rest);
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
                <Route
                    path="cart"
                    element={
                        <Cart
                            products={cartProducts}
                            decrementProduct={decrementProductInCart}
                            incrementProduct={incrementProductInCart}
                            removeFromCart={removeFromCart}
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
