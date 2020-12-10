//////////////////////////////////////////// TIMER //////////////////////////////////////////////// 
// import Timer from "react-compound-timer";
// <div className='timer' align='center'>
//     <Timer
//         initialTime={1000*60*25}
//         startImmediately={false}
//         direction="backward"
//         // checkpoints={[
//         // 	{
//         // 		time: 1000*60*25 - 5000,
//         // 		callback: () => alert('Play time begins'),
//         // 	}
//         // ]}
//         // timeToUpdate={50}
//     >
//     {({ start, resume, pause, stop, reset}) => (
//         <React.Fragment>
//             <div>
//                 <h2>
//                     <Timer.Minutes /> : <Timer.Seconds />
//                 </h2> 
//                 {/* <Timer.Milliseconds /> milliseconds */}
//             </div>
//             {/* <div>{timerState}</div> */}
//             <br />
//             <div>
//                 <Button onClick={start}>Start</Button>
//                 {/* <Button onClick={pause}>Pause</Button>
//                 <Button onClick={resume}>Resume</Button> */}
//                 <Button 
//                 onClick={() => {
//                     reset();
//                     stop();
//                 }}>
//                     Stop
//                 </Button>
//                 {/* <Button onClick={reset}>Reset</Button> */}
//             </div>
//         </React.Fragment>
//     )}
//     </Timer>
// </div>


///////////////////////////////////////////////////// TAB VIEW /////////////////////////////////////////// 
// import Paper from "@material-ui/core/Paper";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// <div>
//     <Paper position="static">
//         <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
//             <Tab label="Whatsapp" {...a11yProps(0)} />
//             <Tab label="Instagram" {...a11yProps(1)} />
//             <Tab label="Facebook" {...a11yProps(2)} />
//             <Tab label="Telegram" {...a11yProps(3)} />
//             <Tab label="Pata Nahi" {...a11yProps(4)} />
//         </Tabs>
//     </Paper>
//     <TalkingToFriendsSeniors value={value} index={0}>
//         Whatsapp
//     </TalkingToFriendsSeniors>
//     <TalkingToFriendsSeniors value={value} index={1}>
//         Instagram
//     </TalkingToFriendsSeniors>
//     <TalkingToFriendsSeniors value={value} index={2}>
//         Facebook
//     </TalkingToFriendsSeniors>
//     <TalkingToFriendsSeniors value={value} index={3}>
//         Telegram
//     </TalkingToFriendsSeniors>
//     <TalkingToFriendsSeniors value={value} index={4}>
//         Pata Nahi
//     </TalkingToFriendsSeniors> 
// </div>