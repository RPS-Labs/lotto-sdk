import React, { FC } from 'react';
import { RiUser3Line } from 'react-icons/ri';
import { FiExternalLink } from 'react-icons/fi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { useTheme } from '../RpsProvider';

export interface PastWinnerItem {
  formattedPrize: number;
  potId: number;
  raffle_timestamp: string;
  tx_hash: string;
  vrf_tx_hash: string;
  wallet_address: string;
}

export interface PastWinnerProps {
  theme?: 'light' | 'dark';
}

export const PastWinners: React.FC<PastWinnerProps> = () => {
  const theme = useTheme();
  const isDark = theme === 'dark';

  // Replace with hook
  // const { data, isLoading, error } = useWinners();
  const data: PastWinnerItem[] = [
    {
      formattedPrize: 1,
      potId: 1,
      raffle_timestamp: '2023-11-21T12:34:56Z',
      tx_hash: '0xabcdef1234567890',
      vrf_tx_hash: '0x1234567890abcdef',
      wallet_address: '0x1234567890abcdef',
    },
  ];

  return (
    <div
      className={`rps-h1 flex flex-col  max-w-[600px] no-scrollbar max-h-[602px] w-full overflow-x-hidden rounded-lg border px-2 ${
        isDark
          ? 'bg-neutral-900 ring-1 ring-neutral-600 text-neutral-200'
          : 'ring-1 ring-neutral-300 bg-white text-neutral-900'
      } md:px-4`}
    >
      {/* Header */}
      <div className="flex flex-row items-center justify-between px-4 py-2">
        <div className="flex flex-row font-semibold items-center justify-center text-[8px] gap-2">
          <RiUser3Line className="w-5 h-5" />
          <h1>Past Winners</h1>
        </div>
        <HiOutlineDotsHorizontal className="w-5 h-5" />
      </div>
      {/* Table */}
      <table className="w-full mb-0">
        <thead
          className={`sticky top-0 z-10  border-b ring-b ${
            isDark
              ? 'border-neutral-200 bg-neutral-900'
              : 'border-neutral-800 bg-white'
          }`}
        >
          <tr
            className={`md:text-medium text-xs md:text-sm ${
              isDark ? 'text-neutral-200' : 'text-[#747474]'
            }`}
          >
            <th className="py-4 font-medium text-left md:p-4">
              Wallet Address
            </th>
            <th className="py-4 font-medium text-left md:p-4">Prize</th>
            <th className="py-4 font-medium text-center md:p-4">Time</th>
            <th className="py-4 font-medium text-center md:p-4">Etherscan</th>
            <th className="hidden py-4 font-medium text-center md:block md:p-4">
              VRF
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <PastWinnerItemRow key={item.tx_hash} data={item} theme={theme} />
          ))}
        </tbody>
      </table>
      <div className={`m-2 overflow-hidden w-full flex ${isDark ? '' : ''}`}>
        <div className="flex flex-row items-center gap-2 px-4 py-1 rounded-md justify-left">
          <img
            src="https://ik.imagekit.io/rpslabs/public/rps-logo.svg"
            alt="hotpot-logo"
            className="w-5 h-5"
          />
          <h2
            className={`text-sm font-medium ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Powered by{' '}
            <a
              href="https://rpslabs.io"
              className={`no-underline ${
                isDark ? 'text-[#9270FF]' : 'text-[#8869EB]'
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

const PastWinnerItemRow: FC<{
  data: PastWinnerItem;
  theme: 'light' | 'dark';
}> = ({ data, theme }) => {
  const isDark = theme === 'dark';
  const time = new Date(data.raffle_timestamp).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <tr className="m-2 text-sm text-center border-0 border-b">
      <td className="px-2 py-4 text-left md:w-1/3 md:px-4">
        <div className="flex flex-row items-center transition rounded outline-none cursor-pointer justify-left hover:text-purple-700 focus:text-purple-700 hover:text-purple-500">
          <Jazzicon
            diameter={20}
            seed={jsNumberForAddress(data.wallet_address || '')}
          />
          <div className="hidden w-1/3 p-2 font-medium text-left md:flex">
            {`${data.wallet_address.slice(0, 7)}...${data.wallet_address.slice(
              -7
            )}`}
          </div>
          <div className="w-1/3 p-2 font-medium text-left md:hidden">
            {`${data.wallet_address.slice(0, 5)}...${data.wallet_address.slice(
              -5
            )}`}
          </div>
        </div>
      </td>
      <td className="p-2 text-center">
        <div className="flex flex-row items-center gap-2 justify-left">
          <img
            src="https://ik.imagekit.io/rpslabs/public/eth.svg"
            className="w-3 h-3 md:h-4 md:w-4"
            alt="ETH Logo"
          />
          <span>{data.formattedPrize}</span>
        </div>
      </td>
      <td
        className={`hidden p-2 text-center md:table-cell ${
          isDark ? 'text-neutral-200' : 'text-neutral-900'
        }`}
      >
        {time}
      </td>
      <td className="p-2 text-center">
        {data.tx_hash && data.tx_hash !== '' && (
          <a
            href={`https://etherscan.io/tx/${data.tx_hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-row items-center justify-center font-medium no-underline hover:text-purple-700 focus:text-purple-700 hover:text-purple-500 ${
              isDark ? 'text-neutral-200' : 'text-neutral-900'
            }`}
          >
            <span className="text-xs">View</span>
            <FiExternalLink className="ml-2" />
          </a>
        )}
      </td>
      <td className="hidden p-2 text-center md:table-cell">
        {data.vrf_tx_hash && data.vrf_tx_hash !== '' && (
          <a
            href={`https://etherscan.io/tx/${data.vrf_tx_hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-row items-center justify-center font-medium no-underline hover:text-purple-700 focus:text-purple-700 hover:text-purple-500 ${
              isDark ? 'text-neutral-200' : 'text-neutral-900'
            }`}
          >
            <span className="text-xs">View</span>
            <FiExternalLink className="ml-2" />
          </a>
        )}
      </td>
    </tr>
  );
};
