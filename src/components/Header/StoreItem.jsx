
function StoreItem({item, addItemsOnCart}){
    return (
        <li key={item.id} className={item.stock? "" : "out-of-stock"}>
            <div className="store--item-icon">
                <img src={"../src" + item.imageSrc} alt="beetroot" />
            </div>
            <button
                onClick={()=>{
                    addItemsOnCart(item)
                }}
            >Add to cart</button>
        </li>
    )
}
export default StoreItem