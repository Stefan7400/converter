const inputElement = document.getElementById("input")
const binaryoutput = document.getElementById("binaryOutput")
const baseSelector = document.getElementById("baseselector")
const tenbaseOutput = document.getElementById("tenBaseOutput")
const threeBaseOutput = document.getElementById("threeBaseOutput")
const fourBaseOutput = document.getElementById("fourBaseOutput")
const fiveBaseOutput = document.getElementById("fiveBaseOutput")
const sixBaseOutput = document.getElementById("sixBaseOutput")
const sevenBaseOutput = document.getElementById("sevenBaseOutput")
const oktaBaseOutput = document.getElementById("octetBaseOutput")
const nineBaseOutput = document.getElementById("nineBaseOutput")
const elevenBaseOutput = document.getElementById("elevenBaseOutput")
const twelveBaseOutput = document.getElementById("twelveBaseOutput")
const thirteenBaseOutput = document.getElementById("thirteenBaseOutput")
const fourtheenBaseOutput = document.getElementById("fourtheenBaseOutput")
const fifteenBaseOutput = document.getElementById("fifteenBaseOutput")
const hexaBaseOutput = document.getElementById("hexaBasteOutput")
const twoComplement = document.getElementById("twoComplement")

function convert(){
    if(inputElement.value.toString().length === 0){
        return
    }
    clearAllOutputFields();
    setOutputs(convertToDeci(inputElement.value))

}

/**
 * Convert to 10 Base
 */
function convertToDeci(value){
    let parsedValue = parseInt(value,baseSelector.value).toString()
    tenbaseOutput.appendChild(document.createTextNode(parsedValue))
    return Number(parsedValue)
}

function setOutputs(deciValue){
    binaryoutput.appendChild(document.createTextNode(parseInt(deciValue).toString(2)))
    threeBaseOutput.appendChild(document.createTextNode(parseInt(deciValue).toString(3)))
    fourBaseOutput.appendChild(document.createTextNode(parseInt(deciValue).toString(4)))
    fiveBaseOutput.appendChild(document.createTextNode(parseInt(deciValue).toString(5)))
    sixBaseOutput.appendChild(document.createTextNode(parseInt(deciValue).toString(6)))
    sevenBaseOutput.appendChild(document.createTextNode(parseInt(deciValue).toString(7)))
    oktaBaseOutput.appendChild(document.createTextNode(parseInt(deciValue).toString(8)))
    nineBaseOutput.appendChild(document.createTextNode(parseInt(deciValue).toString(9)))
    elevenBaseOutput.appendChild(document.createTextNode(parseInt(deciValue).toString(11)))
    twelveBaseOutput.appendChild(document.createTextNode(parseInt(deciValue).toString(12)))
    thirteenBaseOutput.appendChild(document.createTextNode(parseInt(deciValue).toString(13)))
    fourtheenBaseOutput.appendChild(document.createTextNode(parseInt(deciValue).toString(14)))
    fifteenBaseOutput.appendChild(document.createTextNode(parseInt(deciValue).toString(15)))
    hexaBaseOutput.appendChild(document.createTextNode(parseInt(deciValue).toString(16)))
    setComplement(deciValue)

}

function clearAllOutputFields(){
    tenbaseOutput.innerHTML = ""
    binaryoutput.innerHTML = ""
    threeBaseOutput.innerHTML = ""
    fourBaseOutput.innerHTML = ""
    fiveBaseOutput.innerHTML = ""
    sixBaseOutput.innerHTML = ""
    sevenBaseOutput.innerHTML = ""
    oktaBaseOutput.innerHTML = ""
    nineBaseOutput.innerHTML = ""
    elevenBaseOutput.innerHTML = ""
    twelveBaseOutput.innerHTML = ""
    thirteenBaseOutput.innerHTML = ""
    fourtheenBaseOutput.innerHTML = ""
    fifteenBaseOutput.innerHTML = ""
    hexaBaseOutput.innerHTML = ""
    twoComplement.innerHTML = ""
}

function setComplement(deciValue){
    let oneComplement = ""
    let binary = parseInt(deciValue).toString(2)
    if(binary.charAt(0) === '-'){
        let withoutMinus = binary.substring(1)

    } else {
        twoComplement.appendChild(document.createTextNode(parseInt(deciValue).toString(2)))
    }
}

function checkInput(event){


    if(event.keyCode === 8 ||event.keyCode === 189){
        //Delete
        return true
    }


    if(inputElement.value.toString().length > 17){
        //Overflow for 32 bit int
        event.preventDefault()
        return false
    }
    let input = String.fromCharCode(event.keyCode)
    console.log(input)
    if(Number(baseSelector.value) < 10 && isNaN(parseInt(input))){
        event.preventDefault()
        return false
    }

    if(Number(baseSelector.value)-1 < Number(input)){
        event.preventDefault()
        return false
    }


    return true
}