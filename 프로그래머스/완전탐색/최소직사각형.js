const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

function solution(sizes) {
  let arr = sizes.map(([a, b]) => {
    if (a < b) {
      let x = 0;
      x = a;
      a = b;
      b = x;
      return [a, b];
    }
    return [a, b];
  });
  let w = 0;
  let h = 0;

  for (let i = 0; i < arr.length; i++) {
    w < arr[i][0] ? (w = arr[i][0]) : w;
    h < arr[i][1] ? (h = arr[i][1]) : h;
  }
  return w * h;
}
solution(sizes);
