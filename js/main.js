require(['time', 'hands'], function(){
    
    time.on('sec', function (arg) {
        
        handSet(arg, 'second');

    });

    time.on('min', function (arg) {
    
        handSet(arg, 'minute');

    });

    time.on('hour', function (arg) {
    
        handSet(arg, 'hour');

    });

    time.startLoop(1000);
});