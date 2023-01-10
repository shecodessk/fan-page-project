var removeCartItemButtons = document.getElementsByClassName("btn-danger");
console.log(removeCartItemButtons)

for(let i = 0; i < removeCartItemButtons.length; i++){
  var button = removeCartItemButtons[i]
  button.addEventListener("click", function () {
    console.log('clicked')
  })
}