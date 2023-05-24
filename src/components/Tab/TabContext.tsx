import React, { createContext, useState, useContext, useCallback } from 'react';

interface TabContextProps {
  activeTab: number;
  switchTab: (index: number) => void;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

export const useTab = (): TabContextProps => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTab must be used within a TabProvider');
  }
  return context;
};

export const TabProvider: React.FC = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const switchTab = useCallback((index: number) => {
    setActiveTab(index);
  }, []);

  const contextValue: TabContextProps = {
    activeTab,
    switchTab,
  };

  return (
    <TabContext.Provider value={contextValue}>
      {children}
    </TabContext.Provider>
  );
};
