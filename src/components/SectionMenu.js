import React from 'react'
import MenuItem from './MenuItem'
import MenuItems from '../menu.js'
import './SectionMenu.css'

function SectionMenu() {
    function createMenuItem(item) {
        return (
            <MenuItem date={item.date} firstDish={item.firstDish} lastDish={item.lastDish}/>
        )
    }
    return (
        <section className='menu'>
            <div className='container'>
                <div className='menu-wrapper'>
                    <div className='menu-items'>
                        {MenuItems.map(createMenuItem)}
                    </div>
                    <div className='menu-img'>
                        <img src='menu-image.png'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionMenu
