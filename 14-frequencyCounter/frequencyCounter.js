function frequencyCounter(word) {
  let map = new Map()
  let charArray = [...word]
  charArray.forEach(val => {
    map.has(val)?map.set(val, map.get(val)+1): map.set(val, 1)
  })
  return map
}

console.log(frequencyCounter("appppppppppppppleeeeee"))
// Do not edit this line;
module.exports = frequencyCounter;
