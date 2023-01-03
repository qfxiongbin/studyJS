// var a = eval(2+2)
// //eval 声明局部函数
// eval("function f(){return x+1}")

// //delete
// var o = {x:1,y:2}
// delete o.x
// console.log(o)

//inherit();
//prototype Object.create
function inherit(p){
    if(p == null){
        throw TypeError()
    }
    if(Object.create){
        return Object.create(p)
    }
    var t = typeof p;
    if(t == 'object' && t !== 'function'){
        throw TypeError()
    }
    function f(){}
    f.prototype = p;
    return new f();
}
console.log(inherit(function a(){}))