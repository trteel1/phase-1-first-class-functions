const receivesAFunction = function (func){
    func()
}

const returnsANamedFunction = function (){
    return receivesAFunction
}
function returnsAnAnonymousFunction(){
    return function(){
        return 65
    }
}