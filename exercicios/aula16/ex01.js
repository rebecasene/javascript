function parimp(n) {
    if (n % 2 == 0) {
        return `O número ${n} é PAR`
    } else {
        return `O número ${n} é ÍMPAR`
    }
}
let res = parimp(225)
console.log(res)