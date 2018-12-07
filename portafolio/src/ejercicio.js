var arr1 = [1,2,5,4,7,8,4,1,4,2,5,1,2,4,5,1,4];
// var arr2 = arr1.substring(3);
// console.log(arr2);
console.log("Metodo 1 (slice):");
var arr2 = [];
var j = 0;
console.log(arr1);
for(var i=1;i<=arr1.length;i++){
    // do{
    // }while(i%3==0);
    var condition = i%3;
    if(condition == 0){
        j++;
        arr2[j-1] = arr1.slice(i-3,i);
    }
}
console.log(j);
console.log(arr2);

console.log("Metodo 2 ():");
var temp = [];
var arr3 = [];
var j = 0;
for(var i=1;i<=arr1.length;i++){
    temp[i] = arr1[i];
    if(arr1%3 == 0){
        j++;
        arr3[j] = temp;
        temp = 0;
    }
}
console.log(j);
console.log(arr2);