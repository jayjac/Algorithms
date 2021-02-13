function convert(s: string, numRows: number): string {
  if(s.length <= numRows || numRows === 1) return s;

  const map = {};
  let currentRow = 0;
  let growing = true;
  for(let i = 0; i < s.length; i++) {
    map[currentRow] = map[currentRow] || [];
    map[currentRow].push(s.charAt(i));
    if(currentRow === 0) growing = true;
    if(currentRow === numRows - 1) growing = false;

    currentRow = growing ? currentRow + 1 : currentRow - 1;
  }
  const results = [];
  for(let j = 0; j < numRows; j++) {
    results.push(map[j].join(''));
  }
  return results.join('')
};