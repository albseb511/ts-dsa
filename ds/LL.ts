class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function reverseLL(head: LinkedList) {
  // Write your code here.
  let prev: null | LinkedList = null;
  while (head.next !== null) {
    let curr = head; // 0
    let next = curr.next; // 1
    curr.next = prev;
    prev = curr;
    if (next === null) {
      break;
    }
    head = next;
  }
  head.next = prev;
  return head;
}

const createLL = (arr: Array<number>) => {
  let head = new LinkedList(arr[0]);
  let ptr = head;
  for (let i = 1; i < arr.length; i++) {
    let curr = new LinkedList(arr[i]);
    ptr.next = curr;
    ptr = curr;
  }
  return head;
};

const linkedList = createLL([0, 1, 2, 3, 4, 5]);

const reversedList = reverseLL(linkedList);

console.log(reversedList);
