import ShopProduct from "./ShopProduct.jsx";

function Shop({ products, addToCart }) {
    return (
        <main>
            <h1>Shop Products</h1>
            {products.map((product) => (
                <ShopProduct key={product.id} product={product} addToCart={addToCart} />
            ))}
        </main>
    );
}

export default Shop;
