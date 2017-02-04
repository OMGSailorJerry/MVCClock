var handStyle = {

    second :    document.querySelector('.second-hand'),
    minute :    document.querySelector('.min-hand'),
    hour :      document.querySelector('.hour-hand')

}


var handSet = function(arg, hand) {
    
    var clockDiv;

    if (hand === 'hour') {
        
        clockDiv = 12;

    }
    else {

        clockDiv = 60;

    }

    var handDegrees  =   ((arg / clockDiv ) * 360 + 90);

    return handStyle[hand].style.transform = 'rotate(' + handDegrees + 'deg)';
}