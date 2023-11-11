function restoreArray(adjacentPairs: number[][]) {
  console.time("time");
  const map = new Map<number,number[]>();
  for (const pair of adjacentPairs) {
    if (!map.has(pair[0])) {
      map.set(pair[0], []);
    }
    if (!map.has(pair[1])) {
      map.set(pair[1], []);
    }
    map.get(pair[0])?.push(pair[1]);
    map.get(pair[1])?.push(pair[0]);
  }
  // get the starting point
  let start:number=0;
  for (const [k, v] of map) {
    if (v.length === 1) {
      start=k
      break;
    }
  }
  const result:number[] = []
  const visited = new Set<number>();
  // deep first search
  const dfs = (node: number) => {
    visited.add(node);
    result.push(node);
    for (const next of map.get(node)||[]) {
      if (!visited.has(next)) {
        dfs(next);
      }
    }
  }
  dfs(start)
  console.timeLog("time");
  return result;
}

const input1 = [[2,1],[3,4],[3,2]]
console.log(restoreArray(input1))
