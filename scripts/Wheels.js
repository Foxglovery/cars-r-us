import { setWheelId } from "./TransientState.js"

export const wheelOptionsSelectorGen = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheelOptions = await response.json()
    let wheelElHTML = `<h2>Wheelzzz</h2>`
    document.addEventListener("change", handleWheelChange)
    const mappedWheels = wheelOptions.map(function(wheel) {
        return wheel
    })
    // console.log(mappedWheels[0].type)
    return `${wheelElHTML}
    <select id="wheel-options">
            <option value="0">Prompt to select resource...</option>
            <option value="1">${mappedWheels[0].type}</option>
            <option value="2">${mappedWheels[1].type}</option>
            <option value="3">${mappedWheels[2].type}</option>
            <option value="4">${mappedWheels[3].type}</option>
        </select>`
}

const handleWheelChange = (changeEvent) => {
    if (changeEvent.target.id === "wheel-options") {
        const chosenOption = changeEvent.target.value
        setWheelId(parseInt(chosenOption))
    }
}