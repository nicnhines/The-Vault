'use strict';
module.exports = function() {
  
let obj = {};

let setValue =( key,value) => {
    obj[key] = value;
}

let getValue = (key) => {
    if ( key === undefined || !obj.hasOwnProperty(key) ) {
        return null;
    } else if ( obj.hasOwnProperty(key)) {
        return obj[key];
    }
}


return {
    setValue: setValue,
    getValue: getValue
};

};