class Queue {
  constructor(){
    this.storage = {}
    this.head = 0
    this.tail = 0
  }

  size() {
    return this.list.length
  }

  enqueue(element){
    this.storage[this.tail] = element
    this.tail++
  }

  dequeue() {
    let removed = this.storage[this.head]
    delete this.storage[this.head]
    this.head++
    return removed
  }
}

const queue = new Queue()

queue.enqueue('apple')
queue.enqueue('banana')
queue.enqueue('pineapple')

console.log(queue)

queue.dequeue()
console.log(queue)

queue.enqueue('strawberry')

console.log(queue)