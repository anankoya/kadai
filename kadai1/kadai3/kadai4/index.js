const product = (a,b) => {
    return a * b
}
const product2 =function(a,b){
    return a*b
}


const result1 =product(107,109)
console.log(result1)

//整数nを引数として与えると、１からnまでの和を計算する関数 sum
const sum =(n) =>{
    let result
    for(i =1; i<=n;i=i +1){
        res=result+i
    }
    return result
}
const result2 =sum(500)
console.log(result2)
