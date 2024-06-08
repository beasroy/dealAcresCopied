"use client";
import React, { useState } from "react";
import "./explore.css";
import { cardData,carddata } from "./data";
import ExploreCard from "./ExploreCard";

const NewExplore = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardHover = (cardId) => {
    setActiveCard(cardId);
  };

  return (
    <div className="cards-wrapper max-[500px]:!px-0 max-[500px]:!mx-0">
      <div>
        <h2 className="text-xl sm:text-2xl font-[Poppins] font-bold text-center py-6">
          {" "}
          Explore! <span className="text-blue-500">Insights and tools</span>
        </h2>
      </div>
      <div className="cards-container">
        {cardData.map((card) => (
          <>
            <div
              key={card.id}
              className={`card ${activeCard === card.id ? "active" : ""}`}
              style={{
                flex: activeCard === card.id ? "0 0 160px" : "0 0 160px",
                minWidth: activeCard === card.id ? "100%" : "160px",
                height: activeCard === card.id ? "100%" : "230px",
                width: activeCard === card.id ? "100%" : "160px",
                margin: activeCard === card.id ? "0px" : "0px",
              }}
              onMouseEnter={() => handleCardHover(card.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div
                className="card-content"
                style={{
                  backgroundImage: `linear-gradient(to right, ${card.color}, white)`,
                }}
              >
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                />
                {activeCard === card.id && (
                  <div className="card-description">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="cards-container-responsive pb-8 justify-start items-stretch">
        {cardData.map((card, i) => (

            <ExploreCard key={i} card={card}/>

        ))}
      </div>
    </div>
  );
};

export default NewExplore;
