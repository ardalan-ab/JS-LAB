
let img1 = document.getElementById("imagee");
let img2 = document.getElementById("image");
function changer (){
let src1 =img1.getAttribute("src");
let src2 =img2.getAttribute("src");
img1.setAttribute("src",`${src2}`)
img2.setAttribute("src",`${src1}`)
 



}
