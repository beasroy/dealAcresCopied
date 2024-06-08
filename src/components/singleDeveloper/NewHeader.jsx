import styles from './newheader.module.css'
import Image from 'next/image'
import background from '../../../public/background header.jpg'

function NewHeader() {
    return (
        <div className={``}>
            <div className={`relative w-full h-[150px] md:h-[250px]`}>
                <div className={`absolute inset-0 bg-blue-900/40`}></div>
                <Image
                    src={background}
                    alt='background'
                    className={`h-full w-full`}
                    width={800}
                    height={400}
                />
            </div>
            <div className={`w-full  `}>
                <div className={`flex gap-4 sm:gap-8 justify-center md:justify-normal px-4 sm:px-8 max-w-screen-lg mx-auto`}>
                    <div className={`min-w-[120px] min-h-[120px] xs:min-w-[150px] xs:min-h-[150px] sm:min-w-[180px] sm:min-h-[180px] md:min-w-[200px] md:min-h-[200px] rounded-[100%] relative `}>
                        <Image
                            src='/singleDeveloper/devLogo.webp'
                            alt='developer Logo'
                            width={500}
                            height={500}
                            className=' rounded-[100%] bottom-[30%] 
                        border-2 border-blue-500
                        absolute min-w-[120px] min-h-[120px] xs:min-w-[150px] xs:min-h-[150px] sm:min-w-[180px] sm:min-h-[180px] md:min-w-[200px] md:min-h-[200px]'
                        />
                    </div>
                    <div className={`py-2 text-xs sm:text-sm min-[500]:text-base md:text-lg `}>
                        <h1 className='text-xl min-[500px]:text-2xl md:text-4xl font-bold'>M3M India Pvt. Ltd</h1>
                        <p className='font-bold '>Experience - <span className='font-medium'> 35+ years</span></p>
                        <p className='font-bold '>Operating Cities - <span className='font-medium'>Gurgaon, Panipat, Noida</span></p>

                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default NewHeader;