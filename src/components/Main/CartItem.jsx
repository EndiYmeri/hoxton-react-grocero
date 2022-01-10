function CartItem({item, addItemsOnCart, removeItemsFromCart}){
    return(
            <li key={item.id}>
            <img className="cart--item-icon" src={"../src" + item.imageSrc} alt="beetroot" />
            <p>{item.name}</p>
            <button 
                className="quantity-btn remove-btn center"
                onClick={()=>{
                    removeItemsFromCart(item)
                }}
                >-</button>
            <span className="quantity-text center">
                {item.amount}
            </span>
            <button className="quantity-btn add-btn center"
                onClick={()=>{
                    addItemsOnCart(item)
                }}
            >+</button>
        </li>
    )
}

export default CartItem