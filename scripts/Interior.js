import { setInteriorId } from "./TransientState.js"

export const interiorOptionsSelectorGen = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiorOptions = await response.json() 
    let interiorElHTML = `<h2>Fleshy Bits</h2>`
    document.addEventListener("change", handleInteriorChange)
    const mappedInteriors = interiorOptions.map(function(interior) {
        return interior
    })
    // console.log(mappedInteriors[0].color)
    return `${interiorElHTML} 
    <select id="interior-options">
            <option value="0">Prompt to select resource...</option>
            <option value="1">${mappedInteriors[0].type}</option>
            <option value="2">${mappedInteriors[1].type}</option>
            <option value="3">${mappedInteriors[2].type}</option>
            <option value="4">${mappedInteriors[3].type}</option>
        </select>
        `
}

const handleInteriorChange = (changeEvent) => {
    if (changeEvent.target.id === "interior-options") {
       const chosenOption = changeEvent.target.value
       setInteriorId(parseInt(chosenOption))
    }
 }
