const numbers =[2,3,4,5]
let flag =false
function repeatedNumber(num){

    
    for (let index = 0; index < numbers.length; index++) {
       
        if(num==numbers[index]){
          
          flag=true
          break
        }
        
        
    }
    if(flag){
        return console.log("repeated!!")
    }
    else{
        return console.log("allowed")
    }
}