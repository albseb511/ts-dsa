import createLL from "./createLL";
import LinkedList from "./LinkedList";
import printLL from "./printLL";

export function shiftLinkedList(head: LinkedList, k: number) {
  // * if k is 0, no change
  if (k === 0) {
    return head;
  }
  // * find total len
  let len = 1;
  let ll: LinkedList | null = head;
  // * we want to keep reference of last element for last step
  while (ll.next !== null) {
    ll = ll.next;
    len++;
  }
  // * if k is divisible by len, then also no change
  if (k % len === 0) {
    return head;
  }
  // * find offsetPos
  let offsetPos = len - (k % len);
  // * if negative k, then adjust offsetPos accordingly
  offsetPos = k > 0 ? offsetPos : offsetPos % len;

  // * reset curr to head to find tail
  let curr = head;
  for (let i = 1; i < offsetPos; i++) {
    curr = curr && curr.next;
  }
  // * curr can be null, TS
  if (curr) {
    // * set tail, and get new head
    let tail = curr;
    let newHead = curr.next;
    tail.next = null;

    // * set end of new head to the old head
    // * we used the ll to point to head
    ll.next = head;
    return newHead;
  }
}

const ll = createLL([1, 2, 3, 4]);

const res = shiftLinkedList(ll, -2);

printLL(res);
