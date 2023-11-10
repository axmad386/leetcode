// problems: https://leetcode.com/problems/add-two-numbers/
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const arrToList = (arr: number[]) =>
  arr.reverse().reduce((a: ListNode | null, b) => {
    if (a == null) {
      return new ListNode(b);
    }
    return new ListNode(b, a);
  }, null);
const listToArr = (l: ListNode | null) => {
  const arr: number[] = [];
  while (l) {
    arr.push(l.val);
    l = l.next;
  }
  return arr;
};
const listToBigint = (l: ListNode | null) => {
  let sum = BigInt(0);
  let iteration = 0;
  while (l) {
    sum += BigInt(BigInt(l.val) * BigInt(10) ** BigInt(iteration));
    l = l.next;
    iteration++;
  }
  return sum;
};
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const sum = listToBigint(l1) + listToBigint(l2);
  return sum
    .toString()
    .split("")
    .reduce((a: ListNode | null, b) => {
      if (a == null) {
        return new ListNode(Number(b));
      }
      return new ListNode(Number(b), a);
    }, null);
}

const l1 = arrToList([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]);
const l2 = arrToList([5, 6, 4]);
console.log(listToArr(addTwoNumbers(l1, l2)));
