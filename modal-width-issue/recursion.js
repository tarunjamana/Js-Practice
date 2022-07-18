function countDown(n) {
    for(let i =n ; i>0;i--){
        console.log(i);
    }
    console.log('Horray');
}

countDown(3);

// recursive function

function countDownRecursive(n){
if(n <= 0){
    console.log('Horray');
    return;
}
console.log(n);
countDownRecursive(n-1);
}

countDownRecursive(3);

// countDownRecursive(3);
//    countDownRecursive(2);
//      countDownRecursive(1);
//        countDownRecursive(0);
//        return
//      return
//    return
// return



// Exp 2
function sumRange(n){
    let total = 0;
    for (let i = n; i>0;i--){
        total += i;
    }
    return total;
}

let sum = sumRange(4);
console.log(sum);

function sumRangeRecursive(n,total = 0){
if(n<=0){
    return total
}
return sumRangeRecursive(n-1,total + n);
}


let sumRecursive = sumRangeRecursive(4);

console.log(sumRecursive);


// sumRangeRecursive(4,0)
//   sumRangeRecursive(3,4)
//     sumRangeRecursive(2,7)
//       sumRangeRecursive(1,9)
//         sumRangeRecursive(0,10)
//            return 10
//           return 10
//          return 10
//         return 10
//   return 10

function printChildren(t){
    // ??
}


function printChildrenRecursive(t){
    if(t.children.length === 0){
        return
    }
    t.children.forEach(element => {
        console.log(element.name)
        printChildrenRecursive(element)
    });
}

const tree = {
    name:'tarun',
    children:[
        {
            name:'jim',
            children:[]
        },
        {
          name:'Zoe',
          children:[
              {name:'kyle',children:[]},
              {name:'sophie',children:[]}
          ]
        }
    ]
}


printChildrenRecursive(tree);



// printChildrenRecursive('tarun')
//   printChildrenRecursive('Jim')
//   return
//   printChildrenRecursive('Zoe')
//     printChildrenRecursive('kyle')
//     return
//     printChildrenRecursive('sophie')
//     return
//   return
// return 

