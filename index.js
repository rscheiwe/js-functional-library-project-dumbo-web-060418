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
      for (let el of coll)  {
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

    uniq: function(arr, sorted=false, callback=false) {
      if (callback === false) {
        return arr.filter((item, pos) => arr.indexOf(item) == pos)
      }
    },

    // Basically, we iterate over the array and, for each element,
    // check if the first position of this element in the array is
    // equal to the current position. Obviously, these two
    // positions are different for duplicate elements.


    flatten: function(collection, shallow=false, result=[]) {

        for (let el in collection) {
          if (shallow === false) {
            !Array.isArray(collection[el]) ? result.push(collection[el]) : fi.flatten(collection[el], false, result)
          } else {
            !Array.isArray(collection[el]) ? result.push(collection[el]) : collection[el].forEach((el) => result.push(el))
          }
        }

      return result
    },

    keys: function(obj) {
      let kys = []
      for (let el in obj) {
        kys.push(el);
      }
      return kys
    },

    values: function(obj) {
      let vals = []
      for (let el in obj) {
        vals.push(obj[el]);
      }
      return vals;
    },

    functions: function(obj) {
      let end = []
      for (let el in obj) {
        if (typeof obj[el] === 'function') {
          end.push(el)
        }
      }
      return end.sort()

    },




  }
})()

fi.libraryMethod()
