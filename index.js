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
            const currentTail = this.at(this.size - 1);
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
        if (index > -1) {
            let i = 1;
            let targetNode = this.head;

            while (i <= index) {
                targetNode = targetNode.next;
                i++;
            }

            return targetNode;
        }
        return null;
    }

    pop() {
        //removes the last element from the list;
    }

    contains(value) {
        //returns true if the passed in value is in the list and otherwise returns false.
    }

    find(value) {
        // returns the index of the node containing value, or null if not found.
    }

    toString() {
        // epresents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    }

    insertAt(value, index) {
        // that inserts a new node with the provided value at the given index.
    }

    removeAt(index) {
        // that removes the node at the given index.
    }
}

const List = new LinkedList();
List.append("Dog");
// List.prepend("Cat");
List.append("Tiger");
