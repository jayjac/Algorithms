function findSubstring(s: string, words: string[]): number[] {
  const minLength = words.length * words[0].length;
  if(minLength > s.length) return [];
  const map = {};
  for(const w of words) {
    const char = w.charAt(0);
    map[char] = map[char] || { [w] : 0 };
    map[char][w] = map[char][w] || 0;
    map[char][w]++;
  }
  console.log(map)
  return [];
};

//findSubstring("barfoothefoobarman", ["foo","bar"])

let arr = [1, 3, 2]
arr[37] = 35

arr.splice(37, 1)
console.log(arr.length)