import goldShoppingCart from "./../assets/gold-shopping-cart.png";
import silverShoppingCart from "./../assets/silver-shopping-cart.png";

function Home() {
    return (
        <main>
            <h1>Home</h1>
            <p>This app lets you "shop" for items! Shop away!</p>
            <img src={goldShoppingCart} alt="Gold shopping cart" />
            <img src={silverShoppingCart} alt="Silver shopping cart" />
        </main>
    );
}

export default Home;
