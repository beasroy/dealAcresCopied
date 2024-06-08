import styles from './addbox.module.css'

function Addbox() {
  return (

      <div className={styles.sideAdContainer}>
        <div className={styles.sideAdContainerHead}>
          <p>Post property ad to sell or rent online for</p>
          <h1>FREE</h1>
        </div>
        <ul>
          <li>Advertise for Free</li>
          <li>Sell 10 X Faster</li>
          <li>Connnect with genuine buyers</li>
          <li>Get unlimited enquiries</li>
        </ul>
        <button> Post Property &nbsp;<span>FREE</span></button>
  </div>

  )
}

export default Addbox