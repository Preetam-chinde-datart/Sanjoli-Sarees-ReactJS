import { useState } from "react"





export default function SelectQuantity({id, currentPrice, getSubTotal, checkOut }){

    // Use state 
    const [productQuantity, setProductQuantity] = useState(1)
    
    
    
    // Quantity 
    function selectTotalProducts(data){
        let selectedAmount = document.getElementById(data).value
        // console.log(data, selectedAmount)
        setProductQuantity(selectedAmount)
        // setFinalQuantity(selectedAmount)
        // setProductID(data)
        checkOut(selectedAmount, data)
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