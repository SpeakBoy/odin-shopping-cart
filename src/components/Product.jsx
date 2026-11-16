function Product() {
    return (
        <div className="product">
            <h1>Product Name</h1>
            <img src="/favicon.svg" alt="Product Image" />
            <p>Price</p>
            <input type="number" min="1" defaultValue="1"/>
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;