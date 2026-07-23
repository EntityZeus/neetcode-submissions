/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let tempNode = head;
        let prevNode = null;

        while(tempNode) {
            const nextNode = tempNode.next;
            tempNode.next = prevNode;
            prevNode = tempNode;
            tempNode = nextNode;
        }
        return prevNode;
    }
}
