function Foo(){
    //.
}
/* define construc to global Object */
Foo.prototype = {}
/* assing constructor to Foo */
Object.defineProperty(Foo.prototype, 
    'constructor', {
        enumerable: false, 
        writable: true, 
        configurable: true, 
        value: Foo}
    )

console.log(Foo.prototype.constructor)
    
const a = new Foo()
    
console.log(a.constructor === Foo )
console.log(a.constructor === Object )
