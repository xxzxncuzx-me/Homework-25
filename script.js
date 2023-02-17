function returnPromise(){ 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Готово')
        }, 2000)
    })
}

returnPromise().then(console.log) 