import Image from 'next/image';

function ExternalAd() {

 const adStyle ={width:'100%',height:'350px',overflow:'hidden',position:'relative',margin:'1rem 0 1rem 0',borderRadius:'10px'}   
    
  return (
    <div style={adStyle}>            
        <Image
            src='/locationOverview/property ad.jpeg'
            alt="Advertisment"
            layout="fill"
            style={{objectFit:"cover"}}
        />
    </div>
  )
}

export default ExternalAd