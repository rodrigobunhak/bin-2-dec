const binaryInput = document.querySelector("input[name=binary]")
const binaryField = document.querySelector("#field-binary")
const binarySpan = document.querySelector("span")


binaryInput.addEventListener("keyup", function(event){
  const keyPres = event.key
  const binaryNumber = event.target.value
  
  if(keyPres != 0 && keyPres != 1){
      // binarySpan.textContent = ""
      const spanBinaryContent = document.createTextNode("Valor digitado é inválido!")
      
      binarySpan.appendChild(spanBinaryContent)

      // função limpa o span
      setTimeout(function(){
        binarySpan.textContent = ""
      }, 2000)

      binaryInput.value = ""

  }
  // console.log(binaryNumber)
})