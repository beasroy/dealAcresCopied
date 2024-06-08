import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const LocationModal = ({
    closeModal
}) => {
    return (
        <div className={`fixed h-full w-full flex flex-col items-center justify-end bg-black/80 inset-0 z-30 py-4 px-4`}>
            <span className="text-white font-bold w-full flex justify-end py-2" onClick={closeModal}><AiOutlineClose size={30} /></span>
            <div className="h-full w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.15030524903!2d76.9897491!3d28.42295755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1695029524180!5m2!1sen!2sin" width="600" height="450" style={{ border: '0', maxWidth: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
    )
}

export default LocationModal
