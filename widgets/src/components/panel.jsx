import React, { useEffect, useState } from 'react';


const Panel = ({ value }) => {
  const [random, getRandom] = useState([]);


  useEffect(() => {
    const steady = value.slice()
    steady.sort(() => Math.random() - 0.5)
    getRandom(steady);
  }, [value])


  const renderIt = () => {
    const circle = value.map((name, index) => {
      return (
        <div key={index}>
          <h3 className="nothing">{name}</h3>
        </div>
      )
    })
    return circle;
  }

  const generate =()=>{
    const rando = random.map((values,index)=>{
      return(
        <div key={index}>
          <h3 className="nothing">{values}</h3>
        </div>
      )
    })
    return rando;
  }


  return (
    <div className="conainter">
      <div className="row w-100 d-flex flex-row">
        <div className="col-6">
          <h1>Original</h1>
          {renderIt()}
        </div>
        <div className="col-6">
          <h1>Random</h1>
          <div className="d-flex flex-column ">
            {generate()}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Panel;
