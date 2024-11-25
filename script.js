let params = new URLSearchParams(document.location.search);
const  contentid = params.get("contentid");
const targetImg = document.querySelector("#my_target_image")
targetImg.src = ` https://oldpressobjects.s3.eu-north-1.amazonaws.com/${contentid}/my_target_image `

console.log("content ID: " + contentid)
console.log("targetIMG: " + targetImg)
console.log("New src: " + targetImg.src)