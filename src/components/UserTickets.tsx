import React, { FC } from 'react';

export const UserTickets: FC = () => {
  // Replace with hook
  // const { data, isLoading, error } = useUserTickets();
  const tickets = 100;

  return (
    <div className="group relative mx-1 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-l from-[#EE00BA] via-[#6100FF] to-[#FF3D00E5] p-0.5 text-sm font-medium text-gray-900 hover:from-[#620DED] hover:to-[#620DED] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:text-white dark:focus:ring-blue-800">
      <span className="relative px-5 py-2 bg-white rounded-md rps-h1 group-hover:bg-opacity-0 dark:bg-gray-900">
        {tickets} TIX
      </span>
    </div>
  );
};
