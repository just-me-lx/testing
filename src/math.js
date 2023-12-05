function min(a, b){
    const c = 3;
    return (b - a) * c;
}

module.exports ={
    add: (...agrs) => {
        return agrs.reduce((prev, curr) => {
            return prev + curr;
        })
    },

    mul: (...agrs) => {
        return agrs.reduce((prev, curr) => {
            return prev * curr;
        })
    },

    cover: (a, b) => {
        if(a > b){
            return a - b;
        }else if(a == b){
            return a + b;
        }else{
            min(a,b);
            return a * b;
        }
    }
}