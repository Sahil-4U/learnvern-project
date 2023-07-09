import React from 'react';
import './Chart.css';
import Chartbar from './Chartbar'

function Chart({ datasets }) {
    const dataSetValues = datasets.map((dataset) => dataset.value);
    const maxVal = Math.max(...dataSetValues);
    return (
        <div className='chart'>
            {
                datasets.map((data) => { return (<Chartbar value={data.value} label={data.label} key={data.label} maxValue={maxVal} />) })
            }
        </div>
    )
}

export default Chart