const arr = ['a', 'b', 'c'];




const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c',
    abc: {
        def:{

        }
    }
};
const b = 'b';

//arrObj.b = '1234';
arrObj[b] = '1234';

console.log(arrObj['b']);
console.log(arrObj.b);

const obj = {
    Anna: 500,
    'Alice': 800
};

