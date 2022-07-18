// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.


// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// Using double FoorLoops
// Time complexity O(N*N)
// Space complexity O(N)

let twoSumUsingFor = function(nums,target){
    for(let i =0;i< nums.length;i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
   }
console.log(twoSumUsingFor([2,7,11,15], 9));
console.log(twoSumUsingFor([3,2,4],6));
console.log(twoSumUsingFor([3,3],6))


// Using an Object
// Time complexity O(N)
// Space complexity O(N)

let twoSumMap = function(nums,target) {
  let map = {};
  
  for(let i = 0; i < nums.length; i++){
    console.log(map);
      let value = nums[i];
      var complementPair = target - value;
      if(map[complementPair] !== undefined){
          return [map[complementPair],i]
      } else {
          map[value] = i;
      }
  }  
}

console.log(twoSumMap([2,7,11,15], 17));
// console.log(twoSumMap([3,2,4],6));
// console.log(twoSumMap([3,3],6))

//  initially map={}
// map={} , i=0 / value = 2(nums[0]) /complementPair=15(17-2) / if case failed  / map[2] = 0 
// map = {2:0} i=1 / value = 7(nums[1]) / complementPair= 10(17-7) / if case failed  / map[7] = 1
// map= {2:0,7:1} i=2 / value =11(nums[3]) / complementPair=6(17-11) / if case failed  / map[11] = 2
// map = {2:0,7:1,11:2} i=3 / value =15(nums[3]) / complementPair=2(17-15) / if case passed 


// Using Map object 
// Time complexity O(N)
// Space complexity O(N)


var twoSum  = function(nums,target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        let num1 = nums[i];
        let num2 = target - num1;
        if(map.has(num2)){
            return[i,map.get(num2)];
        }
        map.set(num1,i);
    }
}


console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6))




