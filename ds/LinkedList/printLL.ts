import LinkedList from "./LinkedList";

const printLL = (ll: LinkedList) => {
  let ptr = ll;
  while (ptr !== null) {
    console.log(ptr.value);
    ptr = ptr.next;
  }
};

export default printLL;
