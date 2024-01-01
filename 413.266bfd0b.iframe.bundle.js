"use strict";(self.webpackChunk_rps_labs_lotto_sdk=self.webpackChunk_rps_labs_lotto_sdk||[]).push([[413],{"./src/RpsProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hf:()=>RPSProvider,BX:()=>useChainConfig,Fg:()=>useTheme});var react=__webpack_require__("./node_modules/react/index.js");const rpsChains={mainnet:{id:1,name:"Ethereum",baseApiUrl:"https://api.rpslabs.io",routerContract:"",raffleContract:""},linea:{id:59140,name:"Linea",baseApiUrl:"https://sdkapi-goerli.io",routerContract:"0x352DFD20F0af84683dAD7980301A566e7A3De259",raffleContract:"0xE77CA2f7f238A8412d8a3F18996FF7431215503A",abi:[{type:"constructor",stateMutability:"nonpayable",inputs:[{type:"tuple",name:"params",internalType:"struct IRPSRaffleCustomVrf.InitializeParams",components:[{type:"uint256",name:"potLimit",internalType:"uint256"},{type:"uint256",name:"raffleTicketCost",internalType:"uint256"},{type:"uint128",name:"claimWindow",internalType:"uint128"},{type:"uint16",name:"protocolFeeInBps",internalType:"uint16"},{type:"uint16",name:"tradeFeeInBps",internalType:"uint16"},{type:"address",name:"router",internalType:"address"},{type:"address",name:"owner",internalType:"address"},{type:"address",name:"operator",internalType:"address"}]}]},{type:"event",name:"Claim",inputs:[{type:"address",name:"user",internalType:"address",indexed:!0},{type:"uint256",name:"amount",internalType:"uint256",indexed:!1}],anonymous:!1},{type:"event",name:"GenerateRaffleTickets",inputs:[{type:"address",name:"user",internalType:"address",indexed:!0},{type:"uint32",name:"ticketIdStart",internalType:"uint32",indexed:!1},{type:"uint32",name:"ticketIdEnd",internalType:"uint32",indexed:!1},{type:"uint256",name:"pendingAmount",internalType:"uint256",indexed:!1}],anonymous:!1},{type:"event",name:"OwnershipTransferred",inputs:[{type:"address",name:"previousOwner",internalType:"address",indexed:!0},{type:"address",name:"newOwner",internalType:"address",indexed:!0}],anonymous:!1},{type:"event",name:"Paused",inputs:[{type:"address",name:"account",internalType:"address",indexed:!1}],anonymous:!1},{type:"event",name:"PotLimitUpdated",inputs:[{type:"uint256",name:"newPotLimit",internalType:"uint256",indexed:!1}],anonymous:!1},{type:"event",name:"PrizeDistributionUpdated",inputs:[{type:"uint128[]",name:"_newPrizeAmounts",internalType:"uint128[]",indexed:!1},{type:"uint16",name:"newNumberOfWinners",internalType:"uint16",indexed:!1}],anonymous:!1},{type:"event",name:"ProtocolFeeUpdated",inputs:[{type:"uint16",name:"newFee",internalType:"uint16",indexed:!1}],anonymous:!1},{type:"event",name:"RaffleTicketCostUpdated",inputs:[{type:"uint256",name:"newTicketCost",internalType:"uint256",indexed:!1}],anonymous:!1},{type:"event",name:"RandomWordRequested",inputs:[{type:"uint256",name:"requestId",internalType:"uint256",indexed:!1},{type:"uint32",name:"fromTicketId",internalType:"uint32",indexed:!1},{type:"uint32",name:"toTicketId",internalType:"uint32",indexed:!1}],anonymous:!1},{type:"event",name:"RandomnessFulfilled",inputs:[{type:"uint16",name:"potId",internalType:"uint16",indexed:!0},{type:"uint256",name:"randomWord",internalType:"uint256",indexed:!1}],anonymous:!1},{type:"event",name:"TradeFeeUpdated",inputs:[{type:"uint16",name:"newTradeFee",internalType:"uint16",indexed:!1}],anonymous:!1},{type:"event",name:"Unpaused",inputs:[{type:"address",name:"account",internalType:"address",indexed:!1}],anonymous:!1},{type:"event",name:"WinnersAssigned",inputs:[{type:"address[]",name:"_winners",internalType:"address[]",indexed:!1}],anonymous:!1},{type:"function",stateMutability:"view",outputs:[{type:"address",name:"",internalType:"address"}],name:"OPERATOR",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"address",name:"",internalType:"address"}],name:"ROUTER",inputs:[]},{type:"function",stateMutability:"payable",outputs:[],name:"batchExecuteTrade",inputs:[{type:"tuple[]",name:"trades",internalType:"struct IRPSRaffleCustomVrf.BatchTradeParams[]",components:[{type:"uint256",name:"tradeAmount",internalType:"uint256"},{type:"address",name:"user",internalType:"address"}]}]},{type:"function",stateMutability:"view",outputs:[{type:"bool",name:"",internalType:"bool"}],name:"canClaim",inputs:[{type:"address",name:"user",internalType:"address"}]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"claim",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"uint128",name:"amount",internalType:"uint128"},{type:"uint128",name:"deadline",internalType:"uint128"}],name:"claimablePrizes",inputs:[{type:"address",name:"",internalType:"address"}]},{type:"function",stateMutability:"view",outputs:[{type:"uint16",name:"",internalType:"uint16"}],name:"currentPotId",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"uint256",name:"",internalType:"uint256"}],name:"currentPotSize",inputs:[]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"executeRaffle",inputs:[{type:"address[]",name:"_winners",internalType:"address[]"}]},{type:"function",stateMutability:"payable",outputs:[],name:"executeTrade",inputs:[{type:"uint256",name:"_amountInWei",internalType:"uint256"},{type:"address",name:"_user",internalType:"address"}]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"fulfillRandomWords",inputs:[{type:"uint256",name:"randomWord",internalType:"uint256"}]},{type:"function",stateMutability:"view",outputs:[{type:"uint32[]",name:"",internalType:"uint32[]"}],name:"getWinningTicketIds",inputs:[{type:"uint16",name:"_potId",internalType:"uint16"}]},{type:"function",stateMutability:"view",outputs:[{type:"uint32",name:"",internalType:"uint32"}],name:"lastRaffleTicketId",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"uint256",name:"",internalType:"uint256"}],name:"lastRequestId",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"uint32",name:"",internalType:"uint32"}],name:"nextPotTicketIdStart",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"uint16",name:"",internalType:"uint16"}],name:"numberOfWinners",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"address",name:"",internalType:"address"}],name:"owner",inputs:[]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"pause",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"bool",name:"",internalType:"bool"}],name:"paused",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"uint256",name:"",internalType:"uint256"}],name:"pendingAmounts",inputs:[{type:"address",name:"",internalType:"address"}]},{type:"function",stateMutability:"view",outputs:[{type:"uint256",name:"",internalType:"uint256"}],name:"potLimit",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"uint32",name:"",internalType:"uint32"}],name:"potTicketIdEnd",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"uint32",name:"",internalType:"uint32"}],name:"potTicketIdStart",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"uint128",name:"",internalType:"uint128"}],name:"prizeAmounts",inputs:[{type:"uint16",name:"",internalType:"uint16"}]},{type:"function",stateMutability:"view",outputs:[{type:"uint16",name:"",internalType:"uint16"}],name:"protocolFeeInBps",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"uint256",name:"",internalType:"uint256"}],name:"raffleTicketCost",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"bool",name:"fullfilled",internalType:"bool"},{type:"bool",name:"exists",internalType:"bool"},{type:"uint256",name:"randomWord",internalType:"uint256"}],name:"randomnessRequests",inputs:[{type:"uint256",name:"",internalType:"uint256"}]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"renounceOwnership",inputs:[]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"setPotLimit",inputs:[{type:"uint256",name:"_newPotLimit",internalType:"uint256"}]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"setProtocolFee",inputs:[{type:"uint16",name:"_newFee",internalType:"uint16"}]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"setRaffleTicketCost",inputs:[{type:"uint256",name:"_newRaffleTicketCost",internalType:"uint256"}]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"setTradeFee",inputs:[{type:"uint16",name:"_newTradeFee",internalType:"uint16"}]},{type:"function",stateMutability:"view",outputs:[{type:"uint16",name:"",internalType:"uint16"}],name:"tradeFeeInBps",inputs:[]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"transferOwnership",inputs:[{type:"address",name:"newOwner",internalType:"address"}]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"unpause",inputs:[]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"updatePrizeDistribution",inputs:[{type:"uint128[]",name:"_newPrizeAmounts",internalType:"uint128[]"},{type:"uint16",name:"_newNumberOfWinners",internalType:"uint16"}]},{type:"function",stateMutability:"view",outputs:[{type:"uint32",name:"",internalType:"uint32"}],name:"winningTicketIds",inputs:[{type:"uint16",name:"",internalType:"uint16"},{type:"uint256",name:"",internalType:"uint256"}]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"withdrawFee",inputs:[{type:"address",name:"to",internalType:"address"}]}]},sepolia:{id:58008,name:"Sepolia",baseApiUrl:"https://sdkapi.rpslabs.io",raffleContract:"0xf2D607e56CCba8054aD258dC75F80D886Be6A5d4",routerContract:"0x2b416A200FFbCA827C0Bc26985a9ecb612E4B6eD",abi:[{inputs:[{components:[{internalType:"uint256",name:"potLimit",type:"uint256"},{internalType:"uint256",name:"raffleTicketCost",type:"uint256"},{internalType:"uint128",name:"claimWindow",type:"uint128"},{internalType:"uint16",name:"numberOfWinners",type:"uint16"},{internalType:"uint16",name:"protocolFeeInBps",type:"uint16"},{internalType:"uint16",name:"tradeFeeInBps",type:"uint16"},{internalType:"uint32",name:"callbackGasLimit",type:"uint32"},{internalType:"uint8",name:"vrfConfirmations",type:"uint8"},{internalType:"address",name:"router",type:"address"},{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],internalType:"struct IRPSRaffle.InitializeParams",name:"params",type:"tuple"},{internalType:"address",name:"_link",type:"address"},{internalType:"address",name:"_vrfV2Wrapper",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"EnforcedPause",type:"error"},{inputs:[],name:"ExpectedPause",type:"error"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint32",name:"_callbackGasLimit",type:"uint32"}],name:"CallbackGasLimitUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Claim",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint32",name:"ticketIdStart",type:"uint32"},{indexed:!1,internalType:"uint32",name:"ticketIdEnd",type:"uint32"},{indexed:!1,internalType:"uint256",name:"pendingAmount",type:"uint256"}],name:"GenerateRaffleTickets",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint16",name:"_nOfWinners",type:"uint16"}],name:"NumberOfWinnersUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"newPotLimit",type:"uint256"}],name:"PotLimitUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint128[]",name:"_newPrizeAmounts",type:"uint128[]"}],name:"PrizeAmountsUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint16",name:"newFee",type:"uint16"}],name:"ProtocolFeeUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"newTicketCost",type:"uint256"}],name:"RaffleTicketCostUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"requestId",type:"uint256"},{indexed:!1,internalType:"uint32",name:"fromTicketId",type:"uint32"},{indexed:!1,internalType:"uint32",name:"toTicketId",type:"uint32"}],name:"RandomWordRequested",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint16",name:"potId",type:"uint16"},{indexed:!1,internalType:"uint256",name:"randomWord",type:"uint256"}],name:"RandomnessFulfilled",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint16",name:"newTradeFee",type:"uint16"}],name:"TradeFeeUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address[]",name:"_winners",type:"address[]"}],name:"WinnersAssigned",type:"event"},{inputs:[],name:"OPERATOR",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"ROUTER",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{components:[{internalType:"uint256",name:"tradeAmount",type:"uint256"},{internalType:"address",name:"user",type:"address"}],internalType:"struct IRPSRaffle.BatchTradeParams[]",name:"trades",type:"tuple[]"}],name:"batchExecuteTrade",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"canClaim",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"chainlinkRequests",outputs:[{internalType:"bool",name:"fullfilled",type:"bool"},{internalType:"bool",name:"exists",type:"bool"},{internalType:"uint256",name:"randomWord",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"claimablePrizes",outputs:[{internalType:"uint128",name:"amount",type:"uint128"},{internalType:"uint128",name:"deadline",type:"uint128"}],stateMutability:"view",type:"function"},{inputs:[],name:"currentPotId",outputs:[{internalType:"uint16",name:"",type:"uint16"}],stateMutability:"view",type:"function"},{inputs:[],name:"currentPotSize",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"_winners",type:"address[]"}],name:"executeRaffle",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amountInWei",type:"uint256"},{internalType:"address",name:"_user",type:"address"}],name:"executeTrade",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint16",name:"_potId",type:"uint16"}],name:"getWinningTicketIds",outputs:[{internalType:"uint32[]",name:"",type:"uint32[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"lastRaffleTicketId",outputs:[{internalType:"uint32",name:"",type:"uint32"}],stateMutability:"view",type:"function"},{inputs:[],name:"lastRequestId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"nextPotTicketIdStart",outputs:[{internalType:"uint32",name:"",type:"uint32"}],stateMutability:"view",type:"function"},{inputs:[],name:"numberOfWinners",outputs:[{internalType:"uint16",name:"",type:"uint16"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"pendingAmounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"potLimit",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"potTicketIdEnd",outputs:[{internalType:"uint32",name:"",type:"uint32"}],stateMutability:"view",type:"function"},{inputs:[],name:"potTicketIdStart",outputs:[{internalType:"uint32",name:"",type:"uint32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint16",name:"",type:"uint16"}],name:"prizeAmounts",outputs:[{internalType:"uint128",name:"",type:"uint128"}],stateMutability:"view",type:"function"},{inputs:[],name:"protocolFeeInBps",outputs:[{internalType:"uint16",name:"",type:"uint16"}],stateMutability:"view",type:"function"},{inputs:[],name:"raffleTicketCost",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_requestId",type:"uint256"},{internalType:"uint256[]",name:"_randomWords",type:"uint256[]"}],name:"rawFulfillRandomWords",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"requestIds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint32",name:"_callbackGasLimit",type:"uint32"}],name:"setChainlinkGasLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newPotLimit",type:"uint256"}],name:"setPotLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint16",name:"_newFee",type:"uint16"}],name:"setProtocolFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newRaffleTicketCost",type:"uint256"}],name:"setRaffleTicketCost",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint16",name:"_newTradeFee",type:"uint16"}],name:"setTradeFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"tradeFeeInBps",outputs:[{internalType:"uint16",name:"",type:"uint16"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint16",name:"_nOfWinners",type:"uint16"}],name:"updateNumberOfWinners",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint128[]",name:"_newPrizeAmounts",type:"uint128[]"}],name:"updatePrizeAmounts",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint16",name:"",type:"uint16"},{internalType:"uint256",name:"",type:"uint256"}],name:"winningTicketIds",outputs:[{internalType:"uint32",name:"",type:"uint32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"withdrawFee",outputs:[],stateMutability:"nonpayable",type:"function"}]}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultContextValue={apiKey:"",activeChain:"",currentTheme:"light",toggleTheme:()=>{},getChainConfig:()=>rpsChains.sepolia},RPSContext=(0,react.createContext)(defaultContextValue),RPSProvider=({children,apiKey,theme="light",activeChain})=>{const[currentTheme,setTheme]=(0,react.useState)(theme);(0,react.useEffect)((()=>{setTheme(theme)}),[theme]);const toggleTheme=()=>{setTheme("light"===currentTheme?"dark":"light")},getChainConfig=()=>Object.values(rpsChains).find((chain=>chain.id.toString()===activeChain))||rpsChains.sepolia,contextValue=(0,react.useMemo)((()=>({apiKey,activeChain,currentTheme,toggleTheme,getChainConfig})),[apiKey,activeChain,currentTheme,toggleTheme]);return(0,jsx_runtime.jsx)(RPSContext.Provider,{value:contextValue,children})};RPSProvider.displayName="RPSProvider";const useTheme=()=>(0,react.useContext)(RPSContext).currentTheme,useChainConfig=()=>(0,react.useContext)(RPSContext).getChainConfig();try{RPSProvider.displayName="RPSProvider",RPSProvider.__docgenInfo={description:"",displayName:"RPSProvider",props:{activeChain:{defaultValue:null,description:"",name:"activeChain",required:!0,type:{name:"string"}},apiKey:{defaultValue:null,description:"",name:"apiKey",required:!0,type:{name:"string"}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/RpsProvider.tsx#RPSProvider"]={docgenInfo:RPSProvider.__docgenInfo,name:"RPSProvider",path:"src/RpsProvider.tsx#RPSProvider"})}catch(__react_docgen_typescript_loader_error){}}}]);