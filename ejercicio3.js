const array = [1, 2, 111, 122,7,9,11,300,9000];
let oddNumber = 0;
let biggerThan100 = 0;

for (let i=0; i<array.length; i++){
        if (array[i]%2 !=0){
            oddNumber++;
        }if(array[i]>=100){
            biggerThan100++;
        }
    }

console.log(`Hay un total de ${oddNumber} números impar y ${biggerThan100} números mayores que 100`);

