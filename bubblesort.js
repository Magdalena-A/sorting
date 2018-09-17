function bubbleSort(arr) {
    /* your code here */
    for (var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if (arr[i]>arr[j]){
                swap(arr,i,j);
            }
        }
    }
    return arr;
  
}

function swap(arr,i,j){
    let tempchar=arr[i];
    arr[i]=arr[j];
    arr[j]=tempchar;
    return arr;
}

// function bubbleSort(array) {
//     /* your code here */
//     for (var i=0; i<array.length; i++){
//         for(var j=i+1; j<array.length; j++){
//             let tempchar;
//             if (array[i]>array[j]){
//                 tempchar=array[i];
//                 array[i]=array[j];
//                 array[j]=tempchar;
//             }
//         }
//     }

//     return array;
  
// }