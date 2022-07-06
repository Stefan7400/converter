const input = document.getElementById("input")
const binaryoutput = document.getElementById("binaryOutput")
const baseSelector = document.getElementById("baseselector")
const tenbaseOutput = document.getElementById("tenBaseOutput")
const threeBaseOutput = document.getElementById("threeBaseOutput")
const fourBaseOutput = document.getElementById("fourBaseOutput")

function convert(){
    let base = baseSelector.value;
    clearAllOutputFields();
    setOutputs(convertToDeci(input.value))

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
}

function fetchValueOfChar(char){
    //Dont have to take care of error handling, useless input will be prevented!
    return Number(char)
}

function clearAllOutputFields(){
    tenbaseOutput.innerHTML = ""
    binaryoutput.innerHTML = ""
    threeBaseOutput.innerHTML = ""
    fourBaseOutput.innerHTML = ""
}

function checkInput(event){
    if(event.keyCode === 8){
        //Delete
        return true
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