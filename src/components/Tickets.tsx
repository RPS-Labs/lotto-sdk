import { FC } from 'react';

export interface TicketsProps {
  isWinner: boolean;
  tab: 'current' | 'previous';
  tickets: number;
}

interface TicketProps {}
export const Tickets: FC<TicketProps> = () => {
  // Replace with hook
  // const { data, isLoading, error } = useTickets(user);
  const data: TicketsProps = {
    tickets: 100,
    isWinner: false,
    tab: 'current',
  };

  const { isWinner, tab, tickets } = data;
  return (
    <div
      className={`rps-h1 mx-2 flex h-[45px] w-[85px] items-center justify-center text-sm font-light bg-no-repeat
    ${
      isWinner &&
      `cursor-pointer bg-[url('https://ik.imagekit.io/rpslabs/public/winning-ticket.svg')] text-black transition-transform hover:scale-105 dark:text-black`
    } 
    ${
      tab === 'current' &&
      `cursor-default bg-[url('https://ik.imagekit.io/rpslabs/public/ticket.svg')] text-white`
    } 
    ${
      tab === 'previous' &&
      `cursor-default bg-[url('https://ik.imagekit.io/rpslabs/public/previous-ticket.svg')] text-[#A58AF9]`
    }`}
    >
      {tickets}
    </div>
  );
};
