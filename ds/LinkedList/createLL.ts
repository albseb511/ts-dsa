import LinkedList from "./LinkedList";

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

export default createLL;