"use client"
import styles from './sideutilitybox.module.css'
import React, { useState } from "react";
import TagsContainer from '@/components/propertyListing/TagsContainer/TagsContainer'

export default function SideUtilityBox() {

    const [lookingFor, setLookingFor] = useState("");

    const handleLookingFor = (tag) => {
        setLookingFor(tag);
      };

    return (
      <div className={styles.sideUtilityBoxContainer}>
          <h6>Search Properties</h6>
          <h4>In Sector 37D,</h4>
          <TagsContainer
            tags={["Sell", "Rent"]}
            onTagClick={handleLookingFor}
            currentlySelected={lookingFor}
          />
          <button>Search Property</button>
      </div>
    )
}
