import { Link } from "react-router";

function Navbar() {
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
                    <Link to="cart">Cart</Link>
                </div> 
            </nav>
        </header>
    );
}

export default Navbar;