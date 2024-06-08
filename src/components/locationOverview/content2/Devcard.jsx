import styles from './devcard.module.css'
import Image from 'next/image'

function Devcard(props) {
  return (
    <div className={styles.content2DevcardContainer}>
        <div className={styles.devcardImgContainer}>
            <Image
                src={props.imgSrc}
                alt="developer"
                layout="fill"
                style={{objectFit:"cover"}}
            />
        </div>
        <div className={styles.devcardTextContainer}>
            <h4>DLF Ltd.</h4>
            <h6>Experience <br/>73 years</h6>
        </div>
    </div>
  )
}

export default Devcard