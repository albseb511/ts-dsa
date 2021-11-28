import LinkedList from "./LinkedList";

// 1 -> 2 -> 3 -> 4 -> 5
//           |         |
//           8 <- 7 <- 6

// * O(n) space complexity n
const findCyclicNode = (head: LinkedList) => {
  // Store each node in a Map
  let curr = head;
  let visited = new Map<LinkedList | null, Boolean>();
  while (true) {
    if (visited.has(curr)) {
      return curr;
    }
    visited.set(curr, true);
    if (curr.next) {
      curr = curr.next;
    }
  }
};

const findCyclicNodeAlternate = (head: LinkedList) => {
  // 2 pointers
  // * when one meets two,
  // * one travlled X + Y
  // * two has travelled 2X + 2Y
  // * the difference to the cyclic node is X
  // * so we move that X distance to match it
  let one: LinkedList | null = head.next!;
  let two: LinkedList | null = head.next!.next!;
  while (one !== two) {
    one = one!.next;
    two = two!.next!.next;
  }
  one = head;
  while (one !== two) {
    one = one!.next;
    two = two!.next;
  }
  return one;
};
