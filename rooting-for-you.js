const judgeVegetable = function(vegetables, metric){
  vegetables.sort(function(a, b){
    return b[metric] - a[metric];
  })
  return vegetables[0].submitter;
}
/*
vegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]
metric = 'd'

results = judgeVegetable(vegetables, metric);

console.log(results);
*/