import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';

const PriceRangeSlider = () => {
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [selectedPropertyType, setSelectedPropertyType] = useState('');
    const [selectedBedroom, setSelectedBedroom] = useState('');
    const [selectedConstructionStatus, setSelectedConstructionStatus] = useState('');
    const [selectedPostedBy, setSelectedPostedBy] = useState('');

    const handleChange = (event, newValue) => {

        setPriceRange(newValue)

    };

    const handleReset = () => {
        setPriceRange([0, 100]);

    };
    const filterReset = () => {
        setSelectedPriceRange('');
        setSelectedPropertyType('');
        setSelectedBedroom('');
        setSelectedConstructionStatus('');
        setSelectedPostedBy('');
    }

    const handleSelectChange = (event, setStateFunc) => {
        setStateFunc(event.target.value);
        if (setStateFunc === setSelectedPriceRange) {
            const rangeValues = event.target.value.split('-');
            setPriceRange(rangeValues.map(value => parseInt(value)));
        }
    };

    useEffect(() => {
        const selectedRange = `${priceRange[0]}-${priceRange[1]} lac`;
        setSelectedPriceRange(selectedRange);
    }, [priceRange]);


    return (
        <div className="mt-6">
            <div className='flex justify-start gap-2 my-3'>
                <p className='text-sm text-gray-600'>Filters</p>

                <button
                    className='text-blue-500 hover:underline text-sm'
                    onClick={filterReset}
                >
                    Clear All Filters
                </button>

            </div>

            <div className='flex justify-between items-center gap-3'>
                <select
                    value={selectedPropertyType}
                    onChange={(event) => handleSelectChange(event, setSelectedPropertyType)}
                    className={`px-2 py-1 text-sm border rounded-2xl ${selectedPropertyType ? 'bg-blue-100' : ''
                        }`}
                >
                    <option value="">Select Property Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                </select>
                <select
                    value={selectedPriceRange}
                    onChange={(event) => handleSelectChange(event, setSelectedPriceRange)}
                    className={`px-2 py-1 border rounded-2xl text-sm ${(selectedPriceRange && selectedPriceRange !== '0-100 lac') ? 'bg-blue-100' : ''
                        }`}
                >
                    <option value="">Price Range</option>
                    <option value="1-5">0-5 lac</option>
                    <option value="6-10">5-10 lac</option>
                    <option value="11-15">10-15 lac</option>
                    <option value="16-20">15-20 lac</option>
                    <option value="21-25">20-25 lac</option>
                    <option value="26-30">25-30 lac</option>
                    <option value="31-35">30-35 lac</option>
                    <option value="36-40">35-40 lac</option>
                    <option value="41-45">40-45 lac</option>
                    <option value="46-50">45-50 lac</option>
                    <option value="51-55">50-55 lac</option>
                    <option value="56-60">55-60 lac</option>
                    <option value="61-65">60-65 lac</option>
                    <option value="66-70">65-70 lac</option>
                    <option value="71-75">70-75 lac</option>
                    <option value="76-80">75-80 lac</option>
                    <option value="81-85">80-85 lac</option>
                    <option value="86-90">85-90 lac</option>
                    <option value="91-95">90-95 lac</option>
                    <option value="96-100">95-100 lac</option>
                </select>
                <select
                    value={selectedBedroom}
                    onChange={(event) => handleSelectChange(event, setSelectedBedroom)}
                    className={`px-2 py-1 text-sm border rounded-2xl ${selectedBedroom ? 'bg-blue-100' : ''
                        }`}
                >
                    <option value="">Select Bedroom</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    {/* Add more options */}
                </select>
                <select
                    value={selectedConstructionStatus}
                    onChange={(event) =>
                        handleSelectChange(event, setSelectedConstructionStatus)
                    }
                    className={`px-2 py-1 text-sm border rounded-2xl ${selectedConstructionStatus ? 'bg-blue-100' : ''
                        }`}
                >
                    <option value="">Select Construction Status</option>
                    <option value="under_construction">Under Construction</option>
                    <option value="ready_to_move">Ready to Move</option>
                    {/* Add more options */}
                </select>
                <select
                    value={selectedPostedBy}
                    onChange={(event) => handleSelectChange(event, setSelectedPostedBy)}
                    className={`px-2 py-1 text-sm border rounded-2xl ${selectedPostedBy ? 'bg-blue-100' : ''
                        }`}
                >
                    <option value="">Select Posted By</option>
                    <option value="owner">Owner</option>
                    <option value="agent">Agent</option>
                </select>

            </div>
            <h2 className="text-gray-900 text-md font-bold mt-5 mb-2">Select Price Range</h2>
            <div className='flex justify-between my-2'>
                <p className="text-gray-500 text-sm">
                    {`${priceRange[0]} Lacs - ${priceRange[1]} Lacs`}
                </p>

                <button
                    className='text-blue-500 hover:underline text-sm'
                    onClick={handleReset}
                >
                    Reset Price Range
                </button>

            </div>
            <Slider
                value={priceRange}
                onChange={handleChange}
                min={0}
                max={100}
                step={5}
                valueLabelDisplay="auto"
            />
            <div className='flex flex-row gap-6 mt-5 '>
                <button className=' cursor-pointer rounded-md text-sm bg-blue-700 text-white py-2 px-4 font-bold'>Search</button>
                <button className=' cursor-pointer rounded-md text-sm bg-white text-blue-700 py-2 px-4 font-bold'>Cancel</button>
            </div>
        </div>
    );
};

export default PriceRangeSlider;
