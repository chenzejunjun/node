// expotrs和module.exports指向同一个对象
// require模块时，得到的永远是module.exports指向的对象


/* exports.username = 'lalal'
module.exports = {
    name:'lili',
    age:12
}
{ name: 'lili', age: 12 } */


/* module.exports.username = 'lalal'
exports ={
    username:'kkk',
    age:45
}{ username: 'lalal' } */

/* exports.username = 'zs'
module.exports.age = 45
{ username: 'zs', age: 45 } */


/* exports ={
    username:'kkk',
    age:45
}
module.exports = exports
module.exports.sex = '男'
{ username: 'kkk', age: 45, sex: '男' } */