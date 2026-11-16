function ShopProduct({ product, addToCart }) {
    return (
        <div className="product">
            <h2>{product.title}</h2>
            <img src={product.image} />
            <form onSubmit={(e) => addToCart(e, product.id)}>
                <label htmlFor="quantity">Quantity:</label>
                <input id="quantity" name="quantity" type="number" min="1" defaultValue="1" />
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    );
}

export default ShopProduct;
