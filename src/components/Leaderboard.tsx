import React, { FC } from 'react';
import { Address } from 'viem';
import { RiMedalLine } from 'react-icons/ri';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useTheme } from '../RpsProvider';

interface LeaderboardItem {
  boost: string;
  rank: number;
  totalTickets: number;
  user: string;
}

export interface LeaderboardProps {
  theme?: 'light' | 'dark';
  user?: Address;
}

export const Leaderboard: React.FC<LeaderboardProps> = () => {
  // Replace with hook
  // const { data, isLoading, error } = useLeaderboard(user);
  const data: LeaderboardItem[] = [
    {
      rank: 1,
      user: '0xA34589Bd802aeDacd4688697057B0C287effaC29',
      boost: '2x',
      totalTickets: 135,
    },
    {
      rank: 2,
      user: '0x410965D10c91A16471D7cf3BeC9AA17105B3cD01',
      boost: '1.5x',
      totalTickets: 90,
    },
    {
      rank: 3,
      user: '0x555c691B7fF6460603dB4D50F37C5C4CA65Bdb42',
      boost: '1.5x',
      totalTickets: 85,
    },
    {
      rank: 4,
      user: '0x8fD2B231B664386e7d5828B23c1fC3F6390FC355',
      boost: '1.5x',
      totalTickets: 80,
    },
    {
      rank: 5,
      user: '0x3b89509b8B62308b25E0474ffBF20EEe630ef782',
      boost: '1.5x',
      totalTickets: 75,
    },
  ];

  const theme = useTheme();
  const isDark = theme === 'dark';
  const containerClass = isDark
    ? 'border-0 bg-neutral-900 ring-1 ring-neutral-600'
    : 'ring-1 ring-neutral-300 bg-white';

  return (
    <div
      className={`rps-h1 no-scrollbar flex flex-col max-h-[540px] max-w-[600px] overflow-y-auto overflow-x-hidden rounded-lg  ${containerClass}`}
    >
      {/* Header */}
      <div
        className={`flex flex-row items-center justify-between px-4 py-2 ${
          isDark ? 'bg-neutral-900 text-neutral-200' : 'bg-white'
        }`}
      >
        <div
          className={`flex flex-row font-semibold items-center justify-center text-[8px] gap-2 ${
            isDark ? 'text-neutral-200' : 'text-black'
          }`}
        >
          <RiMedalLine className="w-5 h-5" />
          <h1>Leaderboard</h1>
        </div>
        <HiOutlineDotsHorizontal className="w-5 h-5" />
      </div>

      <table className="w-full mb-2 table-auto">
        <thead
          className={`sticky top-0 ${
            isDark ? 'bg-neutral-900' : 'bg-white'
          } border-b z-5  ring-neutral-100 ${isDark ? 'ring-neutral-600' : ''}`}
        >
          <tr className="px-4 mx-4 text-center">
            <th
              className={`py-4 text-center text-sm font-medium ${
                isDark ? 'text-neutral-300' : 'text-[#747474]'
              } md:py-4`}
            >
              Rank
            </th>
            <th
              className={`py-4 text-left text-sm font-medium ${
                isDark ? 'text-neutral-300' : 'text-[#747474]'
              } md:py-4`}
            >
              Wallet Addresses
            </th>
            <th
              className={`py-4 text-right text-sm font-medium ${
                isDark ? 'text-neutral-300' : 'text-[#747474]'
              } md:py-4`}
            >
              Boost
            </th>
            <th
              className={`py-4 text-center text-sm font-medium ${
                isDark ? 'text-neutral-300' : 'text-[#747474]'
              } md:py-4`}
            >
              <span className="md:hidden">Tickets</span>
              <span className="hidden md:block">Total Tickets</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.slice(0, 5).map((item) => (
            <LeaderboardItemRow key={item.rank} {...item} theme={theme} />
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
          <h2
            className={`text-sm font-medium ${
              isDark ? 'text-neutral-300' : 'text-black'
            }`}
          >
            Powered by{' '}
            <a
              href="https://rpslabs.io"
              className={`no-underline ${
                isDark ? ' text-[#9270FF]' : ' text-[#8869EB]'
              }`}
            >
              RPS Labs
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};
const RankBadge: React.FC<{ rank: number; theme?: 'light' | 'dark' }> = ({
  rank,
  theme = 'light',
}) => {
  const isDark = theme === 'dark';
  const badgeClass = isDark ? 'text-neutral-300' : 'text-black';

  if (rank === 1) {
    return (
      <img
        src="https://ik.imagekit.io/rpslabs/public/leaderboard/rank1.svg"
        alt="Rank 1 Badge"
        className={`items-center flex-grow w-8 h-8 ${badgeClass}`}
      />
    );
  }
  if (rank === 2) {
    return (
      <img
        src="https://ik.imagekit.io/rpslabs/public/leaderboard/rank2.svg"
        alt="Rank 2 Badge"
        className={`items-center flex-grow w-8 h-8 ${badgeClass}`}
      />
    );
  }
  if (rank === 3) {
    return (
      <img
        src="https://ik.imagekit.io/rpslabs/public/leaderboard/rank3.svg"
        alt="Rank 3 Badge"
        className={`items-center flex-grow w-8 h-8 ${badgeClass}`}
      />
    );
  }

  return (
    <span className={`flex-grow m-1 text-sm font-medium ${badgeClass}`}>
      #{rank}
    </span>
  );
};
const LeaderboardItemRow: FC<
  LeaderboardItem & { theme?: 'light' | 'dark' }
> = ({ rank, user, boost, totalTickets, theme = 'light' }) => {
  const isDark = theme === 'dark';
  const rowClass = isDark ? 'text-neutral-200' : 'text-black';

  return (
    <tr className={`text-sm text-center ${rowClass}`}>
      <td
        aria-label="leaderboard"
        className="flex items-center px-2 py-4 md:px-2"
      >
        <RankBadge rank={rank} theme={theme} />
      </td>
      <td className="px-2 py-4 text-left md:w-1/3 md:px-2">
        {`${user.slice(0, 5)}...${user.slice(-5)}`}
      </td>
      <td className="px-2 py-4 text-right md:px-4">
        <span className="flex-grow text-sm font-medium">{boost}</span>
      </td>
      <td className="px-2 py-4 text-center md:px-4">
        <span className="flex-grow text-sm font-semibold">{totalTickets}</span>
      </td>
    </tr>
  );
};
