function CartProduct({ product }) {
    return (
        <div className="product">
            <img src={product.image} />
            <h2>{product.title}</h2>
            <p>Quantity: {product.quantity}</p>
            <button>Decrement</button>
            <button>Increment</button>
            <button>Remove from Cart</button>
        </div>
    );
}

export default CartProduct;
