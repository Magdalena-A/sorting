function split(wholeArray) {

    /* your code here to define the firstHalf and secondHalf arrays */
    let splitnumber= Math.floor(wholeArray.length/2);
    let firstHalf=wholeArray.slice(0,splitnumber);
    let secondHalf=wholeArray.slice(splitnumber);
    return [firstHalf, secondHalf];
}

function merge(array1, array2) {
    let result = [];
    if (array1.length===0){
        return array2;
    }else if (array2.length===0){
        return array1;
    }else{
        if(array1[0]<array2[0]){
            return [array1.shift()].concat(merge(array1, array2));
        } else if (array1[0]>array2[0]){
            return [array2.shift()].concat(merge(array1, array2));
        }
    }
}

function mergeSort(array) {
    if (array.length===1){
        return array;
    } else{
        return merge(mergeSort(split(array)[0]),mergeSort(split(array)[1]));
    }

}