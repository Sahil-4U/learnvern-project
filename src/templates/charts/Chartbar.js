import React from 'react';
import './Chartbar.css';

function Chartbar({ value, label, maxValue }) {
    let barHeight = '0%';
    if (maxValue > 0) {
        barHeight = (Math.round(value / maxValue) * 100) + '%';
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar_inner'>
                <div className='chart-bar-fill' style={{ 'height': barHeight }}>

                </div>
            </div>
            <div className='chart-bar_label'>
                {label}
            </div>
        </div>
    )
}

export default Chartbar