const repeatNumbers = function(data){
  let result = "";
  for (let x = 0; x < data.length; x++){
    let outPut = "";
    let firstNumber = data[x][0];
    let secondNumber = data[x][1];
    if (x > 0){
      outPut += ", ";
    }
    for (var y = 0; y < secondNumber; y++){
      outPut += firstNumber;
    }
    result += outPut;
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));