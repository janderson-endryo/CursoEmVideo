let num = [3,1,6,9,7,5]

num.sort()

/*for(let pos = 0; pos < num.length; pos++) {
    console.log(`${num[pos]}`)
} */

for(let pos in num) {
    console.log(`${num[pos]}`)
}
