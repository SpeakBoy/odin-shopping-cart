import Product from "./Product.jsx";

function Shop({ items, addToCart }) {
    return (
        <main>
            {items.map((item) => (
                <Product
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    imageUrl={item.image}
                    addToCart={addToCart}
                />
            ))}
        </main>
    );
}

export default Shop;
