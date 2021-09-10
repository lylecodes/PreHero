import React, { useState, useEffect } from "react";

const SelectorContext = React.createContext({
  onMenuChange: () => {},
});

export const SelectorContextProvider = (props) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const activeMenuHandler = (newMenu) => {
    setActiveMenu(newMenu);
  };

  return (
    <SelectorContext.Provider
      value={{
        onMenuChange: activeMenuHandler,
      }}
    >
      {props.children}
    </SelectorContext.Provider>
  );
};

export default SelectorContext;
