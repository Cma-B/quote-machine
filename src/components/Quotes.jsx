import React, { useState, useEffect } from "react";
import axios from "axios";

const Quotes = (props) => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    let response;
    axios.get(".src/data/quotes.json").then((response) => {
      setQuotes({
        quotes: response.data.quotes
      })
      
    })
  }

  let content = quotes.map((quote)=> {
    return (
      <>
      <h3>{quote.id}</h3>
      <h4>{quote.author}</h4>
      </>
    )
  }
  )
   

 
};

export default Quotes;
