const square = v => v * v
const double = v => v * 2
const addOne = v => v + 1
// const res = pipe(square, double, addOne)
//res(3) // 19; addOne(double(square(3)))

const customPipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);
const res = customPipe(square, double, addOne);
console.log(res(3));