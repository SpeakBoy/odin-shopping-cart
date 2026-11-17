function CartProduct({ product, decrementProduct, incrementProduct, removeFromCart }) {
    return (
        <div className="product">
            <img src={product.image} />
            <h2>{product.title}</h2>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => decrementProduct(product.id)}>Decrement</button>
            <button onClick={() => incrementProduct(product.id)}>Increment</button>
            <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
        </div>
    );
}

export default CartProduct;
