import React, { createContext, useState } from 'react';

const ShowsContext = createContext();

export const ShowsProvider = ({ children }) => {
  const [shows, setShows] = useState([]);

  return (
    <ShowsContext.Provider value={{ shows, setShows }}>
      {children}
    </ShowsContext.Provider>
  );
};

export { ShowsContext };
