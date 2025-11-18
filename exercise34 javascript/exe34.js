

function register() {
  const list = document.querySelector("#list");
  const newstudent = document.createElement('li');
 newstudent.innerText = "new-student";
list.appendChild(newstudent)
console.log(list)
   console.log("new")
}

function delet(){
  const list = document.querySelector("#list")
if(list.lastChild){
  list.removeChild(list.lastChild)
}
else{
alert("waa dhamaatay waxaad delete garaynaysay")
}
}