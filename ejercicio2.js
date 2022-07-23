let firstNumber = prompt("introduce un número");
let secondNumber = prompt("introduce otro número");

do{
        secondNumber = prompt(`introduce un número diferente a ${firstNumber}`)
    }
while (firstNumber==secondNumber)

if (firstNumber>secondNumber){
    console.log(`El número mas alto es ${firstNumber}`)
}
else{
    console.log(`el número mas alto es ${secondNumber}`)
}
