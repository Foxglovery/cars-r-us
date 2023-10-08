import { placeOrder, setModelId } from "./TransientState.js"

export const orderButtonGen = () => {
    const buttonHTML = `
    <div>
        <h3>Select An Option</h3>
            <input type='radio' name='model' value = 1/>Car
            <input type='radio' name='model' value = 2/>SUV
            <input type='radio' name='model' value = 3/>Truck
    
    </div>
    <button id="place-order-btn">Place An Order If You Like</button>`
    return buttonHTML
}


document.addEventListener("change", (changeEvent) => {
    const itemClicked = changeEvent.target
        if (itemClicked.name === "model") {
            const chosenOption = itemClicked.value
            setModelId(parseInt(chosenOption))
        }
        
})

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    const models = document.getElementsByName('model')
        for
        if(itemClicked.id === "place-order-btn") {
            placeOrder()
        }
})