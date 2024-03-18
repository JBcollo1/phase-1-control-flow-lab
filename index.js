function scuberGreetingForFeet(distance){
  // Write your code here!
  if(distance <= 400){
    return `This one is on me!`
  }else if(distance > 400 && distance < 2000){
    return 'That will be twenty bucks.'
  }else if(distance > 2000 && distance <= 2500){
    return  `I will gladly take your thirty bucks.`
  }else if(distance > 2500){
    return 'No can do.'
  }
  }


let distance = 6000
console.log(scuberGreetingForFeet(distance))

function ternaryCheckCity(city){
  // Write your code here!
  
 return city === "NYC" ? "Ok, sounds good." : "No go."
}
let city = "NYC"
console.log(ternaryCheckCity(city))

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case `generous`:
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.'
  }
}