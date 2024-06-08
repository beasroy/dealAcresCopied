'use client'
import styles from './builderSpeak.module.css'
import { useState } from 'react'

const builderData={
    'Chairman Name':'Mr. Basant Bansal',
    'Chairman Message':'Chairman lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed est aliquet, tempus sem non, varius lorem. Proin congue posuere sem, ac suscipit enim iaculis luctus. Nulla vel ipsum eu tortor dignissim ultrices. Vestibulum auctor lectus vitae enim rutrum feugiat. Ut laoreet diam et nibh vulputate, sed cursus diam varius. Praesent posuere tellus id lacus lacinia efficitur at ut urna. Nunc nec mauris metus. Morbi quis massa in orci tempus lacinia ut ut diam.Quisque sollicitudin nulla in lacus sodales fringilla. Duis vestibulum nunc sed lacus dapibus imperdiet non at ligula. Nullam sodales, magna et consectetur lobortis, ipsum arcu placerat velit, vitae sodales mi leo egestas felis. Nullam vitae placerat augue, accumsan pretium magna. Fusce nunc felis, dictum eget pellentesque efficitur, elementum id purus. Nulla vel ultrices lacus. Ut at metus facilisis, pretium quam a, dignissim mauris. Sed sapien turpis, mattis ut ipsum non, lobortis imperdiet nulla. Duis sollicitudin, erat eu pharetra dignissim, nisl augue egestas lacus, et aliquet neque quam a velit.Pellentesque gravida risus mi, luctus scelerisque ligula accumsan ac. Ut augue est, eleifend non gravida semper, pharetra id tellus. Vivamus vel ex tempor, cursus diam vitae, bibendum dolor. Integer venenatis nunc laoreet lectus tempor, sit amet lobortis ipsum mollis. Donec nec mauris in dolor convallis porta. Praesent pellentesque tincidunt justo, vel congue velit lacinia posuere. Donec nec nulla elit. Duis vehicula sodales rutrum. In placerat auctor sapien a sagittis. Mauris enim tellus, faucibus et pulvinar at, gravida in sem. Integer urna sem, pharetra sollicitudin mattis interdum, pulvinar at elit.',
    'Mission':'Mission lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed est aliquet, tempus sem non, varius lorem. Proin congue posuere sem, ac suscipit enim iaculis luctus. Nulla vel ipsum eu tortor dignissim ultrices. Vestibulum auctor lectus vitae enim rutrum feugiat. Ut laoreet diam et nibh vulputate, sed cursus diam varius. Praesent posuere tellus id lacus lacinia efficitur at ut urna. Nunc nec mauris metus. Morbi quis massa in orci tempus lacinia ut ut diam.Quisque sollicitudin nulla in lacus sodales fringilla. Duis vestibulum nunc sed lacus dapibus imperdiet non at ligula. Nullam sodales, magna et consectetur lobortis, ipsum arcu placerat velit, vitae sodales mi leo egestas felis. Nullam vitae placerat augue, accumsan pretium magna. Fusce nunc felis, dictum eget pellentesque efficitur, elementum id purus. Nulla vel ultrices lacus. Ut at metus facilisis, pretium quam a, dignissim mauris. Sed sapien turpis, mattis ut ipsum non, lobortis imperdiet nulla. Duis sollicitudin, erat eu pharetra dignissim, nisl augue egestas lacus, et aliquet neque quam a velit.Pellentesque gravida risus mi, luctus scelerisque ligula accumsan ac. Ut augue est, eleifend non gravida semper, pharetra id tellus. Vivamus vel ex tempor, cursus diam vitae, bibendum dolor. Integer venenatis nunc laoreet lectus tempor, sit amet lobortis ipsum mollis. Donec nec mauris in dolor convallis porta. Praesent pellentesque tincidunt justo, vel congue velit lacinia posuere. Donec nec nulla elit. Duis vehicula sodales rutrum. In placerat auctor sapien a sagittis. Mauris enim tellus, faucibus et pulvinar at, gravida in sem. Integer urna sem, pharetra sollicitudin mattis interdum, pulvinar at elit.',
    'Vision':'Vision lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed est aliquet, tempus sem non, varius lorem. Proin congue posuere sem, ac suscipit enim iaculis luctus. Nulla vel ipsum eu tortor dignissim ultrices. Vestibulum auctor lectus vitae enim rutrum feugiat. Ut laoreet diam et nibh vulputate, sed cursus diam varius. Praesent posuere tellus id lacus lacinia efficitur at ut urna. Nunc nec mauris metus. Morbi quis massa in orci tempus lacinia ut ut diam.Quisque sollicitudin nulla in lacus sodales fringilla. Duis vestibulum nunc sed lacus dapibus imperdiet non at ligula. Nullam sodales, magna et consectetur lobortis, ipsum arcu placerat velit, vitae sodales mi leo egestas felis. Nullam vitae placerat augue, accumsan pretium magna. Fusce nunc felis, dictum eget pellentesque efficitur, elementum id purus. Nulla vel ultrices lacus. Ut at metus facilisis, pretium quam a, dignissim mauris. Sed sapien turpis, mattis ut ipsum non, lobortis imperdiet nulla. Duis sollicitudin, erat eu pharetra dignissim, nisl augue egestas lacus, et aliquet neque quam a velit.Pellentesque gravida risus mi, luctus scelerisque ligula accumsan ac. Ut augue est, eleifend non gravida semper, pharetra id tellus. Vivamus vel ex tempor, cursus diam vitae, bibendum dolor. Integer venenatis nunc laoreet lectus tempor, sit amet lobortis ipsum mollis. Donec nec mauris in dolor convallis porta. Praesent pellentesque tincidunt justo, vel congue velit lacinia posuere. Donec nec nulla elit. Duis vehicula sodales rutrum. In placerat auctor sapien a sagittis. Mauris enim tellus, faucibus et pulvinar at, gravida in sem. Integer urna sem, pharetra sollicitudin mattis interdum, pulvinar at elit.',
}

function BuilderSpeak() {

    const [builderInfo,setBuilderInfo] = useState('Chairman Message')
    // const [showMore,setShowMore] =  useState(false)

    return (
      <div className={`${styles.builderSpeakContainer} container_box_shadow !border-none`}>
        <div className={styles.subCategories}>
            <p
            onClick={()=>setBuilderInfo('Chairman Message')} 
            className={`${builderInfo==='Chairman Message'?styles.selected:''} border-r-[3px] border-r-[#dbdbdb] py-4 min-w-[160px]`}>
                Chairman Message
            </p>
            <p
            onClick={()=>setBuilderInfo('Mission')} 
            className={`${builderInfo==='Mission'?styles.selected:''} border-r-[3px] border-r-[#dbdbdb] py-4`}
            >
                Mission
            </p>
            <p
            onClick={()=>setBuilderInfo('Vision')} 
            className={`${builderInfo==='Vision'?styles.selected:''}  py-4`}
            >
                Vision
            </p>
        </div>
        <div className={styles.subContent}>
            <h2>{builderData['Chairman Name']}</h2>
            <p>{builderData[builderInfo]}</p>
            {/* <h6 onClick={()=>setShowMore(!showMore)}>{showMore? 'Show Less':'Show More'}</h6> */}
        </div>
      </div>
    )
}

export default BuilderSpeak