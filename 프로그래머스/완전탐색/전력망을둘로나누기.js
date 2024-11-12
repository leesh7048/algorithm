function dfs(graph, v, visited) {
  visited[v] = true;
  let count = 1;
  for (let node = 1; node <= graph.length; node++) {
    if (graph[v][node] == 1 && !visited[node]) {
      count += dfs(graph, node, visited);
    }
  }
  return count;
}

function solution(n, wires) {
  let answer = n;
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  for ([v1, v2] of wires) {
    graph[v1][v2] = 1;
    graph[v2][v1] = 1;
  }
  for ([v1, v2] of wires) {
    graph[v1][v2] = 0;
    graph[v2][v1] = 0;

    const visited = Array(n + 1).fill(false);

    const count1 = dfs(graph, v1, visited);
    const count2 = n - count1;
    answer = Math.min(answer, Math.abs(count1 - count2));

    graph[v1][v2] = 1;
    graph[v2][v1] = 1;
  }
  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
