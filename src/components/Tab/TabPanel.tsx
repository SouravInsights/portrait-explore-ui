import React from 'react';
import { useTab } from './TabContext';

const TabPanel: React.FC = ({ children }) => {
  const { activeTab } = useTab();

  return <div>{children[activeTab]}</div>;
};

export default TabPanel;
