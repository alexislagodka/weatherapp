import React from 'react';
import c from '../../assets/images/c.png';
import h from '../../assets/images/h.png';
import hc from '../../assets/images/hc.png';
import hr from '../../assets/images/hr.png';
import lc from '../../assets/images/lc.png';
import lr from '../../assets/images/lr.png';
import s from '../../assets/images/s.png';
import sl from '../../assets/images/sl.png';
import sn from '../../assets/images/sn.png';
import t from '../../assets/images/t.png';

const WeatherImg = (props) => {

    const {weatherAbbr, width, height} = props;
    let img;
    switch (weatherAbbr) {
        case 'c':
            img = c;
            break
        case 'h':
            img = h;
            break
        case 'hc':
            img = hc;
            break;
        case 'hr':
            img = hr;
            break
        case 'lc':
            img = lc;
        break;
        case 'lr':
            img = lr;
        break;
        case 's':
            img = s;
        break;
        case 'sl':
            img = sl;
        break;
        case 'sn':
            img = sn;
        break;
        case 't':
            img = t;
        break;

        default: 
            console.log('Error'); 
        }
    
    return <img src={img} alt={weatherAbbr} style={{width: width, height: height}}/>
}

export default WeatherImg