class LinkedList {
    constructor() {
        this.head = new Node()
        this.node = this.head
    }

    append(value) {
        let newNode = new Node(value)
        //get to null in list then append to last item
        while (this.nextNode !== null) {
            this.node = this.nextNode
        }
        this.nextNode = newNode
    }

    prepend(value) {
        //make new node
        //make new node.next = head.next
        //make this.head.nextNode = this newNode
        let newNode = new Node(value)
        newNode.nextNode = this.head.nextNode
        this.head.nextNode = newNode
    }

    size() {

    }

    head() {

    }

    tail() {

    }

    at(index) {

    }

    pop() {

    }

    contains(value) {

    }
    
    find(value) {

    }

    toString() {

    }
}

class Node {
    constructor(value) {
        this.value === null
        this.nextNode === null
    }
}