let temperature = 22;
if (temperature < 0){
  console.log("ver cold");
}
else if(temperature <15 && temperature >0){
  console.log("cold");
}
else if(temperature <25 && temperature >=15)
{
  console.log("warm");
}
else if(temperature > 26){
  console.log("hot");
}