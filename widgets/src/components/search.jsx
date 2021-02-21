import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setData] = useState([]);
  /** axios call */
  useEffect(()=>{
    const retrieve = async () => {
      const { data } = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${term}`)
      setData(data.query.search)
    };

    if(term && !results.length) {
      retrieve();
    } else{
      const timeoutId = setTimeout(() => {
        if (term) {
          retrieve();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId)
      }
    }

  },[term])


  const list = () =>{
    const renderedResults= results.map((values,index)=>{
      return (
        <div key={index} className="item">
          <div className="right floated content">
            <a href={`https://en.wikipedia.org?curid=${values.pageid}`}
             className="ui button">Go</a>
          </div>
          <div className="content">
            <div className="header">
              {values.title}
            </div>
            <span dangerouslySetInnerHTML={{__html:values.snippet}}></span>
          </div>
        </div>
      )
    })
    return renderedResults;
  }
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
          <div className="ui celled list">
          {list()}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Search;
