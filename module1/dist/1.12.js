"use strict";
{
    // nullable type
    const searchName = (value) => {
        if (value) {
            console.log('searching');
        }
        else {
            console.log('there is nothing to search');
        }
    };
    searchName(null);
    // unknown type
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log('wrong input');
        }
    };
    getSpeedInMeterPerSecond('100 kmh^-1');
    // never
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError('shit error hoiyegeche');
    // 
}
