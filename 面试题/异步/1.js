function a (cb) {
    setTimeout(function() {
        console.log('a');
        cb()
    }, 1000);
}

function b () {
    console.log('b');
    cb()
}

function c () {
    console.log('c');
}

a(b, c)