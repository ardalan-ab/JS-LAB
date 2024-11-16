// dom selction


const result =document.getElementById(`result`);

const btn=document.querySelector("button");


// function
function convertUnits(){
    // dom selction

const length = Number(document.querySelector('input').value);
const fromUnit = document.getElementById('fromunit').value;
const toUnit = document.getElementById('tounit').value;

    let lengthInMeters;
 // Convert to meters
    if (fromUnit === 'meters') {
     lengthInMeters = length;
   }
   else if (fromUnit === 'centimeter') {
    lengthInMeters = length * 0.01;
} else if (fromUnit === 'millimeter') {
    lengthInMeters = length * 0.001;
}

let convertedLength;

// Convert from meters to the target unit
if (toUnit === 'meters') {
    convertedLength = lengthInMeters;
} else if (toUnit === 'centimeter') {
    convertedLength = lengthInMeters * 100;
} else if (toUnit === 'millimeter') {
    convertedLength = lengthInMeters * 1000;


}
result.textContent=convertedLength

}
btn.addEventListener("click",convertUnits)