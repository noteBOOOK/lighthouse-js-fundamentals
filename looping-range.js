function range (start, end, step){
  let array = [];
  if ((start === undefined || step === undefined || end === undefined) || (start > end) || (step <= 0)){
    return [];
  } else {
    for (let i = start; i <= end; i += step){
      array.push(i);
    }
  }
  return array;
}


console.log(range(0, 10, 2));