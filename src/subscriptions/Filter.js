import React from 'react';
import './Filter.css';

function Filter({ filteredData, valueOfFilter }) {
    const filterChange = (e) => {
        filteredData(e.target.value);
    }
    return (
        <div className='filter'>
            <div className='filter_control'>
                <label>Filter By Year</label>
                <select onChange={filterChange} value={valueOfFilter}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>

                </select>
            </div>
        </div>
    )
}

export default Filter