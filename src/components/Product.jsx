function Product({ id, title, imageUrl, addToCart }) {
    return (
        <div className="product">
            <h1>{title}</h1>
            <img src={imageUrl} />
            <form onSubmit={(e) => addToCart(e, id)}>
                <label htmlFor="quantity">Quantity:</label>
                <input id="quantity" name="quantity" type="number" min="1" defaultValue="1" />
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    );
}

export default Product;
