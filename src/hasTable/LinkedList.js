const LinkedListNode = require('./LinkedList_Node')
class LinkedList{
    constructor(){
        this.head = null
    }

    append(key,value){
        let newNode = new LinkedListNode(key,value)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head
        while(current){
            current = current.next
            if(!current.next){
                current.next = newNode
                return
            }
        }
    }
    find(key){
        let current = this.head
        let found_key = false
        while(current){
            if(current.key === key){
                found_key = true
                return current
            }
            current = current.next
        }
        if(!found_key){
            return undefined
        }
    }
    delete(key){
        let current = this.head
        let previous = this.head
        let found_key = false
        while(current){
            if(current.key === key){
                found_key = true
                previous.next = current.next
                return current
            }
            current.next
        }
        if(!found_key){
            return undefined
        }
    }
}
module.exports = LinkedList