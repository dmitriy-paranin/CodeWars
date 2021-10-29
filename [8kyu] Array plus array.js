function arrayPlusArray(arr1, arr2) {
  let concatArray = arr1.concat(arr2);
  let sum = 0;
  for (let i = 0; i < concatArray.length; i++) {
    sum = sum + concatArray[i];
  };
   return sum; 
};

/*
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, b) => a + b);
}
*/