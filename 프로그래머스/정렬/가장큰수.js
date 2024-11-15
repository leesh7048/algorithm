function solution(numbers) {
  let answer = numbers
    .map((c) => c + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  // numbers가 0으로만 이루어져있으면 0000으로 리턴되서 변환필요
  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([0, 0, 0, 0]));
