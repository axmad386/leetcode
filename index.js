function isReachableAtTime(sx, sy, fx, fy, t) {
  const dx = Math.abs(fx - sx);
  const dy = Math.abs(fy - sy);
  // const sorter = Math.min(dx, dy);
  // let tt = t;
  // tt -= sorter;
  // const exceed = tt - Math.abs(dx - dy);
  // return exceed > 0 && (t - exceed) % 2 == 0;
  const longest = Math.max(dx, dy);
  if (dx == 0 && dy == 0) {
    return t > 1;
  }
  return t >= longest;
}
console.log(isReachableAtTime(1, 2, 1, 2, 1));
console.log(isReachableAtTime(2, 4, 7, 7, 6));
console.log(isReachableAtTime(3, 1, 7, 3, 3));
