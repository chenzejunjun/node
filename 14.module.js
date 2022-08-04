module.exports.username = 'zs'
module.exports.sayHello = function(){
    console.log('hello');
}
module.exports.age = 12

// module指向全新的对象
module.exports = {
    name:'lalal',
    sayHi(){
        console.log('hi');
    }
}
module.exports.name = 'lll'