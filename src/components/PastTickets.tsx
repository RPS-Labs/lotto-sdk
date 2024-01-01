import { FC, useState } from 'react';
import { Address } from 'viem';
import * as Tabs from '@radix-ui/react-tabs';
import { RiMedalLine } from 'react-icons/ri';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useTheme } from '../RpsProvider';

export interface PastTicketsItemProps {
  [potId: string]: {
    NumOfTickets?: number;
    PotFillPercentage?: number;
    tickets?: { ticket_id: number }[];
  };
}
export interface PastTicketsProps {
  theme?: 'light' | 'dark';
  user?: Address;
}

export const PastTickets: FC<PastTicketsProps> = () => {
  // Replace with hook
  // const { data, isLoading, error } = usePastTickets(user);
  const potsData: PastTicketsItemProps = {
    '3': {
      NumOfTickets: 2,
      PotFillPercentage: 50,
      tickets: [{ ticket_id: 301 }, { ticket_id: 302 }],
    },
    '4': {
      NumOfTickets: 4,
      PotFillPercentage: 80,
      tickets: [
        { ticket_id: 401 },
        { ticket_id: 402 },
        { ticket_id: 403 },
        { ticket_id: 404 },
      ],
    },
    '5': {
      NumOfTickets: 1,
      PotFillPercentage: 100,
      tickets: [{ ticket_id: 501 }],
    },
  };
  const theme = useTheme();
  const potIds = Object.keys(potsData);
  const lastThreePots = potIds.slice(-3).reverse();
  const [selectedPot, setSelectedPot] = useState(lastThreePots[0] || '');

  const isDark = theme === 'dark';

  return (
    <div
      className={`rps-h1 rounded-lg p-2 ${
        isDark
          ? 'border-0 bg-neutral-900 ring-1 ring-neutral-600'
          : 'ring-1 ring-neutral-300 bg-white'
      }`}
    >
      <div className="flex flex-row items-center justify-between px-4 py-2">
        <div
          className={`flex flex-row font-semibold items-center justify-center text-[8px] gap-2 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          <RiMedalLine className="w-5 h-5" />
          <h1>Past Pot</h1>
        </div>
        <HiOutlineDotsHorizontal className="w-5 h-5" />
      </div>
      {lastThreePots.length === 0 ? (
        <div
          className={`p-2 mx-4 text-sm ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          No tickets available
        </div>
      ) : (
        <Tabs.Root value={selectedPot} onValueChange={setSelectedPot}>
          <Tabs.List className="rps-h1 no-scrollbar mb-4 ml-[-15px] flex w-[calc(100%_+_30px)]  border-b border-gray-700 md:ml-0 md:w-full">
            {lastThreePots.map((potId) => (
              <Tabs.Trigger
                key={potId}
                value={potId}
                className={`group relative min-w-0 shrink-0 whitespace-nowrap border-b-2 border-transparent bg-transparent py-4 px-8 text-center hover:text-gray-700 focus:z-10 ${
                  isDark ? 'text-white' : 'text-gray-700'
                } ${
                  selectedPot === potId
                    ? 'border-b-[#620DED] text-[#620DED]'
                    : ''
                }`}
              >
                <span className="font-semibold text-md">POT #{potId}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {lastThreePots.map((potId) => (
            <Tabs.Content key={potId} value={potId} className="col-span-full">
              <div className="w-full mt-2">
                {potsData[potId]?.tickets?.length === 0 ? (
                  <div
                    className={`p-2 mx-4 text-sm ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    No tickets
                  </div>
                ) : (
                  <div className="grid-rows-10 md:grid-rows-19 no-scrollbar m-4 grid max-h-[500px] grid-cols-4 gap-4 overflow-auto p-2 md:grid-cols-8 lg:grid-cols-10 2xl:grid-cols-12">
                    {potsData[potId]?.tickets?.map((ticket) => (
                      <div
                        key={ticket.ticket_id}
                        className={`reservoir-h1 mx-2 flex h-[45px] w-[85px] cursor-default items-center justify-center bg-[url('https://ik.imagekit.io/rpslabs/public/ticket.svg')] text-sm font-light ${
                          isDark ? 'text-gray-300' : 'text-gray-300'
                        }`}
                      >
                        <div>#{ticket.ticket_id}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      )}
    </div>
  );
};
