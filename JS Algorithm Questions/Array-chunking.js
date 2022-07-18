// Given an array and a size, split the array items into a list of arrays of the given size.

// keep a reference to the last “chunk” and check its size as we loop through the array items


const chunk = (array, size) => {
    const chunks = [];
    
    for(let item of array) {
        const lastChunk = chunks[chunks.length -1];
        console.log(lastChunk)
        if(!lastChunk || lastChunk.length === size)chunks.push([item]);
        else lastChunk.push(item);
        console.log(chunks)
    }

    return chunks;
}



console.log(chunk([1, 2, 3, 4], 2));
// console.log(chunk([1, 2,3,4],3))

// Working 
// initially chunks=[] 
// item=1 lastChunk = undefined  chunks=[[1]]
// item=2 lastChunk = [1]  chunks=[[1,2]]
// item =3  lastChunk =[1,2] chunks = [[1,2],[3]]
// item =4 lastChunk=[3] chunks=[[1,2],[3,4]]


// Using the slice method 

const _chunk = (array, size) => {
	const chunks = [];
	let index = 0;

	while (index < array.length) {
		chunks.push(array.slice(index, index + size));
		index += size;
        console.log(chunks)
	}

	return chunks;
};

console.log(_chunk([1, 2, 3, 4], 2));
console.log(_chunk([1, 2, 3, 4], 3));


// Using a for loop

const __chunk = (array, size) => {
	const chunks = [];

	for (let i = 0; i < array.length; i += size) {
		chunks.push(array.slice(i, i + size));
	}

	return chunks;
};

console.log(__chunk([1, 2, 3, 4], 2));
console.log(__chunk([1, 2, 3, 4], 3));


// var my_arr = [3,16,2,18];
// function myFunction(elem){
//     return (elem + 5);
// }

// console.log(my_arr.map(myFunction));

// // alert(parseInt(010));
// // alert(+"010");
// // alert(+010);
// var foo ={
//     bar: function(){
//         return this.baz;
//     },
//     baz:1
// }

// (
//     function(){
//         return typeof arguments[0]()
//     }
// )
// foo.bar();