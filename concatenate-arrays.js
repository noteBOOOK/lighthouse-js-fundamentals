function concat (first, second){
  let fullList = [];
  if (first.length === 0){
    for (let s = 0; s < second.length; s++){
      fullList.push(second[s]);
    }
  } else if (second.length === 0){
    for (let f = 0; f < first.length; f++){
      fullList.push(first[f]);
    }
  } else {
    for (let i = 0; i < first.length; i++){
      fullList.push(first[i]);
    }
    for (let j = 0; j < second.length; j++){
      fullList.push(second[j]);
    }
  }
  return fullList;
}
console.log(concat([1,2,3],[]));