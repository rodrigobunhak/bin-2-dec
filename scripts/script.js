const binaryField = document.querySelector("input[name=binary]")

binaryField.addEventListener("keyup", function(event){
  const binaryNumber = event.target.value
  
  console.log(binaryNumber)
})