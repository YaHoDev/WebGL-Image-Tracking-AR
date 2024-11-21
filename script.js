let params = new URLSearchParams(document.location.search);
const  contentid= params.get("contentid");
const targetImg = document.querySelector("#my_target_image")
targetImg.src = `targets/${contentid}`