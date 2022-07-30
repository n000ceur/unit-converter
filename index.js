/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertInput = document.getElementById("convert-input")
const convertBtn = document.getElementById("convert-btn")

const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

const literToGallonRatio = 0.264
const meterToFeetRatio = 3.281
const kiloToPoundRatio = 2.204

convertBtn.addEventListener("click", function() {
    const num = convertInput.value
    length.innerHTML = getConversionText(num, meterToFeetRatio, "meters", "feet")

    volume.innerHTML = getConversionText(num, literToGallonRatio, "liters", "gallons")
    
    mass.innerHTML = getConversionText(num, kiloToPoundRatio, "kilos", "pounds")
    
})

function getConversionText(num, ratio, unitOne, unitTwo) {
    return `${num} ${unitOne} = ${(num * ratio).toFixed(3)} ${unitTwo} | ${num} ${unitTwo} = 
    ${(num / ratio).toFixed(3)} ${unitOne}`
}