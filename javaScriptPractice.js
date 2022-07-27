// Write function below
function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return console.log(num);
}
factorial(6); 

/*
can also work without the...
  if (num === 0 || num === 1)
    return 1;*/
