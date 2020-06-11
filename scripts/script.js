const binaryInput = document.querySelector("input[name=binary]")
const decimalInput = document.querySelector("input[name=decimal]")
const binaryField = document.querySelector("#field-binary")
const binarySpan = document.querySelector("span")


binaryInput.addEventListener("keyup", function(event){
  const binaryNumber = event.target.value

  binaryNumber.split('').map((char) => {
    if (char !== '0' && char !== '1') {
      // Escreve um span informando que o valor digitado é invalido
      binarySpan.textContent = ""
      const spanBinaryContent = document.createTextNode("Valor digitado é inválido!")
      binarySpan.appendChild(spanBinaryContent)
      decimalInput.value = ""
    } else {
      binarySpan.textContent = ""
      decimalInput.value = parseInt(binaryInput.value, 2);
    }
  });
})