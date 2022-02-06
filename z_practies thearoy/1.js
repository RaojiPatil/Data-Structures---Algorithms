var arr = [10, 20, 30, 4, 5,7];
var sum = arr.reduce(function(sum, e) {
    return sum + e;
});
console.log(sum);



arr.forEach(function(e, i) {
    console.log(e + " " + i);
})


var arr = [10, 20, 30, 4, 5,7];

var result = arr.filter(function(e) {
        return (e % 2 == 0)

})
console.log(result);


var arr = [10, 20, 30];

var mapped = arr.map(function(elem) {
    return elem * 10;
});
console.log(mapped)


const obj = { a: 1, b: 2 }
const shallowClone = { ...obj }

console.log(obj);


var object = new Object();
console.log(object);


setTimeout(function() {
     console.log("Good morning");
}, 2000);

setInterval(function() {
    console.log("hello");
}, 2000)

var a=[1,2,3,4,5,6,7,8,9,10];
var b = [2,4,5,7,11,15];


for(var i=0;i<a.length;i++){
    for(var j=0;j<b.length;j++){
        if(a[i]==b[j]){
            console.log(a[i],b[j])
        }
    }
}