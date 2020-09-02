function lastIndexOf(array, value){
  let output = 0;
  let match = false;
  if (array.length === 0){
    return output = -1;
  } else {
    for (let i = 0; i < array.length; i++){
      if (array[i] === value){
        output = i;
        match = true;
      }
    }
  }
  if (match){
    return output;
  } else {
    return output = -1;
  }
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1));