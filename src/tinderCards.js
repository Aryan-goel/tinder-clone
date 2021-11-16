import React, { useState } from "react";
import "./tinderCards.css";

function TinderCards() {
const [people,setPeople]=useState([
    {
        name:'Elon musk',
        url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F85%2FElon_Musk_Royal_Society_%2528crop1%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FElon_Musk&tbnid=zY4uP_4PDKQQGM&vet=12ahUKEwiR_8uA85z0AhUQlUsFHZg4BCUQMygAegUIARDNAQ..i&docid=cElLiMk8T9O8LM&w=480&h=720&itg=1&q=elon%20musk&ved=2ahUKEwiR_8uA85z0AhUQlUsFHZg4BCUQMygAegUIARDNAQ",
    },
    {
        name:'Jeff bezos',
        url:'sdfsd'
    }
]);

    return (
        <div className="tinderCards">
           {people.map((person)=>(
               <h1>{person.name}</h1>
           ))}
        </div>
    );
}

export default TinderCards
