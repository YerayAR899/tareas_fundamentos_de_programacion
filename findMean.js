function findmean(array){
    let mean = 0;
    for(let i=0; i<=array.length-1; i++){
        mean += array[i];
    }
    return (mean/array.length).toFixed(2);
}

export {findmean};