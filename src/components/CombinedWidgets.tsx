import { FC, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { RiBarChart2Line, RiMedalLine, RiUser3Line } from 'react-icons/ri';
import Activity from './Activity';
import { useTheme } from '../RpsProvider';
import { Leaderboard } from './Leaderboard';
import { PastWinners } from './PastWinners';

export interface CombinedWidgetsProps {
  theme?: 'light' | 'dark';
}

export const CombinedWidgets: FC<CombinedWidgetsProps> = () => {
  const [selectedTab, setSelectedTab] = useState('activities');
  const theme = useTheme();
  const isDark = theme === 'dark';
  const tabs = [
    {
      name: 'Activities',
      id: 'activities',
      icon: <RiBarChart2Line className="w-4 h-4" />,
    },
    {
      name: 'Leaderboard',
      id: 'leaderboard',
      icon: <RiMedalLine className="w-4 h-4" />,
    },
    {
      name: 'PastWinners',
      id: 'pastWinners',
      icon: <RiUser3Line className="w-4 h-4" />,
    },
  ];

  return (
    <div
      className={`rps-h1 rounded-lg p-2 overflow-hidden ${isDark ? '' : ' '}`}
    >
      <Tabs.Root value={selectedTab} onValueChange={setSelectedTab}>
        <div className="flex items-center justify-between mb-4 border-b border-gray-700">
          <Tabs.List className="flex items-center no-scrollbar">
            {tabs.map((tab) => (
              <Tabs.Trigger
                key={tab.id}
                value={tab.id}
                className={`group relative min-w-0 shrink-0 whitespace-nowrap  border-b-2 border-transparent bg-transparent py-2 px-2 text-center hover:text-neutral-500 focus:z-10 ${
                  isDark ? 'text-gray-600' : 'text-gray-600'
                } ${
                  selectedTab === tab.id
                    ? 'border-b-[#620DED] text-[#620DED]'
                    : ''
                }`}
              >
                <div
                  className={`flex flex-row items-center justify-center text-[8px] font-light gap-1 `}
                >
                  {tab.icon}
                  <h1>{tab.name}</h1>
                </div>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <HiOutlineDotsHorizontal className="w-5 h-5" />
        </div>
        <Tabs.Content
          key="Activities"
          value="activities"
          className="col-span-full"
        >
          <Activity />
        </Tabs.Content>
        <Tabs.Content
          key="Leaderboard"
          value="leaderboard"
          className="col-span-full"
        >
          <Leaderboard />
        </Tabs.Content>
        <Tabs.Content
          key="PastWinners"
          value="pastWinners"
          className="col-span-full"
        >
          <PastWinners />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};
