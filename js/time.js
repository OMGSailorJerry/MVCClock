
var Time = function () {
    this.eventsStorage = [];
    this.loopHendler = undefined;
};

Time.prototype.on = function (name, cb) {
    this.eventsStorage.push({
        name: name,
        fn: cb
    })
};

Time.prototype.invoke = function (eventName, args) {
    this.eventsStorage
        .filter(function (el) {
            return el.name == eventName;
        })
        .forEach(function (el) {
            el.fn.call(null, args);
        });
}

Time.prototype.startLoop = function (interval) {
    
    this.loopHendler = setInterval(function () {
        var currentDate = new Date;
        
        this.invoke('sec', currentDate.getSeconds());
        this.invoke('min', currentDate.getMinutes());
        this.invoke('hour', currentDate.getHours());
    }.bind(this), interval);
};

// Time.prototype.stopLoop = function () {
//     clearInterval(this.loopHendler);
// };//

var time = new Time();