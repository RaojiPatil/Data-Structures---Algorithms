
function f(n) {
    if (n === 1)
    return 0;
    return Math.log(n)+ f(n-1);
}