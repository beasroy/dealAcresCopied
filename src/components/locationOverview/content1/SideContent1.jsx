import styles from './SideContent1.module.css'
import Addbox from '@/components/property/sidecontentcontainer/Addbox'
import SideUtilityBox from './SideUtilityBox'
import ExternalAd from './ExternalAd'


function SideContent1() {
  return (
    <div className={`${styles.sideContentContainer1} max-md:!hidden`}>
      
      <SideUtilityBox/>
      <ExternalAd/>
      <Addbox/>
    </div>
  )
}

export default SideContent1