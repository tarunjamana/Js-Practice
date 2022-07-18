// Merge sort uses the concept of divide-and-conquer to sort the given list of elements. 
// It breaks down the problem into smaller subproblems until they become simple enough to solve directly.

// Here are the steps Merge Sort takes:
// 1. Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).
// 2. Continue dividing the subarrays in the same manner until you are left with only single element arrays.
// 3. Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.
// 4. Repeat step 3 unit with end up with a single sorted array.

function merge(left, right) {
    let arr=[]
    while (left.length && right.length) {
        if(left[0]<right[0]) {
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    console.log(arr);
    console.log(left);
    console.log(right);

    return [...arr,...left,...right]
}

console.log(merge([1,4,6,7],[2,3,8,9]));


// Working 1. arr=[1] left=[4,6,7] right=[2,3,8,9]
//  2. arr=[1,2] left=[4,6,7] right=[3,8,9]
// 3.  arr=[1,2,3] left=[4,6,7] right=[8,9]
// 4. arr=[1,2,3,4] left=[6,7] right=[8,9]
// 5. arr=[1,2,3,4,6] left=[7] right=[8,9]
// 6. arr=[1,2,3,4,6,7] left =[] right=[8,9]




function mergeSort(array){
    const half=array.length/2;

    if(array.length <2){
        return array
    }
    const left = array.splice(0,half);      
    return merge(mergeSort(left),mergeSort(array))
}


array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array));