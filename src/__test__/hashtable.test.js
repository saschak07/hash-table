const { test, expect } = require('@jest/globals')
const hashTable = require('../hasTable/Hash_Table')

test('test insertion & retrieval to hashtable',() => {
    const newHashTable = new hashTable()
    newHashTable.put('saswata','chaks')
    expect(newHashTable.get('saswata').value).toBe('chaks')
})