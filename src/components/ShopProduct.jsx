import styles from "../styles/ShopProduct.module.css";

function ShopProduct({ product, addToCart }) {
    return (
        <div className={styles.product}>
            <h2>{product.title}</h2>
            <img src={product.image} className={styles.image} />
            <form onSubmit={(e) => addToCart(e, product.id)} className={styles.form} >
                <div className={styles.input}>
                    <label htmlFor="quantity">Quantity:</label>
                    <input id="quantity" name="quantity" type="number" min="1" defaultValue="1" />
                </div>
                <button type="submit" className={styles.add}>+</button>
            </form>
        </div>
    );
}

export default ShopProduct;
