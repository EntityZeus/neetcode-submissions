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
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head;
        let fast = head && head.next;
        while(fast) {
            if(fast === slow) return true;
            slow = slow.next;
            fast = fast.next && fast.next.next;
        }
        return false;
    }
}
