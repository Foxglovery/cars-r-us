import { placeOrder } from "./TransientState.js"

export const orderButtonGen = () => {
    const buttonHTML = `<button id="place-order-btn">Place An Order If You Like</button>`
    return buttonHTML
}
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
        if(itemClicked.id === "place-order-btn") {
            placeOrder()
        }
})