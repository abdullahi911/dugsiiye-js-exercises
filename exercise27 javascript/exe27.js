function hubintapassword(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const password = "omartood"
    if(password === "omartood1"){
      resolve("waa la aqbalay password-ka")
    } else {
      reject("password-ka waa khalad")
    }
       }, 2000);
  });
 
  


}
hubintapassword()
.then((message) => {console.log(message);})
.catch((error) => {
  console.log(error)});