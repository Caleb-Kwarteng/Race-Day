let raceNumber = Math.floor(Math.random() * 1000);
let isRegistered = true;
let runnerAge = 18;

if(isRegistered && runnerAge > 18){
  raceNumber+=1000;
}
if(runnerAge > 18 && isRegistered){
  console.log(`Your race number is ${raceNumber} and you will race at 9:30am`);
} else if(runnerAge > 18 && !isRegistered){
   console.log(`Your race number is ${raceNumber} and you will race at 11:am`);
} else if(runnerAge < 18){
  console.log(`Your race number is ${raceNumber} and you will race at 12:30pm`);
}
else{
  console.log('Check registration desk');
}