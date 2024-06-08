import styles from './faqcard.module.css'
import {FaMagnifyingGlass} from 'react-icons/fa6'

const Faqcard = (props) => {
  return (
    <div className={styles.faqcardContainer}>
        <div style={{backgroundColor:'rgb(244,245,247)',padding:'10px',borderRadius:'50%'}}>
            <FaMagnifyingGlass size={15} color='rgb(132,143,161)'/>
        </div>
        <div>
            <h4>{props.cardData.Q}</h4>
            <h6>{props.cardData.A}</h6>
        </div>
    </div>
  )
}

export default Faqcard