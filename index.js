fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(coll, callback) {
      // let newColl;

      for (let el in coll) {
        callback(coll[el])
      }
      return coll
    },

    map: function(coll, callback) {
      let arr = []
      for (let el in coll) {
        arr.push(callback(coll[el]))
      }
      return arr
    },

    reduce: function(coll, callback, acc=coll[0]) {
      // if (!acc){
      //   acc = coll[0]
      // }
      for (let el of coll){
      acc = callback(acc, el, coll)
      }
      return acc
    },

    find: function(collection, callback) {
      for(let el in collection){
        if (callback(collection[el])===true){
          return collection[el]
        }
      }

    },

    filter: function(collection, callback) {
      let filtered = []
      for(let el in collection){
        if (callback(collection[el]) === true){
          filtered.push(collection[el])
        }
      }
      return filtered
    },

    size: function(collection) {
      counter = 0
      for (let el in collection) {
        counter++
      }
      return counter
    },

    first: function(collection, n=1) {
      return (n === 1) ? collection[0] : collection.slice(0, n);
    },

    last: function(collection, n=1) {
      return (n===1) ? collection[collection.length-1] : collection.slice(Math.max(collection.length-n,1))
    },

    compact: function(collection) {
      let collectionCopy = [...collection]
      return collectionCopy.filter(Boolean)
    },

    sortBy: function(collection, callback) {
      let sortable = []
      for (let el in collection) {
        sortable.push(callback(collection[el]))
      }
      let sorted = sortable.sort(function(a,b) {
        return a-b;
      })
      return sorted
    },

    functions: function() {

    },

  }
})()

fi.libraryMethod()
