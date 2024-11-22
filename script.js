let params = new URLSearchParams(document.location.search);
const my_target_image = params.get("contentid");
const targetImg = document.querySelector("#my_target_image")
targetImg.src = `targets/${my_target_image}.png`

console.log(my_target_image)
console.log(targetImg)