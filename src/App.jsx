import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './styles/reset.css'
import './styles/index.css'

const fetchItemsFromDb = () => {
  return fetch('http://localhost:3001/storeItems').then( resp =>{
    return resp.json()
  })
}

const updateItemsOnDb = (item)=> {
  return fetch(`http://localhost:3001/storeItems/${item.id}`, {
    method: "PATCH",
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      "stock": item.stock,
      "amount":item.amount
    }
    ) 
  })
}

function App() {
  const [items, setItems] = useState()
  const [activeCategory, setActiveCategory] = useState("")

  function addItemsOnCart(item){
    if(item.stock){

      item.stock--
      item.amount++
      updateItemsOnDb(item)
      // @ts-ignore
      setItems([...items])
    }
  } 
  
  function removeItemsFromCart(item){
    if (item.amount) {
        item.stock++
        item.amount--
        updateItemsOnDb(item)
        // @ts-ignore
        setItems([...items])
      }
  } 
  useEffect(() => {
    fetchItemsFromDb().then(resp => {
      setItems(resp)
    })
  }, []);
    
  return (
    <div className="App">
      <Header 
        items = {items} 
        addItemsOnCart = {addItemsOnCart}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
       />
      <Main 
       items ={items}
       addItemsOnCart = {addItemsOnCart}
       removeItemsFromCart = {removeItemsFromCart}
      />
    </div>
  )
}

export default App
