
Array.prototype.map = function(cb) {
   console.log(this)
    let new_arr= [];
    for(let items of this){
        new_arr.push(cb(items))
    }
    return new_arr;
}
const arr = [90, 80, 70]
console.log(arr.map((i) => i * 2));

