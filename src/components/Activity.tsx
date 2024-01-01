import React from 'react';
import { RiBarChart2Line } from 'react-icons/ri';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useTheme } from '../RpsProvider';

interface ActivityItem {
  tickets: number;
  time: string;
  user: string;
}

export interface ActivityProps {
  theme?: 'light' | 'dark';
}

export const Activity: React.FC<ActivityProps> = () => {
  const theme = useTheme();

  // Replace with hook
  // const { data, isLoading, error } = useActivity();

  const data: ActivityItem[] = [
    {
      user: '0xA34589Bd802aeDacd4688697057B0C287effaC29',
      time: '2 secs ago',
      tickets: 135,
    },
    {
      user: '0x410965D10c91A16471D7cf3BeC9AA17105B3cD01',
      time: '5 secs ago',
      tickets: 90,
    },
    {
      user: '0x555c691B7fF6460603dB4D50F37C5C4CA65Bdb42',
      time: '10 secs ago',
      tickets: 85,
    },
    {
      user: '0x8fD2B231B664386e7d5828B23c1fC3F6390FC355',
      time: '2 mins ago',
      tickets: 80,
    },
    {
      user: '0x3b89509b8B62308b25E0474ffBF20EEe630ef782',
      time: '10 mins ago',
      tickets: 75,
    },
  ];
  const isLoading = false;
  const error = null;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const themeClassNames = {
    container:
      theme === 'dark'
        ? 'border-0 bg-neutral-900 ring-1 ring-neutral-600 text-neutral-200'
        : 'ring-1 ring-neutral-300 bg-white text-black',
    header: theme === 'dark' ? 'bg-neutral-900' : 'bg-white',
    logo: theme === 'dark' ? 'text-white' : 'text-black',
    tableHeader: theme === 'dark' ? 'bg-neutral-900' : 'bg-white',
    text: theme === 'dark' ? 'text-neutral-300' : 'text-neutral-900',

    footerText: theme === 'dark' ? 'text-white' : 'text-black',
    footerTextRPS: theme === 'dark' ? 'text-[#9270FF]' : 'text-[#8869EB]',
  };

  return (
    <div
      className={`rps-h1 no-scrollbar flex flex-col max-h-[700px] max-w-[500px] overflow-y-hidden overflow-x-hidden rounded-lg md:mt-0 md:overflow-x-auto ${themeClassNames.container}`}
    >
      {/* Header */}
      <div
        className={`flex flex-row items-center justify-between px-4 py-2 ${themeClassNames.header}`}
      >
        <div className="flex flex-row font-semibold items-center justify-center text-[8px] gap-2">
          <RiBarChart2Line className={`w-5 h-5 ${themeClassNames.logo}`} />
          <h1 className={`${themeClassNames.text}`}>Activities</h1>
        </div>
        <HiOutlineDotsHorizontal className="w-5 h-5" />
      </div>
      <table className="w-full mb-2 table-auto">
        <thead
          className={`sticky top-0 px-4 rounded-t-lg z-5 ${themeClassNames.tableHeader}`}
        >
          <tr className="px-4 mx-4 text-center">
            <th
              className={`py-4 px-4 text-left text-sm font-medium ${themeClassNames.text}`}
            >
              User
            </th>
            <th
              className={`py-4 text-center text-sm font-medium ${themeClassNames.text}`}
            >
              Tickets
            </th>
            <th
              className={`py-4 px-4 text-right text-sm font-medium ${themeClassNames.text}`}
            >
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 5).map((item: ActivityItem, index: number) => (
            <ActivityItemRow
              key={item.user}
              index={index}
              {...item}
              theme={theme}
            />
          ))}
        </tbody>
      </table>
      {/* Footer */}
      <div className={`m-2 overflow-hidden `}>
        <div className="flex flex-row items-center gap-2 px-4 py-1 rounded-md justify-left">
          <img
            src="https://ik.imagekit.io/rpslabs/public/rps-logo.svg"
            alt="hotpot-logo"
            className="w-5 h-5"
          />
          <h2 className={`text-sm font-medium ${themeClassNames.footerText}`}>
            Powered by{' '}
            <a
              href="https://rpslabs.io"
              className={`no-underline ${themeClassNames.footerTextRPS}`}
            >
              RPS Labs
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

interface ActivityItemRowProps extends ActivityItem {
  index: number;
  theme: 'light' | 'dark';
}

const ActivityItemRow: React.FC<ActivityItemRowProps> = ({
  user,
  tickets,
  time,
  index,
  theme,
}) => {
  const themeClassNames = {
    row: theme === 'dark' ? 'border-0' : '',
    text: theme === 'dark' ? 'text-neutral-300' : 'text-[#747474]',
  };

  return (
    <tr key={index} className={`text-sm text-center ${themeClassNames.row}`}>
      <td
        className={`px-4 py-4 text-left md:w-1/3 md:px-4 ${themeClassNames.text}`}
      >
        {`${user.slice(0, 5)}...${user.slice(-5)}`}
      </td>
      <td className={`px-2 py-4 text-center md:px-4 ${themeClassNames.text}`}>
        <span className="flex-grow text-sm font-medium text-[#8869EB]">
          +{tickets} Tickets
        </span>
      </td>
      <td className={`px-4 py-4 text-right md:px-4 ${themeClassNames.text}`}>
        <span className="flex-grow text-sm font-medium">{time}</span>
      </td>
    </tr>
  );
};

export default Activity;
