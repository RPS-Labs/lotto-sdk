import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { CgSpinnerAlt } from 'react-icons/cg';
import { useTheme } from '../RpsProvider';

export interface PrizePoolWidgetItemProps {
  isDrawing: boolean;
  prizePool: {
    currentPotSize: string;
    potLimit: string;
  } | null;
  rafflePotId: number;
}

export interface PrizePoolWidgetProps {
  theme?: 'light' | 'dark';
}

export const PrizePoolWidget: React.FC<PrizePoolWidgetProps> = () => {
  // Replace with hook
  // const { data, isLoading, error } = usePrizePool();
  const data: PrizePoolWidgetItemProps = {
    isDrawing: false,
    rafflePotId: 1,
    prizePool: {
      currentPotSize: '10',
      potLimit: '100',
    },
  };

  const { isDrawing, rafflePotId, prizePool } = data;

  const theme = useTheme();
  const textColorClass = theme === 'dark' ? 'text-white' : 'text-[#1A1D1F]';
  const bgColorClass = theme === 'dark' ? 'bg-[#1D1D1D]' : 'bg-neutral-100';
  const iconColorClass =
    theme === 'dark' ? 'text-violet-800' : 'text-violet-700';
  const borderColorClass =
    theme === 'dark' ? 'border-neutral-700' : 'border-neutral-300';
  const trailColor = theme === 'dark' ? '#FFF' : '#1D1D1D';
  const pathColor = theme === 'dark' ? '#9379FB' : '#CABDFF';

  return (
    <div
      className={`overflow-hidden rps-h1 flex w-full flex-col items-center justify-between gap-2 rounded-[20px] border p-4 md:max-w-[486px] border border-black ${bgColorClass} `}
    >
      <div className="flex justify-start w-full items-left">
        <h1
          className={`z-5 rounded text-base font-semibold backdrop-blur-sm ${textColorClass} rps-h1`}
        >
          Prize Pool #{rafflePotId}
        </h1>
      </div>

      <div className="relative flex items-center justify-center px-10 rounded-full md:px-30 group w-fit">
        <CircularProgressbarWithChildren
          className="group relative w-[226px] rounded-full p-0 md:w-[226px] lg:w-[226px]"
          value={Number(prizePool?.currentPotSize) || 0}
          maxValue={Number(prizePool?.potLimit) || 100}
          strokeWidth={10}
          backgroundPadding={8}
          styles={buildStyles({
            rotation: 0.5,
            strokeLinecap: 'round',
            pathTransitionDuration: 1.5,
            pathColor,
            trailColor,
            textColor: '#f88',
            backgroundColor: '#00000',
          })}
        >
          {/* Pot Size Card Hover */}
          {prizePool && !isDrawing && (
            <div className="absolute left-[-30px] top-[30px] transform-gpu opacity-0 transition-opacity duration-100 group-hover:opacity-100 md:left-[-100px]">
              <div className="flex flex-col justify-start gap-2 p-2 bg-white rounded-lg shadow-md items-left">
                <div
                  className={`flex flex-row text-xs ${textColorClass} md:text-sm`}
                >
                  Pot Size
                </div>

                <div className="flex flex-row items-center justify-center w-full text-xs font-bold text-gray-800 md:text-sm">
                  <img
                    src="https://ik.imagekit.io/rpslabs/public/eth.svg"
                    className="w-4 h-4 mr-1"
                    alt="eth-logo"
                  />
                  {prizePool?.currentPotSize?.slice(0, 5)}/
                  {prizePool?.potLimit?.slice(0, 5)} ETH
                </div>
              </div>
            </div>
          )}
          {isDrawing ? (
            <>
              <CgSpinnerAlt
                className={`absolute h-screen w-[316px] h-[316px] animate-spin ${iconColorClass} transition ${bgColorClass} rounded-full`}
              />
              <div
                className={`z-10 flex h-[232px] w-[232px] flex-col items-center justify-center rounded-full shadow-xl transition-all delay-100 ${bgColorClass}`}
              >
                <span
                  className={`rps-h1 animate-pulse border-b pb-2 text-center text-[16px] font-bold md:text-[18px] ${borderColorClass} ${textColorClass}`}
                >
                  Drawing Winner...
                </span>
                {prizePool ? (
                  <h1
                    className={`text-center text-[24px] font-bold md:text-[30px] ${textColorClass}`}
                  >
                    {prizePool?.potLimit?.slice(0, 5)} ETH
                  </h1>
                ) : null}
              </div>
            </>
          ) : prizePool && !isDrawing ? (
            <div className="flex flex-col items-center justify-center gap-2 px-5 text-center">
              <span
                className={`rps-h1 text-center text-[12px] font-medium lg:text-sm ${textColorClass}`}
              >
                Current Pot Size
              </span>
              <h1
                className={`group relative text-[24px] font-semibold lg:text-[30px] ${textColorClass}`}
              >
                {prizePool.currentPotSize.slice(0, 5)} ETH
              </h1>
            </div>
          ) : (
            !prizePool &&
            !isDrawing && (
              <div className="flex flex-col gap-2">
                <span
                  className={`rps-h1 text-center text-[12px] font-medium lg:text-sm ${textColorClass}`}
                >
                  Current Pot Size
                </span>
                <h1
                  className={`group relative text-[24px] font-semibold text-transparent lg:text-[30px] ${textColorClass}`}
                >
                  0.00 ETH
                </h1>
              </div>
            )
          )}
        </CircularProgressbarWithChildren>
      </div>

      <div
        className={`z-5 flex w-full flex-row justify-between text-[16px] font-semibold ${textColorClass}`}
      >
        <div className="flex flex-row items-center gap-2 rounded backdrop-blur-sm">
          <div
            className={`h-4 w-4 rounded ${
              theme === 'dark' ? 'bg-[#9379FB]' : 'bg-[#CABDFF]'
            }`}
          />
          <h6>Current Pot Size</h6>
        </div>
        <div className="flex flex-row items-center gap-2 rounded backdrop-blur-sm">
          <div
            className={`h-4 w-4 rounded ${
              theme === 'dark' ? 'bg-[#FFF]' : 'bg-[#1D1D1D]'
            }`}
          />
          <h6>Total Pot Size</h6>
        </div>
      </div>
    </div>
  );
};
