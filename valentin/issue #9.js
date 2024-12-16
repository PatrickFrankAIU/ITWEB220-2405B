let trafficLight = prompt('color');
let timeOfDay = prompt('time of day');

if (trafficLight == 'green'){
    console.log('Go');
} else if(trafficLight == 'Yellow'){
    console.log("slow down");
} else if (trafficLight == 'red'){
    console.log('Stop');
} else if(trafficLight == 'blinking'){
    if(timeOfDay == 'day'){
        console.log("Proceed with caution");
    } else if(timeOfDay == 'night'){
        console.log("Stop, then proceed with caution");
    }
} else if (trafficLight == 'none'){
    if(timeOfDay == 'day'){
        console.log('Stop, then proceed when safe');
    } else if( timeOfDay == 'night'){
        console.log('Use the light as a stop sign');
    }
}