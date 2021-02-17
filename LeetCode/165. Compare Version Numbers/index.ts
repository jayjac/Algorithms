function compareVersion(version1: string, version2: string): number {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');
  const maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;
  for(let i = 0; i < maxLength; i++) {
    const v1 = i < arr1.length ? Number(arr1[i]) : 0;
    const v2 = i < arr2.length ? Number(arr2[i]) : 0;
    if(v1 < v2) return -1;
    if(v1 > v2) return 1;
  }
  return 0;
};