import { useState } from "react"
import styles from './insightReview.module.css'

import helpful from "../../../../public/rentagreement/Insights.png"
import Image from 'next/image'
import { TiThumbsUp, TiThumbsDown } from "react-icons/ti";

function InsightReview() {
  const [feedback, setFeedback] = useState(-1);
  const handleClickYes = () => (setFeedback(0));
  const handleClickNo = () => (setFeedback(1));
  return (
    <div>
      <div className={styles.InsightBox}>
        <div className={styles.InsightImgBox}>
          <Image
            src={helpful}
            className={styles.InsightImg}
          />
        </div>

        <div className={styles.ReviewBox}>
          <h2>Are you finding these Insights helpful?</h2>
          {(feedback == -1) ?
            <div className="flex justify-start">
              <div className="flex gap-1 items-center">
                  <TiThumbsUp size={20} />
                <button onClick={handleClickYes} >

                  Yes
                </button>

              </div>
              <div className="flex gap-1 items-center">
                  <TiThumbsUp size={20} />
                <button onClick={handleClickNo} className="flex gap-1 items-center">
                  No
                </button>

              </div>

            </div> : (feedback == 0) ? <span>Thanks For Your Support!!</span> : <span>Sorry to hear, We are progressively working on it to make your experience better!!</span>
          }
        </div>
      </div>

    </div>
  )
}

export default InsightReview