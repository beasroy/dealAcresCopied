import styles from './category.module.css'
import Image from 'next/image'

function Category() {
    return (
        <div className={styles.categoryContainer}>
            <h1 style={{lineHeight: 'normal'}}>Explore Magnificent Project By <span className='flex flex-col'> <span className={styles.brandName}>M3M</span> <span> India Pvt. Ltd </span></span></h1>
            <div className={styles.categoryImagesWrapper}>
                <div className={styles.categoryContentContainer}>
                    <div className={styles.categoryImgContainer}>
                        <Image
                            src='/singleDeveloper/CommercialProjectsImg.webp'
                            alt='Commercial Projects'
                            layout='fill'
                            style={{ objectFit: 'cover' }}
                        />
                        <h6>Commercial Projects</h6>
                    </div>


                </div>
                <div className={styles.categoryContentContainer}>
                    <div className={styles.categoryImgContainer}>
                        <Image
                            src='/singleDeveloper/ResidentialProjectsImg.webp'
                            alt='Residential Projects'
                            layout='fill'
                            style={{ objectFit: 'cover' }}
                        />

                        <h6>Residential Projects</h6>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Category