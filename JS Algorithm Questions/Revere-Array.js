// Given an array of items, reverse the order.

const reverseArray = array =>{
    for(let i = 0; i < array.length/2; i++){
        const temp = array[i]
        array[i] = array[array.length -1 -i]
        array[array.length -1 -i] = temp
    }
    return array
}

console.log(reverseArray([1, 2, 3, 4, 5]))

// We can use destrucuturing assignment with array matching

const _reverseArray = array =>{
    for(let i=0;i<array.length/2;i++){
        [array[i],array[array.length -1 -i]] = [array[array.length -1 -i],array[i]]
    }
    return array
}

console.log(_reverseArray([1, 2, 3, 4, 5]))
