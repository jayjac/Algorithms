function findIn(s: string, map: Object, wordLength: number) {
  for(let i = 0; i < s.length; i += wordLength) {
    const sub = s.substr(i, wordLength);
    if(!map[sub]) {
      return false;
    }
    if(map[sub]) {
      map[sub]--;
    }

    if(map[sub] === 0) {
      delete map[sub];
    }
    if(!Object.keys(map).length) {
      return true
    };
  }
  return false;
}


function findSubstring(s: string, words: string[]): number[] {

  const minLength = words.length * words[0].length;
  if(minLength > s.length) return [];

  const map = {};
  for(const w of words) {
    map[w] = map[w] || 0;
    map[w]++;
  }
  //console.log(map)
  const indices = [];

  for(let i = 0; i < s.length - minLength + 1; i++) {
    if(findIn(s.substr(i), {...map}, words[0].length)) {
      indices.push(i);
    }
  }

  return indices;

};
