async function name(){
const response = await fetch('./exe29.json')
const data = await response.json()
console.log("response ka waa sidaan ");
console.log(response);
console.log("data-da la aqrin karo")

console.log(data);
} 
name();