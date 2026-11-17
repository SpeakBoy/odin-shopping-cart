import CartProduct from "./CartProduct.jsx";
import styles from "../styles/Cart.module.css";

function Cart({ products, decrementProduct, incrementProduct, removeFromCart }) {
    return (
        <main>
            <div className={styles.container}>
                <h1 className={styles.heading}>Cart Products</h1>
                <div className={styles.cart}>
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
                </div>
            </div>
        </main>
    );
}

export default Cart;
