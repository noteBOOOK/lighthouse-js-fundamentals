function calculateRectangleArea(length, width){
  let area = 0;
  if (length < 0 || width < 0){
    return undefined;
  }
  area = length * width;
  return area;
}


function calculateTriangleArea(base, height){
  let area = 0;
  if (base < 0 || height < 0){
    return undefined;
  }
  area = base * height / 2;
  return area;
}


function calculateCircleArea(radius){
  let area = 0;
  if (radius < 0){
    return undefined;
  }
  area = Math.PI * (radius * radius);
  return area;
}