class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function reverseLL(head: LinkedList) {
  // pointer prev: set prev to null for first node reverse
  let prev: null | LinkedList = null;
  // pointer curr: for moving from start to end of LL
  let curr: null | LinkedList = head;
  // end loop when curr === null
  while (curr !== null) {
    // keep reference of next
    let next = curr.next;
    // move next pointer of curr to prev pointer
    curr.next = prev;
    // update previous poiner to current
    prev = curr;
    // move the curr pointer forward to the next pointer
    curr = next;
  }
  // prev pointer will be final head
  return prev;
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
