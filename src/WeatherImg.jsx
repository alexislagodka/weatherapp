import React from 'react';
import c from './img/c.png';
import h from './img/h.png';
import hc from './img/hc.png';
import hr from './img/hr.png';
import lc from './img/lc.png';
import lr from './img/lr.png';
import s from './img/s.png';
import sl from './img/sl.png';
import sn from './img/sn.png';
import t from './img/t.png';

class WeatherImg extends React.Component {
    

    render () {
        const {weatherAbbr, width, height} = this.props;
        var img;
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
}

export default WeatherImg