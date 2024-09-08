const Node = require("./node");

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    append(value) {
        //  adds a new node containing value to the end of the list

        if (!value) return;
        const newNode = new Node(value);
        // if the size of the list is < 1, set both the head and tail to the node
        if (this.size < 1) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const currentTail = this.at(this.size);
            currentTail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
        // else just update the tail to the current node and increment the size.
    }

    prepend(value) {
        // adds a new node containing value to the start of the list
        if (!value) return;
        const newNode = new Node(value);

        if (this.size < 1) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const currentHead = this.head;
            this.head = newNode;
            this.head.next = currentHead;
        }

        // if the size of the list is < 1
        //      it means that the value to be added will be the head of the list. as well as the tail.
        //      increment the size
        // else
        //      it means the value will be replace the current head as the new head
        //      then the newHead.next will be the current.head
        //      increment the size.

        this.size++;
    }

    at(index) {
        if (index > 0) {
            if (index == 1) return this.head;

            let i = 1;
            let targetNode = this.head;

            while (i < index) {
                targetNode = targetNode.next;
                i++;
            }

            return targetNode;
        }
        return null;
    }

    pop() {
        //removes the last element from the list;

        if (this.size < 1) return;

        // node before the tail
        const newTail = this.at(this.size - 1);
        newTail.next = null;
        this.tail = newTail;
        this.size--;
        /**
         * if the size is < 1
         *      then do nothing
         * else
         *      traverse from the head to the node before the tail.
         *      set the currentNode.next to null
         *      set the current node as the new tail.
         *      and decrease the size
         */
    }

    contains(value) {
        if (!value) return false;
        //returns true if the passed in value is in the list and otherwise returns false.

        /**
         * loop through the list starting from the head up to the tail
         * each loop. make sure to check if the value is equal to the data of the current node.
         */
        let tempNode = this.head;

        while (tempNode) {
            if (tempNode.data == value) {
                return true;
            }

            tempNode = tempNode.next;
        }

        return false;
    }

    find(value) {
        // returns the index of the node containing value, or null if not found.'
        /**
         * loop through the list starting from the head
         */

        if (!value) return null;

        /**
         * loop through the list starting from the head up to the tail
         * each loop. make sure to check if the value is equal to the data of the current node.
         */
        let tempNode = this.head;
        let counter = 0;

        while (tempNode) {
            if (tempNode.data == value) {
                return counter;
            }

            tempNode = tempNode.next;
            counter++;
        }

        return null;
    }

    toString() {
        // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
        let string = "";
        let tempNode = this.head;

        while (tempNode) {
            string += `( ${tempNode.data} ) -> `;
            tempNode = tempNode.next;
        }
        string += "( null )";
        console.log(string);
        return string;
    }

    insertAt(value, index) {
        if (!value || index < -1) return;

        // that inserts a new node with the provided value at the given index.
        /**
         *  if the index is < the size - 1
         *      the node before the targetNode will be need to update the .next = newNode
         *      then the newNode.next will be the node at the current index
         *      update the size
         *
         *  if the index provide is > than the size - 1. just use the append.
         *  if the index provide = 0 then just use the prepend()
         */

        if (index == 0) {
            this.prepend(value);
            return;
        }

        if (index > this.size) {
            this.append(value);
            return;
        }

        if (index <= this.size) {
            const newNode = new Node();
            /**
             * the node before the targetNode will be need to update the .next = newNode
             *      then the newNode.next will be the node at the current index
             *      update the size
             */
            let nodeBeforeTarget;
            let tempNode = this.head;
            let i = 1;

            while (i < index) {
                if (i == index - 1) {
                    nodeBeforeTarget = tempNode;
                }

                tempNode = tempNode.next;
                i++;
            }

            // at the end of the loop. the tempNode will be equal to the target node
            nodeBeforeTarget.next = newNode;
            newNode.next = tempNode;
            this.size++;
        }
    }

    removeAt(index) {
        // that removes the node at the given index.
    }
}

const List = new LinkedList();
List.append("Dog");
List.prepend("Cat");
List.append("Tiger");
List.toString();
List.pop();
List.toString();
// List.insertAt("Lion", 0);
// List.insertAt("Elephant", List.size);
// List.toString();
// List.insertAt("Bird", List.size - 1);
// List.contains("Dog");
// List.toString();
// List.pop();
// List.toString();
