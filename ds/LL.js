// This is an input class. Do not edit.
var LinkedList = /** @class */ (function () {
  function LinkedList(value) {
    this.value = value;
    this.next = null;
  }
  return LinkedList;
})();
function reverseLinkedList(head) {
  // Write your code here.
  var prev = null;
  while (head.next !== null) {
    var curr = head; // 0
    var next = curr.next; // 1
    curr.next = prev;
    prev = curr;
    if (next === null) {
      break;
    }
    head = next;
  }
  head.next = prev;
  return head;
}
var createLL = function (arr) {
  var head = new LinkedList(arr[0]);
  var ptr = head;
  for (var i = 1; i < arr.length; i++) {
    var curr = new LinkedList(arr[i]);
    ptr.next = curr;
    ptr = curr;
  }
  return head;
};
var ll = createLL([0, 1, 2, 3, 4, 5]);
var res = reverseLinkedList(ll);
console.log(res);
