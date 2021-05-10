let times = 0

function* gen () {
    console.log('time: ', times)
    yield 1
    yield 2
    yield 3
    times++
    if (times <= 1) {
        yield* gen()
    }
}

for (let i of gen()) {
    console.log(i)
}
