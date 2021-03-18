const default_size = 32
const LinkedList = require('./LinkedList')
class hashTable{
    constructor(tableSize = default_size){
        this.buckets = Array(tableSize).fill(null).map(()=>new LinkedList())
        this.keys = {}
    }

    hash(key){
        const hash = Array.from(key).reduce((accumulator,keyChar) =>
         accumulator+keyChar.charCodeAt(0),0)
        return hash%this.buckets.length;
    }
    put(key,value){
        const hashKey = this.hash(key)
        this.keys[key] = hashKey
        const node = this.buckets[hashKey].find(key)
        if(node){
            this.buckets[hashKey].delete(key)
            this.buckets[hashKey].append(key,value)
            return
        }
        this.buckets[hashKey].append(key,value)
    }
    get(key){
        const hashKey = this.hash(key)
        const node = this.buckets[hashKey].find(key)
        return {key: node.key, value: node.value}
    }
}
module.exports = hashTable