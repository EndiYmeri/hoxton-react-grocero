import StoreItem from "./StoreItem"

function StoreItems({items, addItemsOnCart, activeCategory}){
    return (
        <ul className="item-list store--item-list">
          { 
            items ? 
            activeCategory === "" ? 
              items.map((item) => {
              return  <StoreItem 
                        item = {item}
                        addItemsOnCart = {addItemsOnCart}
                      />
            }) 
            : items =  items.filter(item => item.category === activeCategory ).map((item) => {
              return  <StoreItem 
                        item = {item}
                        addItemsOnCart = {addItemsOnCart}
                      />
            })  : <></>
          }
        </ul>
    )
}
export default StoreItems