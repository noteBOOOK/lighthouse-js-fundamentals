const numberOfVowels = function(data){
  let numOfVowels = 0;
  const vowels = ["a", "e", "i", "o", "u"]
  let arr = data.toLowerCase().split("");
  for (let i = 0; i < data.length; i++){
    for (let j = 0; j < vowels.length; j++){
      if (vowels[j] === data[i]){
        numOfVowels += 1;
      }
    }
  }
  return numOfVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));