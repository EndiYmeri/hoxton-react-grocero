function TotalSection({items}){
    
    let totalAmount = ()=>{
        let total = 0 
        if(items){
            for(const item of items){
                total = total + item.amount*item.price
            }
        }
        return total.toFixed(2)
    }
    return (
        <div>
            <span className="total-number">£{totalAmount()}</span>
        </div>
    )
}
export default TotalSection