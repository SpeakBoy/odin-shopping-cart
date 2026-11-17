import CartProduct from "./CartProduct.jsx";

function Cart({ products, decrementProduct, incrementProduct, removeFromCart }) {
    return (
        <main>
            <h1>Cart Products</h1>
            {products.map((product) => (
                <CartProduct
                    key={product.id}
                    product={product}
                    decrementProduct={decrementProduct}
                    incrementProduct={incrementProduct}
                    removeFromCart={removeFromCart}
                />
            ))}
        </main>
    );
}

export default Cart;
