import { findmean } from "./findMean.js";
let array = [];

for (let i=0; i<6000; i++){
    let firstDice = Math.floor(Math.random()*5+1);
    let secondDice = Math.floor(Math.random()*5+1);
    let total = firstDice+secondDice;
    array.push(total)
}
console.log(`la media de las ${array.length} tiradas de dados es ${(findmean(array))}`)

