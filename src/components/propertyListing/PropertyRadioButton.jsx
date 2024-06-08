'use client';
import { useState } from 'react';
const PropertyRadioButton = () => {

    const [cornerShop, setCornerShop] = useState('');
    const [isMainRoadFacing, setIsMainRoadFacing] = useState('')
    const [washRoom, setWashRoom] = useState('')
    const [pantry, setPantry] = useState('')

    const handleRadioChange = (event) => {
        setCornerShop(event.target.value);
    };
    const handleRadioChangeRoad = (e) => {
        setIsMainRoadFacing(e.target.value);
    }
    const handleRadioChangeWash = (e) => {
        setWashRoom(e.target.value);
    }
    const handleRadioChangePantry = (e) => {
        setPantry(e.target.value);
    }
    return (
        <div className='my-4'>
            <div className='flex flex-row gap-4 '>
                <p className='font-bold'>Corner Shop</p>
                <div className='md:flex flex-row items-center gap-4'>
                <label>
                    <input
                        type="radio"
                        value="yes"
                        checked={cornerShop === 'yes'}
                        onChange={handleRadioChange}
                    />
                    &nbsp;&nbsp;Yes
                </label>
                <label>
                    <input
                        type="radio"
                        value="no"
                        checked={cornerShop === 'no'}
                        onChange={handleRadioChange}
                    />
                    &nbsp;&nbsp;No
                </label>
                </div>
            </div>
            <div className='flex flex-row gap-4  mt-3'>
                <p className='font-bold'>Is Main Road Facing</p>
                <div className='md:flex flex-row items-center gap-4'>
                <label>
                    <input
                        type="radio"
                        value="yes"
                        checked={isMainRoadFacing === 'yes'}
                        onChange={handleRadioChangeRoad}
                    />
                    &nbsp;&nbsp;Yes
                </label>
                <label>
                    <input
                        type="radio"
                        value="no"
                        checked={isMainRoadFacing === 'no'}
                        onChange={handleRadioChangeRoad}
                    />
                    &nbsp;&nbsp;No
                </label>
                </div>
            </div>
            <div className='flex flex-row gap-4 mt-3 items-start'>
            <p className='font-bold'>Personal Washroom</p>
            <div className='md:flex flex-row items-center gap-4 ml-0.5'>
                <label>
                    <input
                        type="radio"
                        value="yes"
                        checked={washRoom === 'yes'}
                        onChange={handleRadioChangeWash}
                    />
                    &nbsp;&nbsp;Yes
                </label>
                <label>
                    <input
                        type="radio"
                        value="no"
                        checked={washRoom === 'no'}
                        onChange={handleRadioChangeWash}
                    />
                    &nbsp;&nbsp;No
                </label>
                </div>
            </div>
            <div className='flex flex-row gap-4 mt-3'>
            <p className='font-bold'>Pantry/ Cafeteria</p>
            <div className='md:flex flex-row items-center gap-4 ml-7'>
                <label>
                    <input
                        type="radio"
                        value="yes"
                        checked={pantry === 'yes'}
                        onChange={handleRadioChangePantry}
                    />
                    &nbsp;&nbsp;Yes
                </label>
                <label>
                    <input
                        type="radio"
                        value="no"
                        checked={pantry === 'no'}
                        onChange={handleRadioChangePantry}
                    />
                    &nbsp;&nbsp;No
                </label>
                </div>
            </div>
        </div>
    )
}

export default PropertyRadioButton