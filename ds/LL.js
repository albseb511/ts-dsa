var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.value = value;
        this.next = null;
    }
    return LinkedList;
}());
function reverseLL(head) {
    // pointer prev: set prev to null for first node reverse
    var prev = null;
    // pointer curr: for moving from start to end of LL
    var curr = head;
    // end loop when curr === null
    while (curr !== null) {
        // keep reference of next
        var next = curr.next;
        // move next pointer of curr to prev pointer
        curr.next = prev;
        // update previous poiner to current
        prev = curr;
        // move the curr pointer forward to the next pointer
        curr = next;
    }
    // prev pointer will be final head
    return prev;
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
var linkedList = createLL([0, 1, 2, 3, 4, 5]);
var reversedList = reverseLL(linkedList);
console.log(reversedList);
