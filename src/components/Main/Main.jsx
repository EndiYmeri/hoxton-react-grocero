import CartItem from "./CartItem"
import TotalSection from "./TotalSection"

function Main({items,  addItemsOnCart, removeItemsFromCart}){
    return (
        <main id="cart">
            <h2>Your Cart</h2>

            <div className="cart--item-list-container">
                <ul className="item-list cart--item-list">
                {   
                     items ? items.map((item) => {
                        return item.amount? 
                                <CartItem 
                                  item = {item}
                                  addItemsOnCart = {addItemsOnCart}
                                  removeItemsFromCart={removeItemsFromCart}
                                /> : <></>
                      })  : <></>

                }
                </ul>
            </div>

            <div className="total-section">
                <div>
                    <h3>Total</h3>
                </div>
                <TotalSection items = {items} />
            </div>
        </main>
    )
}
export default Main