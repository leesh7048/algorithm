function solution(numbers) {
  var answer = 0;
  const arr = numbers.split("");
  console.log(arr);

  const checkPrimeNumber = (number) => {
    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      const remainder = number % i;
      if (remainder === 0) return false;
    }
    return true;
  };
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        arr2.push(arr[i] + arr[j]);
      }
    }
  }
  let arr3 = [];
  console.log(arr2);
  arr2.map((a) => {
    checkPrimeNumber(Number(a)) && arr3.push(a);
  });
  console.log(arr3);

  return answer;
}
solution("011");
