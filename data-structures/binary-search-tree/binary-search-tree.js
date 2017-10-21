/*
 * Binary Search Tree implementation in JavaScript
 * Copyright (c) 2009 Nicholas C. Zakas
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * A binary search tree implementation in JavaScript. This implementation
 * does not allow duplicate values to be inserted into the tree, ensuring
 * that there is just one instance of each value.
 * @class BinarySearchTree
 * @constructor
 */

function BinarySearchTree() {
  /**
        * Pointer to root node in the tree.
        * @property _root
        * @type Object
        */
  this._root = null;
}

BinarySearchTree.prototype = {
  // restore constructor
  constructor: BinarySearchTree

  //---------------------------------------
  // Private members
  //---------------------------------------

  /**
     * Appends some data to the appropriate point in the tree. If there are no
     * nodes in the tree, the data becomes the root. If there are other nodes
     * in the tree, then the tree must be traversed to find the correct spot
     * for insertion. 
     * @param {variant} value The data to add to the list.
     * @return {Void}
     * @method add
     */
  add: function(value) {
    //create a new item object, place data in
    var node = {
        value: value,
        left: null, 
        right: null
    };

    // used to traverse the structure
    var current;

    // special case: if tree is empty
    if(this._root === null) {
        //this is the right place
        this._root = node;
    } else {
        current = this._root;
        while(true) {
            // if the specified value is less than the current's, go left
            if(value < current.value) {
                //if there is no left, then new node belongs here
                if(current.left === null) {
                    current.left = node;
                    break;
                } else {
                    current = current.left;
                }
              // if specified value is greater than current's, go right
            } else if(value > current.value) {
                // if there is no right, then new node belongs here
                if(current.right === null) {
                    current.right = node;
                    break;
                } else {
                    current = current.right;
                }
            //if the new value is equal to the current one, just ignore
            } else{
                break;
            }
        }
    }
  },

  /**
   * Determines ifthe given value is present in the tree.
   * @param {variant} value The value to find.
   * @return {Boolean} True if the value is found, false if not.
   * @method contains
   */
  contains: function(value) {
    var found = false,
        current = this._root;

    // check if there is a node to search
    while(!found && current) {
        //if value is less than current's , go left
        if(value < current.value) {
            current = current.left;
        // if value is greater than current's, go right
        } else if(value > current.value) {
            current = current.right;
        // values are equal, found it
        } else {
            found = true;
        }
    }
    //only proceed if the node was found
    return found;
  }
};
