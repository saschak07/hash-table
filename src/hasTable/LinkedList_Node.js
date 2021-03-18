class LinkedListNode{
    constructor(key,value){
        this.key = key;
        this.value = value
        this.next = null
    }
    toString(){
        return `[${this.key},${this.value}]`
    }
}
module.exports = LinkedListNode
