import React, { createContext, useContext, useState } from "react";

const ComparePropertyContext = createContext();

export function useCompareProperty() {
  return useContext(ComparePropertyContext);
}

export function ComparePropertyProvider({ children }) {
  const [compareProperties, setCompareProperties] = useState([]);

  const addToCompare = (property) => {
    setCompareProperties((prevProperties) => [...prevProperties, property]);
  };

  const removeFromCompare = (property) => {
    setCompareProperties((prevProperties) =>
      prevProperties.filter((p) => p.id !== property.id)
    );
  };

  const isAddedToCompare = (property) => {
    return compareProperties.some((p) => p.id === property.id);
  };

  return (
    <ComparePropertyContext.Provider
      value={{
        addToCompare,
        removeFromCompare,
        isAddedToCompare,
        compareProperties,
      }}
    >
      {children}
    </ComparePropertyContext.Provider>
  );
}
