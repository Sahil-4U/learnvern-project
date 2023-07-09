import React from 'react';
import './Chartbar.css';

function Chartbar({ value, label, maxValue }) {
    let barHeight = '0%';
    const sum = value / maxValue;
    if (maxValue > 0) {
        barHeight = Math.round((sum) * 100) + '%'
        // console.log('label', label, barHeight, value);
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar_inner'>
                <div className='chart-bar-fill' style={{ 'height': `${barHeight}` }}>

                </div>
            </div>
            <div className='chart-bar_label'>
                {label}
            </div>
        </div>
    )
}

export default Chartbar