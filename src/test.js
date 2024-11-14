// function memoize(fn) {
//   const cache = new Map();

//   return function (...args) {
//     const key = JSON.stringify(args);

//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     const result = fn(...args);
//     cache.set(key, result);

//     return result;
//   };
// }

// const newFnc = (val) => {
//   return val * 2;
// };

// const memoizeFunction = memoize(newFnc);

// console.log(memoizeFunction(5));
// console.log(memoizeFunction(10));

// class Cache {
//   constructor() {
//     this.cache = new Map();
//   }

//   put(key, value) {
//     if (this.cache.has(key)) {
//       this.cache.delete(key);
//     }
//     this.cache.set(key, value);
//   }

//   mostRecent() {
//     const mostRecentKey = Array.from(this.cache.keys()).pop();
//     return this.cache.get(mostRecentKey);
//   }

//   leastRecent() {
//     const leastRecentKey = this.cache.keys().next().value;
//     return this.cache.get(leastRecentKey);
//   }
// }

// const cacheList = new Cache();

// cacheList.put(1, "A")
// cacheList.put(2, "B")
// cacheList.put(3, "C")

// console.log(cacheList.mostRecent());
// console.log(cacheList.leastRecent());