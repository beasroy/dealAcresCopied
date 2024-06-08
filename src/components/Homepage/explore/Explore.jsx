"use client";
import React, { useState } from "react";
import "./explore.css";
import BudgetCalculation from "@/components/budgetCalculation/BudgetCalculation";
import { cardData, carddata } from "./data";

const Explore = ({
  isFullScreen
}) => {
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
    <div className={`${isFullScreen ? 'pl-0 pr-0 justify-center' : 'cards-wrapper'}`}>
      <div>
        <h2 className="text-xl sm:text-2xl font-[Poppins] font-bold text-center py-4">
          {" "}
          Explore! <span className="text-blue-500">Insights and tools</span>
        </h2>
      </div>
      {/* ; */}
      <div className={`cards-container cursor-pointer overflow-x-auto compact ${!isFullScreen ? 'pl-2 ' : 'ol-0'  }`}>
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`card ${activeCard === card.id ? "active" : ""}`}
            style={{
              flex: activeCard === card.id ? "0 0 180px" : "0 0 170px",
              minWidth: activeCard === card.id ? "100%" : "170px",
              height: activeCard === card.id ? "100%" : "230px",
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
      {showBudgetCalculation && <BudgetCalculation onClose={handleBudgetCalculationClose} />}
    </div>
  );
};

export default Explore;