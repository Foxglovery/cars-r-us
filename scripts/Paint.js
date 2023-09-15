import { setPaintId } from "./TransientState.js"

export const paintOptionsSelectorGen = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paintOptions = await response.json() 
    let paintElHTML = `<h2>Paints</h2>`
    document.addEventListener("change", handlePaintChange)
    const mappedColors = paintOptions.map(function(paint) {
        return paint
    })
    // console.log(mappedColors[0].color)
    return `${paintElHTML} 
            
            <select id="paint-color">
            <option value="0">Prompt to select resource...</option>
            <option value="1">${mappedColors[0].type}</option>
            <option value="2">${mappedColors[1].type}</option>
            <option value="3">${mappedColors[2].type}</option>
            <option value="4">${mappedColors[3].type}</option>
        </select>
        `
}

const handlePaintChange = (changeEvent) => {
    if (changeEvent.target.id === "paint-color") {
       const chosenOption = changeEvent.target.value
       setPaintId(parseInt(chosenOption))
    }
 }
