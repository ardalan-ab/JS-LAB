



let sum = 0
function countup (){
 sum +=1
 const num =document.getElementById("num")
 num.innerHTML = sum

 





}
function countdown (){
    sum -=1
    const num =document.getElementById("num")
    num.innerHTML = sum
    


   }


   function counterchecker (){
//    if(5<=sum<=10){
 
//     num.style.color="yellow";
//  }
//   if(sum>10){
 
//     num.style.color="red";
//  }
//  else{
//     num.style.color="black";
//  }

if (sum > 10) {
    num.style.color="red";
         } else if (sum >= 5) {
            num.style.color="yellow";
         } else {
            num.style.color="black";
         }
   }
  



   
