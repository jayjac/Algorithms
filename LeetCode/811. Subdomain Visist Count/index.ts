function subdomainVisits(cpdomains: string[]): string[] {
  const map = {};
  for(const domainCount of cpdomains) {
    const arr = domainCount.split(' ');
    const count = arr[0];
    const domain = arr[1].split('.');
    for(let i = 0; i < domain.length; i++) {
      const sub = domain.slice(i, domain.length).join('.');
      map[sub] = map[sub] || 0;
      map[sub] += Number(count);
    }
  }
  const keys = Object.keys(map);
  return keys.map(k => (`${map[k]} ${k}`))
};