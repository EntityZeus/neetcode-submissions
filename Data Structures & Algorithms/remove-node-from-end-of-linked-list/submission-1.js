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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let node = head;
        let len = 0;

        while(node) {
            len+=1;
            node = node.next;
        }
        if(len === 1) {
            return null;
        }

        let index = Math.max(0, len - n);
        if(index === 0) return head.next;
        let currIndex = 0;
        node = head;
        let prev = { val: 0, next: null};
        while(node) {
            const next = node.next;
            if(index === currIndex) {
                prev.next = next;
                break;
            } else {
                prev = node;
                node = node.next;
                currIndex+=1;
            }
        }
        return head;
    }
}
