import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='item-list'>

            <div className='item-placeholder'>
                <div className='item-content'>
                    <h1 className='item-title'>MICES</h1>
                    <span className='item-subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='item-placeholder'>
                <div className='item-content'>
                    <h1 className='item-title'>KEYBOARDS</h1>
                    <span className='item-subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='item-placeholder'>
                <div className='item-content'>
                    <h1 className='item-title'>HEADSETS</h1>
                    <span className='item-subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='item-placeholder'>
                <div className='item-content'>
                    <h1 className='item-title'>CONTROLERS</h1>
                    <span className='item-subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='item-placeholder'>
                <div className='item-content'>
                    <h1 className='item-title'>OTHERS</h1>
                    <span className='item-subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;