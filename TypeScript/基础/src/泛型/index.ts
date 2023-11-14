function take<T>(arr: T[], n: number): T[] {
  if (n >= arr.length) {
    return arr
  }

  const tempArray: T[] = []
  for (let i = 0; i < n; i++) {
    tempArray.push(arr[i])
  }
  return tempArray
}

console.log(take<number>([1, 2, 3, 4, 5], 3))