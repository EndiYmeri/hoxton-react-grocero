import CategoriesSelector from "./CategoriesSelector";
import StoreItems from "./StoreItems";

function Header( {items, addItemsOnCart, activeCategory, setActiveCategory } ){
      return (
        <header id="store">
        <h1>Grocero</h1>
        <CategoriesSelector 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <StoreItems 
          items={items}
          addItemsOnCart={addItemsOnCart}
          activeCategory={activeCategory}
          />
      </header>
    )
}
export default Header