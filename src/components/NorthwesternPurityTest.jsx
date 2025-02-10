import React, { useState } from 'react';
import './NorthwesternPurityTest.css';
import logo from './assets/northwestern-university.svg';

const NorthwesternPurityTest = () => {
  const prompts = [
    "Lived in Bobb",
    "Made out with someone at Reza's",
    "Was hungover during Wildcat Welcome",
    "Been to every dining hall",
    "Contracted frat flu",
    "Gotten locked out of your dorm",
    "Been to student health services",
    "Taken a 9am in the winter",
    "Skipped your winter 9am",
    "Gotten turned away by a club in Chicago",
    "Gotten your wildcard checked while visiting your situationship's dorm",
    "Had a sleepover in the twin XL",
    "Studied abroad",
    "Had a crush on your TA",
    "Had a crush on your RA",
    "Had a crush on your PA",
    "Been to the North Shore hospital",
    "Asked out your class crush",
    "Gotten a Medill F",
    "Done a north-to-south campus walk of shame",
    "Thrown up in a frat",
    "Done Bob's trivia",
    "Been inside the ZBT house",
    "Created a friend group due to dorm room proximity",
    "Seen a classmate on Hinge",
    "Seen a professor on Hinge",
    "Sexiled someone on a weeknight",
    "Been sexiled on a weeknight",
    "Thrown up on Sheridan",
    "Finished your meal exchanges by Thursday",
    "Broken up with your long-distance s/o",
    "Had a crush on one of your friend's parents",
    "Door-dashed Insomnia while high",
    "Called your mom while drunk",
    "Fell out of touch with your freshman-year roommate",
    "Seen Jeff Bezos on campus",
    "Complained while walking by a prospective student tour",
    "Seen Schill walking his dog",
    "Showered in the Mudd showers",
    "Hooked up with someone in a university building",
    "Talked to the Catholics who were trying to convert you",
    "Gone to a Kemper dorm party",
    "Blacked out on Dillo Day",
    "Had to have a conversation with Schill",
    "Attended a welcome-week toga party",
    "Been accused of hazing",
    "ChatGPT'd an assignment",
    "Posted a First Gen graphic on your Insta story",
    "Seen last night's hookup in Mudd the next day",
    "Hooked up with the same person as your friend",
    "Starred as an extra in your RTVF friend's film",
    "Gotten food poisoning from Sarge",
    "Been featured on barstoolcats",
    "Been featured on barstoolchicks",
    "Been featured on nu_dining",
    "Done the illegal cross on Sheridan by Deering",
    "Eaten dinner at Reza's",
    "Had your roommate walk in on you hooking up with someone",
    "Hooked up with a set of roommates (same day or separate days—we don’t judge)",
    "Pulled an all-nighter to study for an exam",
    "Been to the tub",
    "Stormed Welsh-Ryan Arena",
    "Gone on stage at Blowout",
    "Gotten an Academic Integrity Violation",
    "Been high in class",
    "Walked around the Lakefill with your situationship",
    "Survived EA1",
    "Slept with Willie the Wildcat",
    "?",
    "Been to 3+ frats in one night",
    "Blacked out on a party bus to a formal",
    "Taken something from Lisa's",
    "Took a friend's survey for Psych",
    "Watched the sunrise on the lake",
    "Know the actual words to Go U Northwestern",
    "Withdrawn from a class",
    "Hooked up on a beach",
    "Gone to a club meeting just for the food",
    "Stress smoked outside Tech before an exam",
    "Fallen out of your twin XL",
    "Got high with a professor",
    "Rode an athlete's moped",
    "Had a study beer (or 9)",
    "Made a banner for gameday",
    "Waited in line at SPAC during Wildcat Welcome",
    "Auditioned for an acappella group",
    "Traveled for an away game",
    "Skipped going out to prep for an interview",
    "Went out even though you had an interview the next day",
    "Been to a Chicago sports game",
    "Dated someone from a dating app",
    "Used a fake to get drinks at a game",
    "Gave your situationship your purple pride shirt",
    "Ran to a class",
    "Ubered back to campus with a stranger from O'Hare",
    "Done a bump in River North",
    "Been on the Mudd roof",
    "Pulled trig at a darty",
    "Stolen a frat/sorority composite",
    "Go to the best school in the world 💜"
  ];

 const [selectedPrompts, setSelectedPrompts] = useState([]);
 const [showResults, setShowResults] = useState(false);

 const togglePrompt = (prompt) => {
   setSelectedPrompts(prev => 
     prev.includes(prompt) 
       ? prev.filter(p => p !== prompt)
       : [...prev, prompt]
   );
 };

 const calculatePurityScore = () => {
   return Math.round((1 - selectedPrompts.length / prompts.length) * 100);
 };

 const resetTest = () => {
   setSelectedPrompts([]);
   setShowResults(false);
 };

 return (
   <div className="container">
     <div className="card">
       <div className="header">
         <h2>Northwestern Purity Test</h2>
         <img src={logo} alt="Northwestern Logo" className="logo" />
       </div>
       <div className="content">
         {!showResults ? (
           <div>
             <p className="instructions">
               Check off each prompt that applies to you. The fewer checked, the higher your "purity" score!
             </p>
             <div className="prompts-grid">
               {prompts.map((prompt, index) => (
                 <label key={index} className="prompt-item">
                   <span className="prompt-number">{index + 1}.</span>
                   <input
                     type="checkbox"
                     checked={selectedPrompts.includes(prompt)}
                     onChange={() => togglePrompt(prompt)}
                   />
                   <span>{prompt}</span>
                 </label>
               ))}
             </div>
           </div>
         ) : (
           <div className="results">
             <h2>Your Northwestern Purity Score</h2>
             <div className="score">{calculatePurityScore()}</div>
             <p>Out of {prompts.length} total Northwestern experiences</p>
             <div className="checked-items">
               <h3>Your checked experiences:</h3>
               <div className="checked-list">
                 {selectedPrompts.map((prompt, index) => (
                   <div key={index} className="checked-item">{prompt}</div>
                 ))}
               </div>
             </div>
           </div>
         )}
       </div>
       <div className="footer">
         {!showResults ? (
           <button onClick={() => setShowResults(true)}>
             Calculate My Purity Score
           </button>
         ) : (
           <button onClick={resetTest}>
             Take Test Again
           </button>
         )}
       </div>
     </div>
   </div>
 );
};

export default NorthwesternPurityTest;