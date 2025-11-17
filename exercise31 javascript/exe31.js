async function isticmalahaXogtiisa(){
  try{

const response = await fetch('https://jsonplaceholder.typicode.com/users');


if(!response.ok){
  throw new Error('dalabkaaga lama fulin karo');
  }
const isticmaalaha = await response.json();
console.log('xogta userka markii hore');
console.log(response);
console.log("xogta la aqrin karo")
  console.log(isticmaalaha);
  
  }

  catch(err){
    console.log('waxaa dhacay qalad: ' + err.message);
  }
}
isticmalahaXogtiisa();