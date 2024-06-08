import Image from 'next/image';
import React from 'react'
import styles from './styles.module.css'


const GuideCard = ({
    title,
    bgColor,
    borderColor,
    img,
    textColor,
    variableWidth,
    isAllGuide
}) => {





    const noOfWordsInTitle = title.split(' ').length;
  


    return (
        <div className={`${!variableWidth ? styles.guideCard : 'w-full h-full min-[1520px]:justify-center' } col-span-1 flex flex-col gap-8 items-center justify-center shadow-lg bg-${bgColor} border-l-[7px] border-l-${borderColor} py-2 px-3 ${isAllGuide && '!h-[120px] xs:!h-[150px] md:!h-[200px] !gap-[2px] md:!gap-[4px] !w-[80px] xs:!w-[100px] md:!w-[150px] min-w-[80px] xs:min-w-[100px] md:min-w-[150px] min-h-[120px] xs:min-h-[150px] md:min-h-[200px] '}`}
            style={{
                backgroundColor: bgColor,
                borderLeftColor: borderColor
            }}
        >
            <div className='font-bold text-base xs:text-[18px]  leading-[16px] xs:leading-[18px] sm:leading-none md:text-2xl py-1 max-md:whitespace-nowrap'>
                {
                    title.split(' ').map((word, index) => {
                        if (index == noOfWordsInTitle - 1) {
                            return ""
                        } else {
                            return word + " "
                        }
                    }
                    )
                }
                <br />
                <span className={``} style={{
                    color: textColor
                }}>
                    {
                        title.split(' ')[noOfWordsInTitle - 1]
                    }
                </span>
            </div>

            <Image src={`/guides/${img}`} alt={title} width={80} height={50} className='w-[50px] h-[50px]  md:w-[80px] md:h-[80px] ' />
        </div>
    )
}

export default GuideCard
