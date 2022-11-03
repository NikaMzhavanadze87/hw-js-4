function evenNumChecker(num){
    return num % 2 === 0;
}
let evenNmber = evenNumChecker(8);
console.log(evenNmber);

//#2-------------
function perimeterFinder(sideA, sideB){
    return (sideA*2) + (sideB*2);
}
let perimeter = perimeterFinder(2,4);
console.log(perimeter);

//#3-------------
function squareperimeterFinder(side){
    return 4*side;
}
let sqperimeter = squareperimeterFinder(4);
console.log(sqperimeter);

//#4--------------
function getRendomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  let rendomgenerator = getRendomNum(0,100);
  console.log(rendomgenerator);

  //#5------------
  
  function getCurrencySymbolFromCode(amount=0,currency){
    const userLanguage = window.navigator.language;
    return new Intl.NumberFormat(userLanguage,{
        style: "currency",
        currency: currency,
    }).format(amount);
 }