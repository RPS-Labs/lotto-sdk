"use strict";(self.webpackChunk_rps_labs_lotto_sdk=self.webpackChunk_rps_labs_lotto_sdk||[]).push([[770],{"./src/stories/PrizePoolWidget.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PrizePoolWidget_stories});__webpack_require__("./dist/index.css"),__webpack_require__("./src/styles/global.css"),__webpack_require__("./node_modules/react/index.js");var index_esm=__webpack_require__("./node_modules/react-circular-progressbar/dist/index.esm.js"),cg_index_esm=__webpack_require__("./node_modules/react-icons/cg/index.esm.js"),RpsProvider=__webpack_require__("./src/RpsProvider.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PrizePoolWidget=()=>{const{isDrawing,rafflePotId,prizePool}={isDrawing:!1,rafflePotId:1,prizePool:{currentPotSize:"10",potLimit:"100"}},theme=(0,RpsProvider.Fg)(),textColorClass="dark"===theme?"text-white":"text-[#1A1D1F]",bgColorClass="dark"===theme?"bg-[#1D1D1D]":"bg-neutral-100",iconColorClass="dark"===theme?"text-violet-800":"text-violet-700",borderColorClass="dark"===theme?"border-neutral-700":"border-neutral-300",trailColor="dark"===theme?"#FFF":"#1D1D1D",pathColor="dark"===theme?"#9379FB":"#CABDFF";return(0,jsx_runtime.jsxs)("div",{className:`overflow-hidden rps-h1 flex w-full flex-col items-center justify-between gap-2 rounded-[20px] border p-4 md:max-w-[486px] border border-black ${bgColorClass} `,children:[(0,jsx_runtime.jsx)("div",{className:"flex justify-start w-full items-left",children:(0,jsx_runtime.jsxs)("h1",{className:`z-5 rounded text-base font-semibold backdrop-blur-sm ${textColorClass} rps-h1`,children:["Prize Pool #",rafflePotId]})}),(0,jsx_runtime.jsx)("div",{className:"relative flex items-center justify-center px-10 rounded-full md:px-30 group w-fit",children:(0,jsx_runtime.jsxs)(index_esm.CircularProgressbarWithChildren,{className:"group relative w-[226px] rounded-full p-0 md:w-[226px] lg:w-[226px]",value:Number(prizePool?.currentPotSize)||0,maxValue:Number(prizePool?.potLimit)||100,strokeWidth:10,backgroundPadding:8,styles:(0,index_esm.buildStyles)({rotation:.5,strokeLinecap:"round",pathTransitionDuration:1.5,pathColor,trailColor,textColor:"#f88",backgroundColor:"#00000"}),children:[prizePool&&!isDrawing&&(0,jsx_runtime.jsx)("div",{className:"absolute left-[-30px] top-[30px] transform-gpu opacity-0 transition-opacity duration-100 group-hover:opacity-100 md:left-[-100px]",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col justify-start gap-2 p-2 bg-white rounded-lg shadow-md items-left",children:[(0,jsx_runtime.jsx)("div",{className:`flex flex-row text-xs ${textColorClass} md:text-sm`,children:"Pot Size"}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-row items-center justify-center w-full text-xs font-bold text-gray-800 md:text-sm",children:[(0,jsx_runtime.jsx)("img",{src:"https://ik.imagekit.io/rpslabs/public/eth.svg",className:"w-4 h-4 mr-1",alt:"eth-logo"}),prizePool?.currentPotSize?.slice(0,5),"/",prizePool?.potLimit?.slice(0,5)," ETH"]})]})}),isDrawing?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(cg_index_esm.CgSpinnerAlt,{className:`absolute h-screen w-[316px] h-[316px] animate-spin ${iconColorClass} transition ${bgColorClass} rounded-full`}),(0,jsx_runtime.jsxs)("div",{className:`z-10 flex h-[232px] w-[232px] flex-col items-center justify-center rounded-full shadow-xl transition-all delay-100 ${bgColorClass}`,children:[(0,jsx_runtime.jsx)("span",{className:`rps-h1 animate-pulse border-b pb-2 text-center text-[16px] font-bold md:text-[18px] ${borderColorClass} ${textColorClass}`,children:"Drawing Winner..."}),prizePool?(0,jsx_runtime.jsxs)("h1",{className:`text-center text-[24px] font-bold md:text-[30px] ${textColorClass}`,children:[prizePool?.potLimit?.slice(0,5)," ETH"]}):null]})]}):prizePool&&!isDrawing?(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-center justify-center gap-2 px-5 text-center",children:[(0,jsx_runtime.jsx)("span",{className:`rps-h1 text-center text-[12px] font-medium lg:text-sm ${textColorClass}`,children:"Current Pot Size"}),(0,jsx_runtime.jsxs)("h1",{className:`group relative text-[24px] font-semibold lg:text-[30px] ${textColorClass}`,children:[prizePool.currentPotSize.slice(0,5)," ETH"]})]}):!prizePool&&!isDrawing&&(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,jsx_runtime.jsx)("span",{className:`rps-h1 text-center text-[12px] font-medium lg:text-sm ${textColorClass}`,children:"Current Pot Size"}),(0,jsx_runtime.jsx)("h1",{className:`group relative text-[24px] font-semibold text-transparent lg:text-[30px] ${textColorClass}`,children:"0.00 ETH"})]})]})}),(0,jsx_runtime.jsxs)("div",{className:`z-5 flex w-full flex-row justify-between text-[16px] font-semibold ${textColorClass}`,children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-row items-center gap-2 rounded backdrop-blur-sm",children:[(0,jsx_runtime.jsx)("div",{className:"h-4 w-4 rounded "+("dark"===theme?"bg-[#9379FB]":"bg-[#CABDFF]")}),(0,jsx_runtime.jsx)("h6",{children:"Current Pot Size"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-row items-center gap-2 rounded backdrop-blur-sm",children:[(0,jsx_runtime.jsx)("div",{className:"h-4 w-4 rounded "+("dark"===theme?"bg-[#FFF]":"bg-[#1D1D1D]")}),(0,jsx_runtime.jsx)("h6",{children:"Total Pot Size"})]})]})]})};PrizePoolWidget.displayName="PrizePoolWidget";try{PrizePoolWidget.displayName="PrizePoolWidget",PrizePoolWidget.__docgenInfo={description:"",displayName:"PrizePoolWidget",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PrizePoolWidget.tsx#PrizePoolWidget"]={docgenInfo:PrizePoolWidget.__docgenInfo,name:"PrizePoolWidget",path:"src/components/PrizePoolWidget.tsx#PrizePoolWidget"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/UserTickets.tsx"),__webpack_require__("./src/components/Tickets.tsx"),__webpack_require__("./src/components/Leaderboard.tsx"),__webpack_require__("./src/components/Activity.tsx"),__webpack_require__("./src/components/PastWinners.tsx"),__webpack_require__("./src/components/CurrentTickets.tsx"),__webpack_require__("./src/components/PastTickets.tsx"),__webpack_require__("./src/components/CombinedWidgets.tsx"),__webpack_require__("./src/components/modal/results/ResultsModal.tsx"),__webpack_require__("./node_modules/swr/core/dist/index.mjs");const RpsProvider_RPSProvider=({children,apiKey,activeChain,theme})=>createElement(null.Provider,{value:{apiKey,activeChain,theme}},children);try{RpsProvider_RPSProvider.displayName="RPSProvider",RpsProvider_RPSProvider.__docgenInfo={description:"",displayName:"RPSProvider",props:{activeChain:{defaultValue:null,description:"",name:"activeChain",required:!0,type:{name:"string"}},apiKey:{defaultValue:null,description:"",name:"apiKey",required:!0,type:{name:"string | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/provider/RpsProvider.tsx#RPSProvider"]={docgenInfo:RpsProvider_RPSProvider.__docgenInfo,name:"RPSProvider",path:"src/provider/RpsProvider.tsx#RPSProvider"})}catch(__react_docgen_typescript_loader_error){}try{RPSProvider.displayName="RPSProvider",RPSProvider.__docgenInfo={description:"",displayName:"RPSProvider",props:{activeChain:{defaultValue:null,description:"",name:"activeChain",required:!0,type:{name:"string"}},apiKey:{defaultValue:null,description:"",name:"apiKey",required:!0,type:{name:"string | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/provider/index.tsx#RPSProvider"]={docgenInfo:RPSProvider.__docgenInfo,name:"RPSProvider",path:"src/provider/index.tsx#RPSProvider"})}catch(__react_docgen_typescript_loader_error){}const PrizePoolWidget_stories={title:"Components/PrizePoolWidget",component:PrizePoolWidget},Template=args=>(0,jsx_runtime.jsx)(RpsProvider.Hf,{apiKey:"your-api-key",theme:args.theme,activeChain:"sepolia",children:(0,jsx_runtime.jsx)(PrizePoolWidget,{...args})});Template.displayName="Template";const Default=Template.bind({});Default.args={theme:"light"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => <RPSProvider apiKey="your-api-key" theme={args.theme} activeChain="sepolia">\n    <PrizePoolWidget {...args} />\n  </RPSProvider>',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/CurrentTickets.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>CurrentTickets});__webpack_require__("./node_modules/react/index.js");var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),react_icons_ri__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-icons/ri/index.esm.js"),_RpsProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/RpsProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CurrentTickets=()=>{const currentTickets={NumOfTickets:5,PotFillPercentage:80,tickets:[{ticket_id:1},{ticket_id:2},{ticket_id:3},{ticket_id:4},{ticket_id:5}]},theme=(0,_RpsProvider__WEBPACK_IMPORTED_MODULE_1__.Fg)(),potFill=currentTickets?.PotFillPercentage||0,themeClassNames_container="dark"===theme?"border-0 bg-neutral-900 ring-1 ring-neutral-600":"ring-1 ring-neutral-300 bg-white",themeClassNames_text="dark"===theme?"text-gray-300":"text-black";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:`rps-h1 rounded-md py-2 ${themeClassNames_container}`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"w-full mt-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-row items-center justify-between px-4 py-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:`flex flex-row font-semibold items-center justify-center text-[8px] gap-2 ${themeClassNames_text}`,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiMedalLine,{className:"w-5 h-5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{children:"Current Pot"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiOutlineDotsHorizontal,{className:"w-5 h-5"})]}),0===currentTickets?.NumOfTickets||void 0===currentTickets?.NumOfTickets?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:`p-2 mx-4 text-sm ${themeClassNames_text}`,children:"No tickets"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"grid-rows-10 md:grid-rows-19 no-scrollbar m-4 grid max-h-[500px] grid-cols-3 gap-4 overflow-auto p-2 md:grid-cols-7 lg:grid-cols-10 2xl:grid-cols-12",children:[currentTickets&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"reservoir-h1 relative mx-2 flex h-[45px] w-[85px] text-sm font-medium text-white bg-[url('https://ik.imagekit.io/rpslabs/public/pending-ticket.svg')]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"bg-[url('https://ik.imagekit.io/rpslabs/public/ticket.svg')] flex h-[45px] w-[85px] items-center justify-center",style:{width:`${potFill}%`},children:potFill>=1&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:"absolute right-0 flex items-center justify-center left-1",children:[potFill,"%"]})})}),currentTickets?.tickets?.map((ticket=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:'rps-h1 mx-2 flex h-[45px] w-[85px] cursor-default items-center justify-center bg-[url("https://ik.imagekit.io/rpslabs/public/ticket.svg")] text-sm font-light text-white',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:["#",ticket.ticket_id]})},ticket.ticket_id)))]})]})})};CurrentTickets.displayName="CurrentTickets";try{CurrentTickets.displayName="CurrentTickets",CurrentTickets.__docgenInfo={description:"",displayName:"CurrentTickets",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"`0x${string}`"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CurrentTickets.tsx#CurrentTickets"]={docgenInfo:CurrentTickets.__docgenInfo,name:"CurrentTickets",path:"src/components/CurrentTickets.tsx#CurrentTickets"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PastTickets.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>PastTickets});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-tabs/dist/index.mjs"),react_icons_ri__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-icons/ri/index.esm.js"),react_icons_hi__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),_RpsProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/RpsProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PastTickets=()=>{const potsData={3:{NumOfTickets:2,PotFillPercentage:50,tickets:[{ticket_id:301},{ticket_id:302}]},4:{NumOfTickets:4,PotFillPercentage:80,tickets:[{ticket_id:401},{ticket_id:402},{ticket_id:403},{ticket_id:404}]},5:{NumOfTickets:1,PotFillPercentage:100,tickets:[{ticket_id:501}]}},theme=(0,_RpsProvider__WEBPACK_IMPORTED_MODULE_1__.Fg)(),lastThreePots=Object.keys(potsData).slice(-3).reverse(),[selectedPot,setSelectedPot]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(lastThreePots[0]||""),isDark="dark"===theme;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"rps-h1 rounded-lg p-2 "+(isDark?"border-0 bg-neutral-900 ring-1 ring-neutral-600":"ring-1 ring-neutral-300 bg-white"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-row items-center justify-between px-4 py-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-row font-semibold items-center justify-center text-[8px] gap-2 "+(isDark?"text-gray-300":"text-gray-700"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiMedalLine,{className:"w-5 h-5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{children:"Past Pot"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiOutlineDotsHorizontal,{className:"w-5 h-5"})]}),0===lastThreePots.length?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"p-2 mx-4 text-sm "+(isDark?"text-gray-300":"text-gray-700"),children:"No tickets available"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_5__.fC,{value:selectedPot,onValueChange:setSelectedPot,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_5__.aV,{className:"rps-h1 no-scrollbar mb-4 ml-[-15px] flex w-[calc(100%_+_30px)]  border-b border-gray-700 md:ml-0 md:w-full",children:lastThreePots.map((potId=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_5__.xz,{value:potId,className:`group relative min-w-0 shrink-0 whitespace-nowrap border-b-2 border-transparent bg-transparent py-4 px-8 text-center hover:text-gray-700 focus:z-10 ${isDark?"text-white":"text-gray-700"} ${selectedPot===potId?"border-b-[#620DED] text-[#620DED]":""}`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:"font-semibold text-md",children:["POT #",potId]})},potId)))}),lastThreePots.map((potId=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_5__.VY,{value:potId,className:"col-span-full",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"w-full mt-2",children:0===potsData[potId]?.tickets?.length?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"p-2 mx-4 text-sm "+(isDark?"text-gray-300":"text-gray-700"),children:"No tickets"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"grid-rows-10 md:grid-rows-19 no-scrollbar m-4 grid max-h-[500px] grid-cols-4 gap-4 overflow-auto p-2 md:grid-cols-8 lg:grid-cols-10 2xl:grid-cols-12",children:potsData[potId]?.tickets?.map((ticket=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"reservoir-h1 mx-2 flex h-[45px] w-[85px] cursor-default items-center justify-center bg-[url('https://ik.imagekit.io/rpslabs/public/ticket.svg')] text-sm font-light text-gray-300",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:["#",ticket.ticket_id]})},ticket.ticket_id)))})})},potId)))]})]})};PastTickets.displayName="PastTickets";try{PastTickets.displayName="PastTickets",PastTickets.__docgenInfo={description:"",displayName:"PastTickets",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"`0x${string}`"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PastTickets.tsx#PastTickets"]={docgenInfo:PastTickets.__docgenInfo,name:"PastTickets",path:"src/components/PastTickets.tsx#PastTickets"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tickets.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Tickets});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tickets=()=>{const{isWinner,tab,tickets}={tickets:100,isWinner:!1,tab:"current"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:`rps-h1 mx-2 flex h-[45px] w-[85px] items-center justify-center text-sm font-light bg-no-repeat\n    ${isWinner&&"cursor-pointer bg-[url('https://ik.imagekit.io/rpslabs/public/winning-ticket.svg')] text-black transition-transform hover:scale-105 dark:text-black"} \n    ${"current"===tab&&"cursor-default bg-[url('https://ik.imagekit.io/rpslabs/public/ticket.svg')] text-white"} \n    ${"previous"===tab&&"cursor-default bg-[url('https://ik.imagekit.io/rpslabs/public/previous-ticket.svg')] text-[#A58AF9]"}`,children:tickets})};Tickets.displayName="Tickets";try{Tickets.displayName="Tickets",Tickets.__docgenInfo={description:"",displayName:"Tickets",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tickets.tsx#Tickets"]={docgenInfo:Tickets.__docgenInfo,name:"Tickets",path:"src/components/Tickets.tsx#Tickets"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/UserTickets.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>UserTickets});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const UserTickets=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"group relative mx-1 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-l from-[#EE00BA] via-[#6100FF] to-[#FF3D00E5] p-0.5 text-sm font-medium text-gray-900 hover:from-[#620DED] hover:to-[#620DED] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:text-white dark:focus:ring-blue-800",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span",{className:"relative px-5 py-2 bg-white rounded-md rps-h1 group-hover:bg-opacity-0 dark:bg-gray-900",children:[100," TIX"]})});UserTickets.displayName="UserTickets";try{UserTickets.displayName="UserTickets",UserTickets.__docgenInfo={description:"",displayName:"UserTickets",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UserTickets.tsx#UserTickets"]={docgenInfo:UserTickets.__docgenInfo,name:"UserTickets",path:"src/components/UserTickets.tsx#UserTickets"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/modal/results/ResultsModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ResultsModal});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/wagmi/dist/index.js"),react_dialog_dist=__webpack_require__("./node_modules/@radix-ui/react-dialog/dist/index.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/cg/index.esm.js"),ri_index_esm=__webpack_require__("./node_modules/react-icons/ri/index.esm.js"),hi_index_esm=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),RpsProvider=__webpack_require__("./src/RpsProvider.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Modal=({trigger,children})=>(0,jsx_runtime.jsxs)(react_dialog_dist.fC,{children:[(0,jsx_runtime.jsx)(react_dialog_dist.xz,{asChild:!0,children:trigger}),(0,jsx_runtime.jsxs)(react_dialog_dist.h_,{children:[(0,jsx_runtime.jsx)(react_dialog_dist.aV,{className:"fixed inset-0 bg-blackA9 data-[state=open]:animate-overlayShow"}),children]})]});Modal.displayName="Modal";const modal_Modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}const ResultsModal=({trigger,onClose,winningTicketIds,prizeAmount,isWinner,isLoading,isSuccess,isClaimed,onClaimComplete,onClaimError,theme="light"})=>{const[buttonLoading,setButtonLoading]=(0,react.useState)(!1),[showButton,setShowButton]=(0,react.useState)(!1),[showTweetToClaimLink,setShowTweetToClaimLink]=(0,react.useState)(!0),[isClaimLoading,setIsClaimLoading]=(0,react.useState)(!1),themeClassNames_container="dark"===theme?"border-0 bg-neutral-900 ring-1 ring-neutral-600":"ring-1 ring-neutral-300 bg-white",themeClassNames_header="dark"===theme?"bg-neutral-900":"bg-white",themeClassNames_secondaryButton="dark"===theme?"ring-1 ring-white hover:ring-purple-500 text-neutral-300":"shadow-sm text-[#101828] hover:ring-1 hover:ring-purple-500 ",themeClassNames_text="dark"===theme?"text-neutral-300":"text-[#101828]",handleTweetToClaimClick=()=>{setButtonLoading(!0),setTimeout((()=>{setShowTweetToClaimLink(!1),setShowButton(!0),setButtonLoading(!1)}),5e3)},chainConfig=(0,RpsProvider.BX)(),{write:claimPrize}=(0,dist.useContractWrite)({address:chainConfig.raffleContract,abi:chainConfig.abi,functionName:"claim"}),handleClaim=async()=>{setIsClaimLoading(!0);try{const result=await claimPrize();onClaimComplete(result)}catch(error){error instanceof Error?onClaimError(error):onClaimError(new Error("An unknown error occurred"))}finally{setIsClaimLoading(!1)}},content=isWinner?(0,jsx_runtime.jsxs)("div",{className:`pb-4 rounded-xl overflow-hidden ${themeClassNames_container}`,children:[(0,jsx_runtime.jsx)("div",{className:"w-full flex items-center rounded-t-xl bg-[url('https://ik.imagekit.io/rpslabs/public/Disco.svg')]",children:isClaimed?(0,jsx_runtime.jsx)("img",{src:"https://ik.imagekit.io/rpslabs/public/modal/chest-open.png",alt:"chest-box",className:"max-w-[400px]"}):(0,jsx_runtime.jsx)("img",{src:"https://ik.imagekit.io/rpslabs/public/modal/chest-closed.png",alt:"chest-box",className:"max-w-[400px]"})}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-center justify-center mx-4 mt-6 rounded-b-4xl",children:[(0,jsx_runtime.jsx)("h1",{className:`reservoir-h1 mb-1 text-[24px] font-semibold ${themeClassNames_text}`,children:"Congratulations!"}),winningTicketIds.length>0&&(0,jsx_runtime.jsxs)("p",{className:"text-sm font-medium text-neutral-500 dark:text-black",children:["You won ",prizeAmount," ETH"]}),showTweetToClaimLink&&!isClaimed&&(0,jsx_runtime.jsx)("button",{type:"button",className:"w-full rounded-md outline-none bg-[#8869EB] items-center justify-center flex border-none",children:(0,jsx_runtime.jsxs)("a",{href:"https://twitter.com/intent/tweet?text=Just%20won%201.0%20ETH%20by%20trading%20NFTs%20on%20%40hotpot_gg!%0A%0AZero%20creator%20royalties%2C%20a%20fair%20lottery%20system%2C%20and%20a%20chance%20to%20win%20big.%0A%0AJust%20by%20trading%20as%20I%20normally%20would.%0A%0ANo%20extra%20fees.%20Everything%20on-chain.%20hotpot.gg",className:"flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium text-white no-underline outline-none twitter-share-button","data-show-count":"false","data-size":"large",target:"_blank",rel:"noopener noreferrer",onClick:handleTweetToClaimClick,children:["Tweet to Claim",(0,jsx_runtime.jsx)(ri_index_esm.RiTwitterXLine,{className:"text-white "}),buttonLoading&&(0,jsx_runtime.jsx)(index_esm.CgSpinner,{className:"w-4 h-4 mr-2 text-white animate-spin"})]})}),isClaimed&&(0,jsx_runtime.jsx)("button",{type:"button",disabled:!0,className:"w-full rounded-md outline-none bg-[#E1D8FD] items-center justify-center flex border-none",children:(0,jsx_runtime.jsx)("div",{className:"flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium text-black no-underline outline-none twitter-share-button",children:"Claimed"})}),isClaimed&&(0,jsx_runtime.jsx)("button",{type:"button",className:`flex items-center justify-center w-full mt-4 ${themeClassNames_header} border-none ${themeClassNames_secondaryButton}  rounded-md outline-none`,children:(0,jsx_runtime.jsx)("a",{href:"/",className:`flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium ${themeClassNames_text} no-underline outline-none twitter-share-button`,"data-show-count":"false","data-size":"large",target:"_blank",rel:"noopener noreferrer",children:"View my Tickets"})}),showButton&&!isClaimed&&(0,jsx_runtime.jsx)("button",{type:"button",onClick:handleClaim,className:"mb-4 mt-2 flex items-center justify-center rounded-full border border-[#FFF06A] px-16 py-3 text-sm font-medium text-[#CD7100] focus:outline-none "+(isLoading||isSuccess||isClaimed?"bg-gradient-to-b from-gray-400 to-gray-300 cursor-not-allowed":"bg-gradient-to-b from-[#FFE179] to-[#FFB52E] hover:from-[#FFC269] hover:to-[#FFB82E]"),disabled:isLoading||isSuccess||isClaimed||isClaimLoading,children:isLoading?(0,jsx_runtime.jsx)(index_esm.CgSpinner,{className:"w-5 h-5 mr-2 animate-spin"}):"CLAIM"}),(0,jsx_runtime.jsx)("div",{className:"w-full m-2 mt-4 overflow-hidden",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-row items-center gap-2 px-4 py-1  rounded-md justify-center  bg-[#F4F4F4]",children:[(0,jsx_runtime.jsx)("img",{src:"https://ik.imagekit.io/rpslabs/public/rps-logo.svg",alt:"hotpot-logo",className:"w-5 h-5"}),(0,jsx_runtime.jsxs)("h2",{className:"text-xs font-medium",children:["Powered by"," ",(0,jsx_runtime.jsx)("a",{href:"https://rpslabs.io",className:"no-underline #8869EB",children:"RPS Labs"})]})]})})]})]}):(0,jsx_runtime.jsxs)("div",{className:`flex flex-col items-center justify-center pb-4 rounded-xl ${themeClassNames_container}`,children:[(0,jsx_runtime.jsx)("div",{className:"w-full bg-[#F1F3FF] items-center justify-center flex overflow-hidden rounded-t-xl",children:(0,jsx_runtime.jsx)("img",{src:"https://ik.imagekit.io/rpslabs/public/modal/crying.png?updatedAt=1701551904860",alt:"crying",className:"max-h-[189px]"})}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-center justify-center mx-4 mt-6",children:[(0,jsx_runtime.jsx)("h1",{className:`mx-2 mb-2 text-center text-[24px] font-semibold ${themeClassNames_text}`,children:"Sorry, your ticket(s) did not win"}),(0,jsx_runtime.jsx)("p",{className:"text-sm font-normal text-neutral-400",children:"Don't sweat! Try your luck on the next draw!"}),(0,jsx_runtime.jsx)("div",{className:"w-full m-2 mt-4 overflow-hidden",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-row items-center gap-2 px-4 py-1  rounded-md justify-center  bg-[#F4F4F4]",children:[(0,jsx_runtime.jsx)("img",{src:"https://ik.imagekit.io/rpslabs/public/rps-logo.svg",alt:"hotpot-logo",className:"w-5 h-5"}),(0,jsx_runtime.jsxs)("h2",{className:"text-xs font-medium",children:["Powered by"," ",(0,jsx_runtime.jsx)("a",{href:"https://rpslabs.io",className:"no-underline #8869EB",children:"RPS Labs"})]})]})})]})]});return(0,jsx_runtime.jsx)(modal_Modal,{trigger,children:(0,jsx_runtime.jsxs)(react_dialog_dist.VY,{className:"rps-h1 rounded-xl overflow-hidden fixed top-[50%] left-[50%] z-[100000000000000] mt-10 w-[90vw] max-w-[400px] translate-x-[-50%] translate-y-[-50%] rounded shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] backdrop-blur-md focus:outline-none data-[state=open]:animate-contentShow",children:[(0,jsx_runtime.jsx)(react_dialog_dist.x8,{asChild:!0,children:(0,jsx_runtime.jsx)("button",{type:"button","aria-label":"Close",onClick:onClose,className:"absolute top-0 right-0 p-2 m-4 z-[10] bg-transparent border-none outline-none focus:outline-none hover:scale-110 ",children:(0,jsx_runtime.jsx)(hi_index_esm.HiX,{className:"w-4 h-4"})})}),content]})})};ResultsModal.displayName="ResultsModal";try{ResultsModal.displayName="ResultsModal",ResultsModal.__docgenInfo={description:"",displayName:"ResultsModal",props:{isClaimed:{defaultValue:null,description:"",name:"isClaimed",required:!0,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},isSuccess:{defaultValue:null,description:"",name:"isSuccess",required:!0,type:{name:"boolean"}},isWinner:{defaultValue:null,description:"",name:"isWinner",required:!0,type:{name:"boolean"}},onClaimComplete:{defaultValue:null,description:"",name:"onClaimComplete",required:!0,type:{name:"(data: any) => void"}},onClaimError:{defaultValue:null,description:"",name:"onClaimError",required:!0,type:{name:"(error: Error) => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},prizeAmount:{defaultValue:null,description:"",name:"prizeAmount",required:!0,type:{name:"string"}},theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},winningTicketIds:{defaultValue:null,description:"",name:"winningTicketIds",required:!0,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/results/ResultsModal.tsx#ResultsModal"]={docgenInfo:ResultsModal.__docgenInfo,name:"ResultsModal",path:"src/components/modal/results/ResultsModal.tsx#ResultsModal"})}catch(__react_docgen_typescript_loader_error){}}}]);