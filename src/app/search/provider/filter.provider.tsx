import React, { createContext, useContext, useState } from "react";

interface FilterContextType {
  filterKey: string | null;
  setFilterKey: (key: string | null) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filterKey, setFilterKey] = useState<string | null>(null);

  return (
    <FilterContext.Provider value={{ filterKey, setFilterKey }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
