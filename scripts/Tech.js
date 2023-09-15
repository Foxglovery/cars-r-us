import { setTechId } from "./TransientState.js"

export const techOptionsSelectorGen = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const techOptions = await response.json()
    let techElHTML = `<h2>Smart-Car Packages</h2>`
    document.addEventListener("change", handleTechChange)
    const mappedTech = techOptions.map(function(tech) {
        return tech
    })
    return `${techElHTML}
    
    <select id="tech-options">
            <option value="0">Prompt to select resource...</option>
            <option value="1">${mappedTech[0].type}</option>
            <option value="2">${mappedTech[1].type}</option>
            <option value="3">${mappedTech[2].type}</option>
            <option value="4">${mappedTech[3].type}</option>
        </select>
        `
}

const handleTechChange = (changeEvent) => {
    if(changeEvent.target.id ==="tech-options") {
        const chosenOption = changeEvent.target.value
        setTechId(parseInt(chosenOption))
    }
}