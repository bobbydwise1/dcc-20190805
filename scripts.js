/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

Design a binary tree node class with the following methods:

   is_locked, which returns whether the node is locked
   lock, which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
   unlock, which unlocks the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.

You may augment the node to add parent pointers or any other property you would like. You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes. Each method should run in O(h), where h is the height of the tree.
*/

/*



*/

class node {
  constructor(value=0,parent=null,left=null,right=null) {
    this.value=value;
    this.parent=parent;
    this.left=left;
    this.right=right;
    this.locked=0; //0=not locked; 1=locked
  }

  is_locked() {
    return this.locked;
  }

  lock() {
    this.locked = 1;
    return 1;
  }

  unlock() {
    this.locked = 0;
    return 1;
  }

  addLeftChild(name) {
    this.left=name;
    this.left.parent=this;
    return 1;
  }

  addRightChild(name) {
    this.right=name;
    this.right.parent=this;
    return 1;
  }

  checkAncestor() {
    let count = 0;
    parent = this.parent;
    while (parent != null) {
      if (parent.locked === 1) {
        count++;
      }
      parent = parent.parent;
    }
    return count;
  }
//How does one loop through all the children to count all the locked ones?
  checkChildren() {
    let count = 0;
    childLeft = this.left;
    childRight = this.right;
    while (childLeft != null) {
      if (childLeft.locked === 1) {
        count++;
      }
      childLeft = childLeft.left;
    }
    while (childRight != null) {
      if (childRight.locked === 1) {
        count++;
      }
      childRight = childRight.right;
    }
  }
}

let node6 = new node(6);
let node5 = new node(5);
let node4 = new node(4);
let node3 = new node(3);
let node2 = new node(2);
let root = new node(1);
root.addLeftChild(node2);
root.addRightChild(node3);
root.left.addLeftChild(node4);
root.left.addRightChild(node5);
root.right.addLeftChild(node6);

$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
  $('#output-section-3').text(3);
});
