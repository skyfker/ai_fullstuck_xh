function a () {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('a');
            resolve();
        }, 1000);
    })
}

function b () {
    console.log('b');
}

a()
.then(() =>{
    b()
})
