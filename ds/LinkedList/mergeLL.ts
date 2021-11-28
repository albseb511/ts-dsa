import LinkedList from "./LinkedList";
import createLL from "./createLL";
import printLL from './printLL';

  export function  mergeLL(headOne: LinkedList, headTwo: LinkedList) {
    // Write your code here.
      let one : LinkedList | null = headOne;
      let two : LinkedList | null = headTwo;
      let prevOne : null | LinkedList = null;
      while(one !== null && two !== null){
        if(one.value < two.value){
            prevOne = one;
            one = one.next;
        }
        else{
						if(prevOne !==null){
							prevOne.next = two;
						}
						prevOne = two;
            two = two.next;
						prevOne.next = one;
        }
      }
    if(one === null) {
			prevOne!.next = two
		}
    return headOne.value < headTwo.value ? headOne: headTwo;
  }
  


  const one = createLL([1,2,4,6,9,10]);
  const two = createLL([3,5,7]);

  const res = mergeLL(one,two)

  printLL(res)

  export default mergeLL