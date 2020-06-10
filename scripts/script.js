const binaryInput = document.querySelector("input[name=binary]")
const binaryField = document.querySelector("#field-binary")

binaryInput.addEventListener("keyup", function(event){
  const keyPres = event.key
  const binaryNumber = event.target.value

  if(keyPres != 0 && keyPres != 1){
    const spanBinary = document.createElement("span")
    binaryField.appendChild(spanBinary)
  }
  
  console.log(binaryNumber)
  
})