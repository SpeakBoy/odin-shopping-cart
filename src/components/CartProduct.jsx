import styles from "../styles/CartProduct.module.css";

function CartProduct({ product, decrementProduct, incrementProduct, removeFromCart }) {
    return (
        <div className={styles.product}>
            <img src={product.image} className={styles.image} />
            <div className={styles.content}>
                <div className={styles.info}>
                    <h2>{product.title}</h2>
                    <p>Quantity - {product.quantity}</p>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.remove} onClick={() => removeFromCart(product.id)}>
                        X
                    </button>
                    <button
                        className={styles.decrement}
                        onClick={() => decrementProduct(product.id)}
                    >
                        -
                    </button>
                    <button
                        className={styles.increment}
                        onClick={() => incrementProduct(product.id)}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
