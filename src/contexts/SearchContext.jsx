import React, { createContext, useContext, useState } from "react";

export const SearchContext = createContext("");

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    
    
    const searchTerm = (term) => {
        setSearch(term);
    }

    const searchContextValues = {
        search,
        searchTerm
    }

    return (
        <SearchContext.Provider value={searchContextValues}>
            {children}
        </SearchContext.Provider>
    );
}