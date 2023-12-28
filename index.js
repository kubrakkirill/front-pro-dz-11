function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return true;
      }
    }
    return false;
  }
  
  function filter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  function reduce(arr, callback, initialValue) {
    if (arr.length === 0 && initialValue === undefined) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    let acc;
    if(initialValue === undefined){
      acc = arr[0];
    } else{
      acc = initialValue;
    }
    let firstIndex;
    if(initialValue === undefined){
      firstIndex = 1;
    } else{
      firstIndex = 0;
    }
    for (let i = firstIndex; i < arr.length; i++) {
      acc = callback(acc, arr[i]);
    }
    return acc;
  }
  
  const arr = [1, 2, 3];
  
  console.log(some(arr, el => el > 1));
  console.log(filter(arr, el => el > 1));
  console.log(reduce(arr, (sum, el) => sum + el, 0));
  