import goldShoppingCart from "./../assets/gold-shopping-cart.png";
import silverShoppingCart from "./../assets/silver-shopping-cart.png";
import styles from "../styles/Home.module.css";

function Home() {
    return (
        <main>
            <div className={styles.container}>
                <h1>Home</h1>
                <p>This app lets you "shop" for items! Shop away!</p>
                <div className={styles.carts}>
                    <img className={styles.image} src={goldShoppingCart} alt="Gold shopping cart" />
                    <img
                        className={styles.image}
                        src={silverShoppingCart}
                        alt="Silver shopping cart"
                    />
                </div>
            </div>
        </main>
    );
}

export default Home;
