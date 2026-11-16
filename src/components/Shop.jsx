import Product from "./Product.jsx";

function Shop({ items }) {
    return (
        <main>
            {items.map((item) => (
                <Product
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    imageUrl={item.image}
                />
            ))}
        </main>
    );
}

export default Shop;