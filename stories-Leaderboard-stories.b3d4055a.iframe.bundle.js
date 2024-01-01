"use strict";(self.webpackChunk_rps_labs_lotto_sdk=self.webpackChunk_rps_labs_lotto_sdk||[]).push([[535],{"./src/stories/Leaderboard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./dist/index.css");var _components_Leaderboard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Leaderboard.tsx"),_RpsProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/RpsProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Leaderboard",component:_components_Leaderboard__WEBPACK_IMPORTED_MODULE_1__.s,argTypes:{theme:{control:{type:"radio",options:["light","dark"]},defaultValue:"light"}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_RpsProvider__WEBPACK_IMPORTED_MODULE_2__.Hf,{apiKey:"your-api-key",theme:args.theme,activeChain:"sepolia",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Leaderboard__WEBPACK_IMPORTED_MODULE_1__.s,{...args})});Template.displayName="Template";const Default=Template.bind({});Default.args={theme:"light"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => <RPSProvider apiKey="your-api-key" theme={args.theme} activeChain="sepolia">\n    <Leaderboard {...args} />\n  </RPSProvider>',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Leaderboard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Leaderboard});__webpack_require__("./node_modules/react/index.js");var react_icons_ri__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-icons/ri/index.esm.js"),react_icons_hi__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),_RpsProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/RpsProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Leaderboard=()=>{const theme=(0,_RpsProvider__WEBPACK_IMPORTED_MODULE_1__.Fg)(),isDark="dark"===theme,containerClass=isDark?"border-0 bg-neutral-900 ring-1 ring-neutral-600":"ring-1 ring-neutral-300 bg-white";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:`rps-h1 no-scrollbar flex flex-col max-h-[540px] max-w-[600px] overflow-y-auto overflow-x-hidden rounded-lg  ${containerClass}`,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-row items-center justify-between px-4 py-2 "+(isDark?"bg-neutral-900 text-neutral-200":"bg-white"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-row font-semibold items-center justify-center text-[8px] gap-2 "+(isDark?"text-neutral-200":"text-black"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiMedalLine,{className:"w-5 h-5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{children:"Leaderboard"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiOutlineDotsHorizontal,{className:"w-5 h-5"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table",{className:"w-full mb-2 table-auto",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead",{className:`sticky top-0 ${isDark?"bg-neutral-900":"bg-white"} border-b z-5  ring-neutral-100 ${isDark?"ring-neutral-600":""}`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{className:"px-4 mx-4 text-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{className:`py-4 text-center text-sm font-medium ${isDark?"text-neutral-300":"text-[#747474]"} md:py-4`,children:"Rank"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{className:`py-4 text-left text-sm font-medium ${isDark?"text-neutral-300":"text-[#747474]"} md:py-4`,children:"Wallet Addresses"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{className:`py-4 text-right text-sm font-medium ${isDark?"text-neutral-300":"text-[#747474]"} md:py-4`,children:"Boost"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("th",{className:`py-4 text-center text-sm font-medium ${isDark?"text-neutral-300":"text-[#747474]"} md:py-4`,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"md:hidden",children:"Tickets"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"hidden md:block",children:"Total Tickets"})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody",{children:[{rank:1,user:"0xA34589Bd802aeDacd4688697057B0C287effaC29",boost:"2x",totalTickets:135},{rank:2,user:"0x410965D10c91A16471D7cf3BeC9AA17105B3cD01",boost:"1.5x",totalTickets:90},{rank:3,user:"0x555c691B7fF6460603dB4D50F37C5C4CA65Bdb42",boost:"1.5x",totalTickets:85},{rank:4,user:"0x8fD2B231B664386e7d5828B23c1fC3F6390FC355",boost:"1.5x",totalTickets:80},{rank:5,user:"0x3b89509b8B62308b25E0474ffBF20EEe630ef782",boost:"1.5x",totalTickets:75}].slice(0,5).map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LeaderboardItemRow,{...item,theme},item.rank)))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"m-2 overflow-hidden ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-row items-center gap-2 px-4 py-1 rounded-md justify-left",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"https://ik.imagekit.io/rpslabs/public/rps-logo.svg",alt:"hotpot-logo",className:"w-5 h-5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2",{className:"text-sm font-medium "+(isDark?"text-neutral-300":"text-black"),children:["Powered by"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"https://rpslabs.io",className:"no-underline "+(isDark?" text-[#9270FF]":" text-[#8869EB]"),children:"RPS Labs"})]})]})})]})};Leaderboard.displayName="Leaderboard";const RankBadge=({rank,theme="light"})=>{const badgeClass="dark"===theme?"text-neutral-300":"text-black";return 1===rank?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"https://ik.imagekit.io/rpslabs/public/leaderboard/rank1.svg",alt:"Rank 1 Badge",className:`items-center flex-grow w-8 h-8 ${badgeClass}`}):2===rank?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"https://ik.imagekit.io/rpslabs/public/leaderboard/rank2.svg",alt:"Rank 2 Badge",className:`items-center flex-grow w-8 h-8 ${badgeClass}`}):3===rank?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"https://ik.imagekit.io/rpslabs/public/leaderboard/rank3.svg",alt:"Rank 3 Badge",className:`items-center flex-grow w-8 h-8 ${badgeClass}`}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:`flex-grow m-1 text-sm font-medium ${badgeClass}`,children:["#",rank]})};RankBadge.displayName="RankBadge";const LeaderboardItemRow=({rank,user,boost,totalTickets,theme="light"})=>{const rowClass="dark"===theme?"text-neutral-200":"text-black";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{className:`text-sm text-center ${rowClass}`,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{"aria-label":"leaderboard",className:"flex items-center px-2 py-4 md:px-2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RankBadge,{rank,theme})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{className:"px-2 py-4 text-left md:w-1/3 md:px-2",children:`${user.slice(0,5)}...${user.slice(-5)}`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{className:"px-2 py-4 text-right md:px-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"flex-grow text-sm font-medium",children:boost})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{className:"px-2 py-4 text-center md:px-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"flex-grow text-sm font-semibold",children:totalTickets})})]})};LeaderboardItemRow.displayName="LeaderboardItemRow";try{Leaderboard.displayName="Leaderboard",Leaderboard.__docgenInfo={description:"",displayName:"Leaderboard",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"`0x${string}`"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Leaderboard.tsx#Leaderboard"]={docgenInfo:Leaderboard.__docgenInfo,name:"Leaderboard",path:"src/components/Leaderboard.tsx#Leaderboard"})}catch(__react_docgen_typescript_loader_error){}}}]);