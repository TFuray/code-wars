class Queue {
  constructor(){
    this.list = []
  }

  size() {
    return this.list.length
  }

  enqueue(item){
    this.list.push(item)
  }

  dequeue() {
    return this.list.shift()
  }
}