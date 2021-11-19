import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./tinderCards.css";

function TinderCards() {
const [people,setPeople]=useState([
    {
        name:'Elon musk',
        url:"https://www.usnews.com/dims4/USNEWS/f45ea7c/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg",
    },
    {
        name:'Jeff bezos',
        url:'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f469ea85cc82fc8d6083f05%2FAmazon-Founder-and-CEO-Jeff-Bezos%2F960x0.jpg%3Ffit%3Dscale'
    }
]);
const Swiped=(direction,nameToDelete)=>{
    console.log("removing:"+nameToDelete);
    
};
const outOfFrame=(name)=>{
    console.log(name+"left the screen");
}

    return (
        <div className="tinderCards">
           <div className="tinderCards__cardContainer">
           {people.map((person)=>(
               <TinderCard
               className="swipe"
               key={person.name}
               preventSwipe={["up","down"]}
               onSwipe={(dir)=> Swiped(dir,person.name)}
               onCardLeftScreen={()=> outOfFrame(person.name)}
            > 
               <div
               style={{ backgroundImage: `url(${person.url})`}}
               className="card"
               >
               <h3>{person.name}</h3>    
               </div>
               
                </TinderCard>
           ))}
           </div>
           
        </div>
    );
}

export default TinderCards
