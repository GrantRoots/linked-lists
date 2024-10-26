#!/usr/bin/node

class LinkedList {
    constructor() {
        this.node = new Node(null)
    }

    append(value) {
        let newNode = new Node(value)
        //get to null in list then append to last item
        while (this.nextNode !== null) {
            this.node = this.nextNode
            //this.node.nextNode ?
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
        let total = 0
        while (this.nextNode !== null) {
            total += 1
            this.node = this.nextNode
            // or is it this.value?
        }

        return total
    }

    head() {
        return this.node
    }

    tail() {
        while (this.nextNode !== null) {
            this.node = this.nextNode
        }
        return this.node
    }

    at(index) {
        let i = 0
        while (this.nextNode !== null) {
            if (index === i) {
                return this.value
            }
            this.node = this.nextNode
            i += 1
            // or is it this.value?
        }
        return 'Doesnt Exist'
    }

    pop() {
        while (this.nextNode !== null) {
            this.node = this.nextNode
        }
        let lastNode = this.value
        //this.node.value?
        while (this.nextNode !== lastNode) {
            this.node = this.nextNode
        }
        this.nextNode === null
    }

    contains(value) {
        while (this.nextNode !== null) {
            if (value === this.value) {
                return true
            }
            this.node = this.nextNode
            // or is it this.value?
        }
        return false
    }
    
    find(value) {
        let i = 0
        while (this.nextNode !== null) {
            if (value === this.value) {
                return i
            }
            this.node = this.nextNode
            i += 1
            // or is it this.value?
        }
        return null
    }

    toString() {
        let list = ''
        while (this.nextNode !== null) {
            list += `( ${this.value} ) -> `
        }
        list += 'null'
        return list
    }
}

class Node {
    constructor(value) {
        this.value === value
        this.nextNode === null
    }
}

//const list = new LinkedList();

//console.log('test')

//list.append("dog");

//console.log(list.toString())