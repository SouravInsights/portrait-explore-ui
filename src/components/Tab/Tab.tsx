import React from 'react';
import { useTab } from './TabContext';

interface TabProps {
  tabs: string[];
  defaultTab?: number;
  onTabSelect?: (index: number) => void;
}

const Tab: React.FC<TabProps> = ({ tabs, defaultTab = 0, onTabSelect }) => {
  const { activeTab, switchTab } = useTab();

  React.useEffect(() => {
    switchTab(defaultTab);
    if (onTabSelect) {
      onTabSelect(defaultTab);
    }
  }, [defaultTab, onTabSelect, switchTab]);

  const handleClick = (index: number) => {
    switchTab(index);
    if (onTabSelect) {
      onTabSelect(index);
    }
  };

  return (
    <div className="flex flex-wrap flex-row justify-normal gap-2 py-4">
      {tabs.map((label, index) => (
        <button
          key={index}
          className={`${
            activeTab === index
              ? 'bg-gray-800 text-white'
              : 'bg-[#EEEEEE] text-gray-600'
          } px-4 py-1 rounded-lg`}
          onClick={() => handleClick(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Tab;
