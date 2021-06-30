function dp (arrayCoins, amount) {
    let INF = Number.MAX_VALUE / 4
    console.log(INF)
    let dp = new Array(amount + 1)
    for (let i = 0; i <= amount; i++) {
        dp[i] = INF
    }

    dp[0] = 0

    for (let i = 0; i < amount; i++) {
        for (let j =0;j< arrayCoins.length;j++) {
            let y = arrayCoins[j]
            if (y <= amount && (i + y < amount + 1) && (i + y >= 0)) {
                dp[i + y] = Math.min(dp[i + y], dp[i] + 1)
                console.log('dp',dp[i+y])
            }
        }
    }
    console.log(dp)
    return  dp[amount]
}

let re = dp([1, 2, 5], 11)
console.log(re)
