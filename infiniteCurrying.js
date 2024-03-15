
function add(a)
{
    return function (b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(add(0)(1)(2));

//Infinte Currying

function add1(a)
{
    return function (b){
        return b?
            add1(a+b):
            a;

        
    }
}

console.log(add1(0)(1)(2)(3)(4)(5)(6)(7)(8)());