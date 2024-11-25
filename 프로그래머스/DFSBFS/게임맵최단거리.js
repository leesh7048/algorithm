const direction = [
  [-1, 0], // 상
  [1, 0], // 하
  [0, 1], // 우
  [0, -1], // 좌
];

function solution(maps) {
  var visited = Array.from({ length: maps.length + 1 }, () =>
    Array(maps[0].length).fill(0)
  );

  function bfs(start) {
    var q = [];
    q.push(start);
    visited[start[0]][start[1]] = true;

    while (q.length > 0) {
      var v = q.shift();

      if (v[0] === maps.length - 1 && v[1] === maps[0].length - 1) {
        return v[2];
      }

      for (var d = 0; d < 4; d++) {
        var next = [v[0] + direction[d][0], v[1] + direction[d][1], v[2] + 1]; // [-1, 0, 2]
        if (
          next[0] > -1 &&
          next[0] < maps.length &&
          next[1] > -1 &&
          next[1] < maps[0].length &&
          !visited[next[0]][next[1]] &&
          maps[next[0]][next[1]]
        ) {
          // console.log(next);
          q.push(next);
          visited[next[0]][next[1]] = true;
        }
      }
    }
    return -1;
  }
  return bfs([0, 0, 1]); // y, x, distance
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
