import CartProduct from "./CartProduct.jsx";

function Cart({ products, decrementProduct, incrementProduct, removeFromCart }) {
    return (
        <main>
            <h1>Cart Products</h1>
            {products.length > 0 ? (
                products.map((product) => (
                    <CartProduct
                        key={product.id}
                        product={product}
                        decrementProduct={decrementProduct}
                        incrementProduct={incrementProduct}
                        removeFromCart={removeFromCart}
                    />
                ))
            ) : (
                <p>Nothing in the cart yet! Get shopping!</p>
            )}
        </main>
    );
}

export default Cart;
