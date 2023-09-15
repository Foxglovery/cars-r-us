const transientState = {
    "paintId": 0,
    "wheelId": 0,
    "technologyId": 0,
    "interiorId": 0,

}

export const setPaintId = (chosen) => {
    transientState.paintId = chosen
    console.log(transientState)
}

export const setWheelId = (chosen) => {
    transientState.wheelId = chosen
    console.log(transientState)
}

export const setTechId = (chosen) => {
    transientState.technologyId = chosen
    console.log(transientState)
}

export const setInteriorId = (chosen) => {
    transientState.interiorId = chosen
    console.log(transientState)
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders", postOptions)
    
    const customEvent = new CustomEvent("OrderWasPlaced")
    document.dispatchEvent(customEvent)
}

