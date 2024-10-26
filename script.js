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
        //?????
        if (this.node.next === null) {
            
        }
        let current = this.node;
        let previous = null;

        // Traverse to the second last node
        while (current.nextNode) {
            previous = current;
            current = current.nextNode;
        }

        previous.nextNode = null; // Remove the last node
        console.log(this.node, 'pop')
        return this.node;
    }

    contains(value) {
        let originalList = this.node
        while (this.node !== null) {
            if (value === this.node.value) {
                this.node = originalList
                console.log('true contains')
                return true
            }
            this.node = this.node.nextNode
        }
        this.node = originalList
        console.log('false contains')
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

list.pop()

list.contains('rat')

console.log(list.toString())