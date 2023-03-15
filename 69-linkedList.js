class LinkedList {
  constructor() {
    this.head = this.tail = null
  }

  append(value) {

    if (!this.tail) {
      this.head = this.tail = new Node(value)
    }

    else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
    }
  }
  reverseList() {
    let current = this.head
    let prev = null
    while (current) {
      const temp = current.next
      current.next = prev
      prev = current
      current = temp
    }
    return prev
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value
    this.next = next || null
  }
}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3) 

list.reverseList()
// Current: 1
// Previous: Null
// Temp: 2


var reverseList = (head, prev = null) => {
  while (head) {
    const temp = head.next
    head.next = prev
    prev = head
    head = temp
  }
  return prev
}