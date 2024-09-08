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
        if (!value) return;
        const newNode = new Node(value);
        if (this.size < 1) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const currentTail = this.at(this.size);
            currentTail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    prepend(value) {
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
        if (this.size < 1) return;
        const newTail = this.at(this.size - 1);
        newTail.next = null;
        this.tail = newTail;
        this.size--;
    }

    contains(value) {
        if (!value) return false;
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
        if (!value) return null;
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
        let string = "";
        let tempNode = this.head;
        while (tempNode) {
            string += `( ${tempNode.data} ) -> `;
            tempNode = tempNode.next;
        }
        string += "( null )";
        return string;
    }

    insertAt(value, index) {
        if (!value || index < -1) return;

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

            nodeBeforeTarget.next = newNode;
            newNode.next = tempNode;
            this.size++;
        }
    }

    removeAt(index) {
        if (index < 1 || index > this.size) return;

        if (index == 1) {
            const newHead = this.head.next;
            this.head.next = null;
            this.head = newHead;
            this.size--;

            return;
        }

        let i = 1;
        let tempNode = this.head;
        let nodeBeforeTarget;
        while (i < index) {
            if (i == index - 1) {
                nodeBeforeTarget = tempNode;
            }
            tempNode = tempNode.next;
            i++;
        }

        if (index == this.size) {
            nodeBeforeTarget.next = null;
        } else {
            const nodeAfterTarger = tempNode.next;
            nodeBeforeTarget.next = nodeAfterTarger;
            tempNode.next = null;
        }

        this.size--;
    }
}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
