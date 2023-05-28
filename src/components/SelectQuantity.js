import { useState } from "react"





export default function SelectQuantity({id, currentPrice, getSubTotal}){

    // Use state 
    const [productQuantity, setProductQuantity] = useState(1)
    
    // Quantity 
    function selectTotalProducts(data){
        let selectedAmount = document.getElementById(data).value
        console.log(productQuantity)
        
        if(selectedAmount == 2){
            setProductQuantity(2)
        }else if(selectedAmount == 3){
            setProductQuantity(3)
        }else if(selectedAmount == 4){
            setProductQuantity(4)
        }else if(selectedAmount == 5){
            setProductQuantity(5)
        }else if(selectedAmount == 6){
            setProductQuantity(6)
        }else if(selectedAmount == 7){
            setProductQuantity(7)
        }else if(selectedAmount == 8){
            setProductQuantity(8)
        }else if(selectedAmount == 9){
            setProductQuantity(9)
        }else if(selectedAmount == 10){
            setProductQuantity(10)
        }else{
            setProductQuantity(1)
            console.log('default');
        }
        
    }
    



    return(
        <>
            <div className="quantity">
                <select name="quantity" id={id} onChange={()=>selectTotalProducts(id)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </select>
            </div>
            <div className="prod-total-price fw-bold">
                ₹ {currentPrice*productQuantity}
                {
                    getSubTotal(currentPrice*productQuantity)
                }
            </div>
        </>
    )
}