function CategoriesSelector({activeCategory, setActiveCategory}){
    return (
        <div className= "categories">
        <button onClick={()=>{
          setActiveCategory("")
        }}
        className={activeCategory === "" ? "active": "" }
        >All Categories</button>
        <button onClick={()=>{
          setActiveCategory("root")
        }}
        className={activeCategory === "roots" ? "active": "" }
        >Roots</button>
        <button onClick={()=>{
          setActiveCategory("fruit")
        }}
        className={activeCategory === "fruits" ? "active": "" }
        >Fruits</button>
        <button
         onClick={()=>{
          setActiveCategory("vegetable")
        }}
        className={activeCategory === "vegetables" ? "active": "" }
        >Vegetables</button>
      </div>
    )
}
export default CategoriesSelector