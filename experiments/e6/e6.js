let dest, src, result;

dest = {};
src = {
    a: 'foo',
    get b() {
        throw new Error();
    },
    c: 'bar'
};

try {
    Object.assign(dest, src);
} catch (e) { }

console.log(dest);

console.log(true === 1);
console.log({} === {});
console.log("2" === 2);
console.log(+0 === -0);
console.log(NaN === NaN);

console.log(Object.is(true, 1));
console.log(Object.is({}, {}));
console.log(Object.is(+0, -0));
console.log(Object.is(NaN, NaN));

function recursivelyCheckEqual(x, ...rest) {
    return Object.is(x, rest[0]) && (rest.length < 2 || recursivelyCheckEqual(...rest));
}

let name = 'Matt';
let person = { name };
console.log(person);

let person2 = {
    ['name']: 'Matt',
    ['age']: 27,
    ['job']: 'Software engineer'
};
console.log(person2);

class Animal { }
class Individual {
    constructor() {
        console.log('person ctor');
    }
}
class Vegetable {
    constructor() {
        this.color = 'orange';
    }
}
let a = new Animal();
let p = new Individual();
let v = new Vegetable();
console.log(v.color);

class Human {
    constructor(name) {
        this.name = name || null;
    }
}
let p1 = new Human();
let p2 = new Human('Jake');

class PersonWithOverride {
    constructor(override) {
        this.foo = 'foo';
        if (override) {
            return { bar: 'bar' };
        }
    }
}
let p3 = new PersonWithOverride(),
    p4 = new PersonWithOverride(true);
console.log(p3);
console.log(p4);

console.log(FunctionExpression);
var FunctionExpression = function () { };
console.log(FunctionExpression);

console.log(FunctionDeclaration);
function FunctionDeclaration() { }
console.log(FunctionDeclaration);

console.log(ClassExpression);
var ClassExpression = class { };
console.log(ClassExpression);

class ClassDeclaration { }
console.log(ClassDeclaration);

class StaticPerson {
    static myStaticMethod() {
        console.log("This is a static method.");
    }
}

StaticPerson.myStaticMethod();   
