"use client";
import React, { useState } from "react";
import "./explore.css";
import MobileBudgetCalculation from "@/components/budgetCalculation/MobileBudgetCalculation";
import { cardData, carddata } from "./data";

const MobileExplore = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [showBudgetCalculation, setShowBudgetCalculation] = useState(false);

  const handleCardHover = (cardId) => {
    setActiveCard(cardId);
  };

  const handleCardClick = (cardId) => {
    if (cardId === 5) {
      setShowBudgetCalculation(true);
    }
  };

  const handleBudgetCalculationClose = () => {
    setShowBudgetCalculation(false);
  };

  return (
    <div className="cards-wrapper mt-1">
      <div>
        <h2 className="text-sm font-[Poppins] font-bold p-3">
          {" "}
          Explore! <span className="text-blue-500">Insights and tools</span>
        </h2>
      </div>
      <div className="cards-container cursor-pointer">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`card ${activeCard === card.id ? "active" : ""}`}
            style={{
              flex: activeCard === card.id ? "0 0 100px" : "0 0 100px",
              minWidth: activeCard === card.id ? "100%" : "100px",
              height: activeCard === card.id ? "100%" : "140px",
              width: activeCard === card.id ? "80%" : "170px",
              margin: activeCard === card.id ? "0px" : "0px",
            }}
            onMouseEnter={() => handleCardHover(card.id)}
            onMouseLeave={() => setActiveCard(null)}
            onClick={() => handleCardClick(card.id)}
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
        ))}
      </div>
      {showBudgetCalculation && <MobileBudgetCalculation onClose={handleBudgetCalculationClose} />}
    </div>
  );
};

export default MobileExplore;