function solution(n, computers) {
  let visited = [];
  let answer = 0;

  function dfs(i) {
    console.log(visited[i]); // undefined falsy

    visited[i] = true;
    for (let j = 0; j < computers[i].length; j++) {
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}

solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);
