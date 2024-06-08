import React from 'react';
import Socialicons from './icons';
import Image from 'next/image';

const FooterSingle = () => {
    return (
        <div className='bg-black text-white flex flex-col justify-center'>
         
            <div className='flex  justify-center items-center p-6'>
                <Image
                    alt="Logo"
                    src="/lda.png"
                    height={100}
                    width={100}
                    className="IMG"
                />
            </div>

            <hr />

            <div className='flex  justify-center items-center p-10'>
                <Socialicons />
              
            </div>
        </div>
    );
};

export default FooterSingle;

