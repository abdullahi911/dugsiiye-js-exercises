function hubintapassword(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const password = "omartood1"
    if(password === "omartood1"){
      resolve("waa la aqbalay password-ka")
    } else {
      reject("password-ka waa khalad")
    }
       }, 2000);
  });
 
  


}

  async function eegistapaswordka() {
    try{
      const user = await hubintapassword();
      console.log(user);
    }
    catch(error){
      console.log(error);
    }
    
  }
  console.log("hubinta password iyadoo la isticmaalayo async and await");
  eegistapaswordka();