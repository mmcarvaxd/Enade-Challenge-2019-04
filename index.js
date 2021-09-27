function iterative(initial, last) {
    initial = Number(initial)
    last = Number(last)

    if(Number.isNaN(initial) || Number.isNaN(last) || last < initial) {
        return
    }

    let resp = (initial + (1/initial))

    for (let index = initial + 1; index <= last; index++) {
            resp *= (index + (1/index))
    }

    return resp
}


function recursive(initial, last, carry = null) {
    initial = Number(initial)
    last = Number(last)

    if(Number.isNaN(initial) || Number.isNaN(last)) {
        return
    }

    if(initial <= last) {
        if(carry === null) {
            carry = (initial + (1/initial))
            return recursive(++initial, last, carry)
        }
        
        carry *= (initial + (1/initial))
        return recursive(++initial, last, carry)
    }

    return carry
}

console.log(iterative(1, 8))
console.log(recursive(1, 8))