import LinkedList from "./LinkedList";

export function sumOfLL(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
  const sum = linkedListOne.value + linkedListTwo.value;
  const carry = sum > 9 ? 1 : 0;
  const output = new LinkedList(sum % 10);
  console.log(sum, carry, output, linkedListOne.value, linkedListTwo.value);
  __recursive(output, linkedListOne.next, linkedListTwo.next, carry);

  return output;
}

function __recursive(
  output: LinkedList,
  linkedListOne: LinkedList | null,
  linkedListTwo: LinkedList | null,
  carry: number
) {
  if (!linkedListOne && !linkedListTwo) {
    if (carry) {
      output.next = new LinkedList(carry);
    }
    return;
  }
  const sum =
    (linkedListOne === null ? 0 : linkedListOne.value) +
    (linkedListTwo === null ? 0 : linkedListTwo.value) +
    carry;
  const newCarry = sum > 9 ? 1 : 0;
  output.next = new LinkedList(sum % 10);
  console.log(
    sum,
    newCarry,
    output,
    linkedListOne?.value,
    linkedListTwo?.value
  );
  __recursive(
    output.next,
    linkedListOne === null ? null : linkedListOne.next,
    linkedListTwo === null ? null : linkedListTwo.next,
    newCarry
  );
}

export function sumIterative(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList
) {
  const sum = linkedListOne.value + linkedListTwo.value;
  let carry = sum > 9 ? 1 : 0;

  const output = new LinkedList(sum % 10);
  let curr = output;
  let one: LinkedList | null = linkedListOne.next;
  let two: LinkedList | null = linkedListTwo.next;

  while (one !== null || two || carry !== 0) {
    const sum =
      (one === null ? 0 : one.value) + (two === null ? 0 : two.value) + carry;
    curr.next = new LinkedList(sum % 10);
    curr = curr.next;
    carry = sum > 9 ? 1 : 0;
    one = one === null ? null : one.next;
    two = two === null ? null : two.next;
  }

  return output;
}
