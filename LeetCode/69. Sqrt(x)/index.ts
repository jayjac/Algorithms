// function mySqrt(x: number): number {
//     if(x < 2) return x;
//     const half = Math.round(x / 2);
//     const start = x >= 100000000 ? 10000 : x >= 1000000 ? 1000 : x >= 10000 ? 100 : x >= 100 ? 10 : 1;
//     for(let i = start; i <= half + 1; i++) {
//         if(i * i > x) return i - 1;
//     }
// };

function mySqrt(x: number): number {
    if(x < 2) return x;
    let half = Math.round(x / 2);
    while(half * half > x) {
        half = Math.round(half / 2);
    }
    if(half * half === x) return half;
    while(half * half < x) {
        half++;
    }
    return half * half === x ? half : half - 1;
}
