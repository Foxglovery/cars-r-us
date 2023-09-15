export const PlacedOrdersGen = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paint&_expand=technology&_expand=wheel&_expand=interior")
    const orders = await fetchResponse.json()
    let orderHTML = "<h2>Whips For To Build</h2>"
    const divStringArray = orders.map(
        (order) => {
            const orderPrice = order.paint.price + order.technology.price + order.wheel.price + order.interior.price
            // To automatically format the number as currency
                const USDorderPrice =orderPrice.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                })
            return `<div><li>Order # ${order.id} is ${order.paint.type} on ${order.wheel.type} replete with ${order.interior.type} interiors and strapped with our ${order.technology.type}. It will cost ${USDorderPrice} </li></div>`
        }
    )
    orderHTML = divStringArray.join("")
    return orderHTML
}
//why wont postman expand the orders???