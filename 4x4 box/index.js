// select dom node
const divs =document.querySelectorAll("div")
const h1 =document.querySelector("h1")
let colorchanged =0
// function
function changecolor(){
    const randomcolor ="#"+Math.floor(Math.random()*16777215).toString(16);

    

        this.style.backgroundColor=randomcolor
        colorchanged++
        this.removeEventListener("click",changecolor)
    
    if(colorchanged==divs.length){
        h1.textContent="GOOD JOB!!"
        h1.style.color=randomcolor
    }

}




// events
for (let index = 0; index < divs.length; index++) {
    divs[index].addEventListener("click",changecolor)  ;}