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
        let prev = null;
        let node = head;

        while(node) {
            const nextNode = node.next;
            node.next = prev;
            prev = node;
            node = nextNode;
        }
        return prev;
    }
}
