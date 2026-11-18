import { Link } from "react-router";
import styles from "../styles/Navbar.module.css";

function Navbar({ numItemsInCart }) {
    return (
        <header>
            <nav className={styles.navbar}>
                <div>
                    <Link className={styles.link} to="/">
                        Home
                    </Link>
                </div>
                <div>
                    <Link className={styles.link} to="shop">
                        Shop
                    </Link>
                </div>
                <div>
                    <Link className={styles.link} to="cart">
                        Cart - {numItemsInCart}
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
