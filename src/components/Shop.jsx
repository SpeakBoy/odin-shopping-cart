import ShopProduct from "./ShopProduct.jsx";
import styles from "../styles/Shop.module.css";

function Shop({ products, addToCart }) {
    return (
        <main>
            <div className={styles.container}>
                <h1>Shop Products</h1>
                <div className={styles.shop}>
                    {products.map((product) => (
                        <ShopProduct key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Shop;
