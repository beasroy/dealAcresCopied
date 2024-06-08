'use client'
import {useState} from 'react'
import styles from './aboutDev.module.css'

function AboutDev() {


    const aboutText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit lorem eu semper malesuada. Nulla vitae velit efficitur, venenatis lectus vel, ullamcorper libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum porttitor nunc dolor. Aenean condimentum elit vitae lacus vehicula, sit amet volutpat odio laoreet. Aenean eu fringilla leo. Sed mattis justo felis, lacinia porttitor purus varius varius. Ut vel ultrices nisl. Proin vel tortor at nisl pharetra bibendum quis vel libero. Suspendisse ullamcorper orci leo, sit amet elementum arcu congue sit amet. Quisque commodo bibendum urna, eget posuere leo blandit ac. Maecenas volutpat nibh fermentum metus euismod, in tincidunt mi tempor. Integer ipsum ligula, vehicula ac tempor nec, semper eu velit. Nunc condimentum, lorem eget sollicitudin maximus, ligula ante lacinia erat, et tincidunt arcu mauris eget ligula. Donec eget efficitur turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In egestas ex nec mollis vestibulum. Fusce et felis urna. Etiam vitae interdum ligula. Nam eleifend molestie massa eu sagittis. Sed eu purus ac mauris vestibulum condimentum interdum eu erat. '

    return (
      <div className={`${styles.aboutDevContent} container_box_shadow !border-none`}>
          <h5>About M3M</h5>
          <p>{aboutText}</p>
        
      </div>
    )
}

export default AboutDev