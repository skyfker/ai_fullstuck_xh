class EventEmitter {
    constructor () {
        this.handlers = {};
    }

    on (eventName, cb) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(cb);
    }

    emit (eventName) {
        if (this.handlers[eventName]) {
           const handlers = this.handlers[eventName]
           handlers.forEach(cb => {
               cb();
           })
        }
    }

    off (eventName, cb) {
        const handlers = this.handlers[eventName];
        const index = handlers && handlers.indexOf(cb);
        if (index !== -1) {
            handlers.splice(index, 1);
        }
    }

    once (eventName, cb) {
       if (this.handlers[eventName] && this.handlers[eventName].indexOf(cb) === -1) {
          return
       }
       this.on(eventName, cb)
    }
}

const emiter = new EventEmitter();

emiter.once('onSell', () => {
    console.log('买su7啦叼毛');
})
emiter.once('onSell', () => {
    console.log('买su7啦叼毛');
})
emiter.once('onSell', () => {
    console.log('买su7啦靓仔');
})
emiter.once('onSell', () => {
    console.log('买su7啦靓仔');
})
emiter.once('onSell', () => {
    console.log('买su7啦靓仔');
})
emiter.emit('onSell');