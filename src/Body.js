import React from 'react';
import './Body.css';

const Body = ({ items }) => {
    return (
        <div className="div1">
        <ul className='lists'>
            {items.map((item, index) => (
                <li key={index}>
                    <img src={item.image} alt={item.description} />
                    <svg className="savage" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="blueviolet" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                    </svg>
                    <h6>{item.serialNo}</h6>
                    <div className='something'>
                        <h3>{item.description}</h3>
                        <h4>{item.semiDescription}</h4>
                        <p>{item.field}</p>
                        
                    </div>
                    <img className="demo-img" src={item.picture} />
                </li>
            ))}
        </ul>
        </div>
    );
};

export default Body;