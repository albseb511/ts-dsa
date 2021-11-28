import LinkedList from "./LinkedList";

const removeDuplicatesFromLinkedList = (linkedList: LinkedList) => {
  let curr: LinkedList | null = linkedList;
  while (curr !== null) {
    let uniq: LinkedList | null = curr.next;
    while (uniq !== null && uniq.value === curr.value) {
      uniq = uniq.next;
    }
    curr.next = uniq;
    curr = uniq;
  }
  return linkedList;
};
