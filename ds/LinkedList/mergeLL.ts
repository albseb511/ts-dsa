import LinkedList from "./LinkedList";
import createLL from "./createLL";
import printLL from "./printLL";

const mergeLL = (headOne: LinkedList, headTwo: LinkedList) => {
  // Write your code here.
  let one: LinkedList | null = headOne;
  let two: LinkedList | null = headTwo;
  let prevOne: null | LinkedList = null;
  while (one !== null && two !== null) {
    if (one.value < two.value) {
      prevOne = one;
      one = one.next;
    } else {
      if (prevOne !== null) {
        prevOne.next = two;
      }
      prevOne = two;
      two = two.next;
      prevOne.next = one;
    }
  }
  // incase one is smaller than two, append two to one
  if (one === null) {
    prevOne!.next = two;
  }
  return headOne.value < headTwo.value ? headOne : headTwo;
};

const mergeLLRecursive = (headOne: LinkedList, headTwo: LinkedList) => {
  __recurvemergeLL(headOne, headTwo, null);
  return headOne.value < headTwo.value ? headOne : headTwo;
};

const __recurvemergeLL = (
  one: null | LinkedList,
  two: null | LinkedList,
  prevOne: null | LinkedList
) => {
  // * ending condition if one is null
  if (one === null) {
    prevOne!.next = two;
  }
  // * end if two has reached end
  if (two === null) {
    return;
  }
  if (one.value < two.value) {
    prevOne = one;
    // * move one pointer ahead
    __recurvemergeLL(one.next, two, prevOne);
  } else {
    // * if prev pointer is not null (first time), override the prevOne.next to two
    if (prevOne !== null) {
      prevOne.next = two;
    }
    // * move prevOne to the next so as to move the inserted nodes pointer to the value of current one
    prevOne = two;
    // * move two pointer ahead
    const newTwo = two.next;
    // * point the inserted value to the correct node
    prevOne.next = one;
    __recurvemergeLL(one, newTwo, prevOne);
  }
};

const one = createLL([1, 2, 4, 6, 9, 10]);
const two = createLL([3, 5, 7]);

const res = mergeLLRecursive(one, two);

printLL(res);

export default mergeLL;
