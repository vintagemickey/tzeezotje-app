import React from 'react'
import './MenuItem.css'

function MenuItem(props) {
    return (
    <div className='menu-item'>
        <span className='menu-item-date'>{props.date}</span>
        <div className='menu-dishes'>
            <span className='menu-item-first-dish'>{props.firstDish}</span>
            <span className='menu-item-last-dish'>{props.lastDish}</span>
        </div>
    </div>
    ) 
}

export default MenuItem
