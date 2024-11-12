function solution1(word) {
  let vowels = ["A", "E", "I", "O", "U"];
  let dictionary = [];
  let count = 0;

  const dfs = (cur, len) => {
    count++;
    if (len > 5) return;

    dictionary.push(cur);

    for (let i = 0; i < vowels.length; i++) {
      dfs(cur + vowels[i], len + 1);
    }
  };

  return dfs("", 0);
}
function solution2(word) {
  const arr = ["A", "E", "I", "O", "U"];
  let dictionary = [];
  let count = 0;
  let isEnd = false;

  const dfs = (current, length) => {
    if (current == word) isEnd = true;
    if (isEnd) return count;
    if (length > 5) return;
    count++;
    dictionary.push(current);

    for (let i = 0; i < arr.length; i++) {
      dfs(current + arr[i], length + 1);
    }
    return count;
  };

  let answer = dfs("", 0);
  return answer;
}
