import React, { useState } from 'react';
import { useContractWrite } from 'wagmi';
import * as Dialog from '@radix-ui/react-dialog';
import { CgSpinner } from 'react-icons/cg';
import { RiTwitterXLine } from 'react-icons/ri';
import { HiX } from 'react-icons/hi';
import { useChainConfig } from '../../../RpsProvider';
import Modal from '../Modal';

type ResultsModalProps = {
  isClaimed: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isWinner: boolean;
  onClaimComplete: (data: any) => void;
  onClaimError: (error: Error) => void;
  onClose: () => void;
  prizeAmount: string;
  theme?: 'light' | 'dark';
  trigger: React.ReactNode;
  winningTicketIds: number[];
};

export const ResultsModal: React.FC<ResultsModalProps> = ({
  trigger,
  onClose,
  winningTicketIds,
  prizeAmount,
  isWinner,
  isLoading,
  isSuccess,
  isClaimed,
  onClaimComplete,
  onClaimError,
  theme = 'light',
}) => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showTweetToClaimLink, setShowTweetToClaimLink] = useState(true);
  const [isClaimLoading, setIsClaimLoading] = useState(false);

  const themeClassNames = {
    container:
      theme === 'dark'
        ? 'border-0 bg-neutral-900 ring-1 ring-neutral-600'
        : 'ring-1 ring-neutral-300 bg-white',
    header: theme === 'dark' ? 'bg-neutral-900' : 'bg-white',
    secondaryButton:
      theme === 'dark'
        ? 'ring-1 ring-white hover:ring-purple-500 text-neutral-300'
        : 'shadow-sm text-[#101828] hover:ring-1 hover:ring-purple-500 ',
    logo: theme === 'dark' ? 'text-white' : 'text-black',
    tableHeader: theme === 'dark' ? 'bg-neutral-900' : 'bg-white',
    text: theme === 'dark' ? 'text-neutral-300' : 'text-[#101828]',
    footerBg: theme === 'dark' ? 'bg-neutral-800' : 'bg-[#F4F4F4]',
    footerText: theme === 'dark' ? 'text-white' : 'text-black',
    footerTextRPS: theme === 'dark' ? 'text-[#9270FF]' : 'text-[#8869EB]',
  };
  const handleTweetToClaimClick = () => {
    setButtonLoading(true);
    setTimeout(() => {
      setShowTweetToClaimLink(false);
      setShowButton(true);
      setButtonLoading(false);
    }, 5000);
  };

  // Claim prize
  const chainConfig = useChainConfig();
  const { write: claimPrize } = useContractWrite({
    address: chainConfig.raffleContract as `0x${string}`,
    abi: chainConfig.abi,
    functionName: 'claim',
  });
  const handleClaim = async () => {
    setIsClaimLoading(true);
    try {
      const result = await claimPrize();
      onClaimComplete(result);
    } catch (error) {
      if (error instanceof Error) {
        onClaimError(error);
      } else {
        onClaimError(new Error('An unknown error occurred'));
      }
    } finally {
      setIsClaimLoading(false);
    }
  };

  const renderWinningContent = () => (
    <div
      className={`pb-4 rounded-xl overflow-hidden ${themeClassNames.container}`}
    >
      <div className="w-full flex items-center rounded-t-xl bg-[url('https://ik.imagekit.io/rpslabs/public/Disco.svg')]">
        {isClaimed ? (
          <img
            src="https://ik.imagekit.io/rpslabs/public/modal/chest-open.png"
            alt="chest-box"
            className="max-w-[400px]"
          />
        ) : (
          <img
            src="https://ik.imagekit.io/rpslabs/public/modal/chest-closed.png"
            alt="chest-box"
            className="max-w-[400px]"
          />
        )}
      </div>
      <div className="flex flex-col items-center justify-center mx-4 mt-6 rounded-b-4xl">
        <h1
          className={`reservoir-h1 mb-1 text-[24px] font-semibold ${themeClassNames.text}`}
        >
          Congratulations!
        </h1>
        {winningTicketIds.length > 0 && (
          <p className="text-sm font-medium text-neutral-500 dark:text-black">
            You won {prizeAmount} ETH
          </p>
        )}

        {showTweetToClaimLink && !isClaimed && (
          <button
            type="button"
            className="w-full rounded-md outline-none bg-[#8869EB] items-center justify-center flex border-none"
          >
            <a
              href="https://twitter.com/intent/tweet?text=Just%20won%201.0%20ETH%20by%20trading%20NFTs%20on%20%40hotpot_gg!%0A%0AZero%20creator%20royalties%2C%20a%20fair%20lottery%20system%2C%20and%20a%20chance%20to%20win%20big.%0A%0AJust%20by%20trading%20as%20I%20normally%20would.%0A%0ANo%20extra%20fees.%20Everything%20on-chain.%20hotpot.gg"
              className="flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium text-white no-underline outline-none twitter-share-button"
              data-show-count="false"
              data-size="large"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleTweetToClaimClick}
            >
              Tweet to Claim
              <RiTwitterXLine className="text-white " />
              {buttonLoading && (
                <CgSpinner className="w-4 h-4 mr-2 text-white animate-spin" />
              )}
            </a>
          </button>
        )}
        {isClaimed && (
          <button
            type="button"
            disabled
            className="w-full rounded-md outline-none bg-[#E1D8FD] items-center justify-center flex border-none"
          >
            <div className="flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium text-black no-underline outline-none twitter-share-button">
              Claimed
            </div>
          </button>
        )}
        {isClaimed && (
          <button
            type="button"
            className={`flex items-center justify-center w-full mt-4 ${themeClassNames.header} border-none ${themeClassNames.secondaryButton}  rounded-md outline-none`}
          >
            <a
              href="/"
              className={`flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium ${themeClassNames.text} no-underline outline-none twitter-share-button`}
              data-show-count="false"
              data-size="large"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my Tickets
            </a>
          </button>
        )}

        {showButton && !isClaimed && (
          <button
            type="button"
            onClick={handleClaim}
            className={`mb-4 mt-2 flex items-center justify-center rounded-full border border-[#FFF06A] px-16 py-3 text-sm font-medium text-[#CD7100] focus:outline-none ${
              isLoading || isSuccess || isClaimed
                ? 'bg-gradient-to-b from-gray-400 to-gray-300 cursor-not-allowed' // Disabled state
                : 'bg-gradient-to-b from-[#FFE179] to-[#FFB52E] hover:from-[#FFC269] hover:to-[#FFB82E]' // Normal state
            }`}
            disabled={isLoading || isSuccess || isClaimed || isClaimLoading}
          >
            {isLoading ? (
              <CgSpinner className="w-5 h-5 mr-2 animate-spin" />
            ) : (
              'CLAIM'
            )}
          </button>
        )}

        {/* Footer */}
        <div className="w-full m-2 mt-4 overflow-hidden">
          <div className="flex flex-row items-center gap-2 px-4 py-1  rounded-md justify-center  bg-[#F4F4F4]">
            <img
              src="https://ik.imagekit.io/rpslabs/public/rps-logo.svg"
              alt="hotpot-logo"
              className="w-5 h-5"
            />
            <h2 className="text-xs font-medium">
              Powered by{' '}
              <a href="https://rpslabs.io" className="no-underline #8869EB">
                RPS Labs
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLosingContent = () => (
    <div
      className={`flex flex-col items-center justify-center pb-4 rounded-xl ${themeClassNames.container}`}
    >
      <div className="w-full bg-[#F1F3FF] items-center justify-center flex overflow-hidden rounded-t-xl">
        <img
          src="https://ik.imagekit.io/rpslabs/public/modal/crying.png?updatedAt=1701551904860"
          alt="crying"
          className="max-h-[189px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center mx-4 mt-6">
        <h1
          className={`mx-2 mb-2 text-center text-[24px] font-semibold ${themeClassNames.text}`}
        >
          Sorry, your ticket(s) did not win
        </h1>
        <p className="text-sm font-normal text-neutral-400">
          Don&apos;t sweat! Try your luck on the next draw!
        </p>

        {/* Footer */}
        <div className="w-full m-2 mt-4 overflow-hidden">
          <div className="flex flex-row items-center gap-2 px-4 py-1  rounded-md justify-center  bg-[#F4F4F4]">
            <img
              src="https://ik.imagekit.io/rpslabs/public/rps-logo.svg"
              alt="hotpot-logo"
              className="w-5 h-5"
            />
            <h2 className="text-xs font-medium">
              Powered by{' '}
              <a href="https://rpslabs.io" className="no-underline #8869EB">
                RPS Labs
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
  const content = isWinner ? renderWinningContent() : renderLosingContent();

  return (
    <Modal trigger={trigger}>
      <Dialog.Content className="rps-h1 rounded-xl overflow-hidden fixed top-[50%] left-[50%] z-[100000000000000] mt-10 w-[90vw] max-w-[400px] translate-x-[-50%] translate-y-[-50%] rounded shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] backdrop-blur-md focus:outline-none data-[state=open]:animate-contentShow">
        <Dialog.Close asChild>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute top-0 right-0 p-2 m-4 z-[10] bg-transparent border-none outline-none focus:outline-none hover:scale-110 "
          >
            <HiX className="w-4 h-4" />
          </button>
        </Dialog.Close>
        {content}
      </Dialog.Content>
    </Modal>
  );
};
