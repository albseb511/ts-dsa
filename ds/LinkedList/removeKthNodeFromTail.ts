import LinkedList from "./LinkedList";

const removeKthNodeFromTail = (head: LinkedList, k: number) => {
  // brute force?
  let len = 0;
  let ll: LinkedList | null = head;
  while (ll !== null) {
    ll = ll.next;
    len++;
  }

  let pos = len - k;

  console.log(pos, len, k);
  ll = head;
  if (pos === 0) {
    head.value = head.next!.value;
    head.next = head.next!.next;
    return head;
  }

  for (let i = 1; i < pos; i++) {
    ll = ll!.next;
    console.log(i);
  }
  let tmp = ll!.next;
  ll!.next = tmp!.next;
  return head;
};

const removeKthNodeFromTailAlter = (head: LinkedList, k: number) => {
  // * two pointer
  // * create an offset for the two pointers
  // * move second pointer and first pointer together till second reaches the end
  // * change reference of next in first pointer

  let len = 1;
  let one: LinkedList = head;
  let two: null | LinkedList = head;
  for (let i = len; i <= k; i++) {
    two = two.next!;
    len++;
  }
  if (two === null) {
    head.value = head.next!.value;
    head.next = head.next!.next;
    return head;
  }
  while (two.next !== null) {
    two = two.next;
    one = one.next!;
  }
  one.next = one.next!.next;

  return head;
};
