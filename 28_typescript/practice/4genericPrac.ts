function arrElement<T>(arr: T[], index: number): T {
  return arr[index];
}
console.log(arrElement<string>(['a'], 0));

function arrElement2<T>(arr: T[], index: number) {
  if (index >= arr.length) return false;
  else return arr[index];
}
console.log(arrElement2<string>(['a'], 1));
