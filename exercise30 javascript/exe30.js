function oeprate(a,b,dibuwac){
  return dibuwac(a,b);
}
function multiplication(a,b){
  return a*b;
}
function division(a,b){
  return a/b;
}
console.log("iskudhufasho 10*%5:")
console.log(oeprate(10,5,multiplication));
console.log("qaybinta 100/10:")
console.log(oeprate(100,10,division));