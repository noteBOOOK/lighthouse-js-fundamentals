const camelCase = function(input){
  let result = "";
  for (let i = 0; i < input.length; i++){
    if (input[i] === " "){
      result += input[i+1].toUpperCase();
      i++;
    } else if (input[i] !== " "){
      result += input[i];
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));