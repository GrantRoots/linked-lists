#!/usr/bin/node

class LinkedList {
    constructor() {
        this.node = new Node(null)
    }

    append(value) {
        let newNode = new Node(value)
        if (this.node.value === null) {
            this.node = newNode
            console.log(this.node)
            return
        }
        //get to null in list then append to last item
        while (this.node.nextNode !== null) {
            this.node = this.node.nextNode
            //this.node.nextNode ?
        }
        this.node.nextNode = newNode
        console.log(this.node)
    }

    prepend(value) {
        //make new node
        //make new node.next = head.next
        //make this.head.nextNode = this newNode
        let newNode = new Node(value)
        newNode.nextNode = this.node
        this.node = newNode
        console.log(this.node)
    }

    size() {
        let total = 0
        let originalList = this.node
        if (this.node.value === null) {
            return total
        }
        while (this.node.nextNode !== null) {
            total += 1
            this.node = this.node.nextNode
        }
        total++
        this.node = originalList
        console.log(total)
        return total
    }

    head() {
        console.log(this.node, 'head')
        return this.node
    }

    tail() {
        let originalList = this.node
        while (this.node.nextNode !== null) {
            this.node = this.node.nextNode
        }
        let tail = this.node
        this.node = originalList
        console.log(tail, 'tail')
        return tail
    }

    at(index) {
        let i = 0
        let originalList = this.node
        while (this.node !== null) {
            if (index === i) {
                let at = this.node
                this.node = originalList
                console.log(at, 'at')
                return at
            }
            this.node = this.node.nextNode
            i++
        }
        console.log('at doesnt exist')
        return null
    }

    pop() {
        while (this.node.nextNode !== null) {
            this.node = this.node.nextNode
        }
        let lastNode = this.node.value
        while (this.node.nextNode !== lastNode) {
            this.node = this.node.nextNode
        }
        this.node.nextNode === null
    }

    contains(value) {
        while (this.node.nextNode !== null) {
            if (value === this.node.value) {
                return true
            }
            this.node = this.node.nextNode
            // or is it this.value?
        }
        return false
    }
    
    find(value) {
        let i = 0
        while (this.node.nextNode !== null) {
            if (value === this.value) {
                return i
            }
            this.node = this.node.nextNode
            i += 1
            // or is it this.value?
        }
        return null
    }

    toString() {
        let list = ''
        while (this.node.nextNode !== null) {
            list += `( ${this.node.value} ) -> `
            this.node = this.node.nextNode
        }
        list += `( ${this.node.value} ) -> null`
        return list
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.nextNode = null
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend('rat')
list.size()
list.head()
list.tail()
list.at(2)

console.log(list.toString())