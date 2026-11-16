import { Link } from "react-router";

function Navbar({ numItemsInCart }) {
    return (
        <header>
            <nav>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="shop">Shop</Link>
                </div>
                <div>
                    <Link to="cart">Cart - {numItemsInCart}</Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
