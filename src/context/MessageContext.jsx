import React, { createContext, useState } from "react";

export const MesaggeContext = React.createContext("");

const MesaggeProvider = ({ children }) => {
  const [mesagge, setMesagge] = useState("");
  return (
    <MesaggeContext.Provider value={[mesagge, setMesagge]}>
      {children}
    </MesaggeContext.Provider>
  );
};

export default MesaggeProvider;
