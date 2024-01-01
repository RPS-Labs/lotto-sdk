import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { RiMedalLine } from 'react-icons/ri';
import { Address } from 'viem';
import { useTheme } from '../RpsProvider';

export interface CurrentTicketsItemProps {
  NumOfTickets?: number;
  PotFillPercentage?: number;
  tickets?: { ticket_id: number }[];
}

export interface CurrentTicketsProps {
  theme?: 'light' | 'dark';
  user?: Address;
}

export const CurrentTickets: React.FC<CurrentTicketsProps> = () => {
  // Replace with hook
  // const { data, isLoading, error } = useCurrentTickets(user);

  const currentTickets: CurrentTicketsItemProps = {
    NumOfTickets: 5,
    PotFillPercentage: 80,
    tickets: [
      { ticket_id: 1 },
      { ticket_id: 2 },
      { ticket_id: 3 },
      { ticket_id: 4 },
      { ticket_id: 5 },
    ],
  };

  const theme = useTheme();
  const potFill = currentTickets?.PotFillPercentage || 0;
  const themeClassNames = {
    container:
      theme === 'dark'
        ? 'border-0 bg-neutral-900 ring-1 ring-neutral-600'
        : 'ring-1 ring-neutral-300 bg-white',
    text: theme === 'dark' ? 'text-gray-300' : 'text-black',
    ticketBg:
      theme === 'dark'
        ? 'bg-[url("https://ik.imagekit.io/rpslabs/public/dark-ticket.svg")]'
        : 'bg-[url("https://ik.imagekit.io/rpslabs/public/ticket.svg")]',
  };

  return (
    <div className={`rps-h1 rounded-md py-2 ${themeClassNames.container}`}>
      <div className="w-full mt-2">
        <div className="flex flex-row items-center justify-between px-4 py-2">
          <div
            className={`flex flex-row font-semibold items-center justify-center text-[8px] gap-2 ${themeClassNames.text}`}
          >
            <RiMedalLine className="w-5 h-5" />
            <h1>Current Pot</h1>
          </div>
          <HiOutlineDotsHorizontal className="w-5 h-5" />
        </div>
        {currentTickets?.NumOfTickets === 0 ||
        currentTickets?.NumOfTickets === undefined ? (
          <div className={`p-2 mx-4 text-sm ${themeClassNames.text}`}>
            No tickets
          </div>
        ) : (
          <div className="grid-rows-10 md:grid-rows-19 no-scrollbar m-4 grid max-h-[500px] grid-cols-3 gap-4 overflow-auto p-2 md:grid-cols-7 lg:grid-cols-10 2xl:grid-cols-12">
            {currentTickets && (
              <div className="reservoir-h1 relative mx-2 flex h-[45px] w-[85px] text-sm font-medium text-white bg-[url('https://ik.imagekit.io/rpslabs/public/pending-ticket.svg')]">
                <div
                  className={`bg-[url('https://ik.imagekit.io/rpslabs/public/ticket.svg')] flex h-[45px] w-[85px] items-center justify-center`}
                  style={{ width: `${potFill}%` }}
                >
                  {potFill >= 1 && (
                    <span className="absolute right-0 flex items-center justify-center left-1">
                      {potFill}%
                    </span>
                  )}
                </div>
              </div>
            )}

            {currentTickets?.tickets?.map((ticket) => (
              <div
                key={ticket.ticket_id}
                className='rps-h1 mx-2 flex h-[45px] w-[85px] cursor-default items-center justify-center bg-[url("https://ik.imagekit.io/rpslabs/public/ticket.svg")] text-sm font-light text-white'
              >
                <div>#{ticket.ticket_id}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
