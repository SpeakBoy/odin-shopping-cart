import CartProduct from "./CartProduct.jsx";

function Cart({ products }) {
    return (
        <main>
            <h1>Cart Products</h1>
            {products.map((product) => (
                <CartProduct key={product.id} product={product} />
            ))}
        </main>
    );
}

export default Cart;
