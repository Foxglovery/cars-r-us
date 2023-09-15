//make render function
//make erd modules like in kneel
//get html like we want

import { interiorOptionsSelectorGen } from "./Interior.js"
import { orderButtonGen } from "./OrderButton.js"
import { paintOptionsSelectorGen } from "./Paint.js"
import { PlacedOrdersGen } from "./PlacedOrders.js"
import { techOptionsSelectorGen } from "./Tech.js"
import { wheelOptionsSelectorGen } from "./Wheels.js"

//store transient state
const render = async () => {
const container = document.querySelector("#container")
const paintSelector = await paintOptionsSelectorGen() 
const techSelector = await techOptionsSelectorGen()
const wheelSelector = await wheelOptionsSelectorGen()
const interiorSelector = await interiorOptionsSelectorGen()
const placedOrders = await PlacedOrdersGen()
const buttonHTML = orderButtonGen()
const composedHTML = `
<h1>Cars-R-Us</h1>
<div id="paint-el">
${paintSelector}
</div>
<div id="wheel-el">
${wheelSelector}
</div>
<div id="interior-el">
${interiorSelector}
</div>
<div id="tech-el">
${techSelector}
</div>
${buttonHTML}
<div id="order-el">
${placedOrders}
</div>`
container.innerHTML = composedHTML

}
render()

document.addEventListener("OrderWasPlaced", event => {
    console.log("An order has been placed. Snapping creation back into being...")
    
    render()
})

//make new module called PLacedOrders
//