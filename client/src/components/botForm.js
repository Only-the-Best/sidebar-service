import React from 'react';

var size = 4;

const SoldHomes = props => (
    <div className="box botContainer">
        <h3 id="nearby-homes">Nearby Similar Sales</h3>
        <ul>
            {
                props.botInfo.slice(0, size).map((items, index) => (
                <li>
                    <span>
                        {items.price}
                    </span>
                </li>
            ))}
        </ul>
    </div>
)

export default SoldHomes;