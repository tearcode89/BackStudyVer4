console.log('반복은 좋은 습관이다.')

function getToken(aaaa) {
    const result = String(Math.floor(Math.random() * 10 ** aaaa)).padStart(aaaa,"0")
    console.log(result)
}

getToken(8);
