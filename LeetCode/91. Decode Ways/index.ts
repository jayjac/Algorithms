function numDecodingsRecursive(s: string, index: number, previous: number, beforePrevious: number) {
  const n = Number(s.charAt(index));

  if(index === 0) {
    //console.log("A");

    if(n === 0) return { previous: 0, beforePrevious: 0 }; //Not possible

    return { previous: 1, beforePrevious: 1 };
  }

  const pn = Number(s.charAt(index - 1));

  if(n === 0) {
    //console.log("B");
    if(pn === 0 || pn >= 3) return { previous: 0, beforePrevious: 0 }; //Not possible


    return index > 1 ? { previous: beforePrevious, beforePrevious } : { previous: 1, beforePrevious: 0 };
  }

  if(n >= 7) {
    //console.log("C");
    if(pn === 1) {
      return { previous: previous + beforePrevious, beforePrevious: previous };
    }

    return { previous, beforePrevious };
  }
  else {
    //console.log("D");
    if(pn === 0 || pn >= 3) {
      //console.log('here')
      return { previous, beforePrevious: previous };
    }
    return { previous: beforePrevious + previous, beforePrevious: previous };
  }
}

function numDecodings(s: string): number {

  let previousWays = 0;
  let beforePreviousWays = 0;

  for(let i = 0; i < s.length; i++) {
    const { previous, beforePrevious } = numDecodingsRecursive(s, i, previousWays, beforePreviousWays);
    if(!previous) return 0;

    //console.log('Previous is %d for %s', previous, s.charAt(i));

    previousWays = previous;
    beforePreviousWays = beforePrevious;
  }
  return previousWays;
};