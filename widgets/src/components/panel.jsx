import React, {useEffect,useState} from 'react';


const Panel = ({ value }) => {
  const [random,getRandom] = useState('');
  useEffect(()=>{
      value.sort(()=>Math.random()-0.5)
      getRandom(value);
  },[value])


  const renderIt = () => {
    const circle = value.map((name, index) => {
      return (
        <div className="container text-center" key={index}>
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="nothing">{name}</h3>
            </div>
          </div>
        </div>
      )
    })
    return circle;
  }



  return (
    <div className="conainter">
      <div className="row d-flex">
        <div className="col-6">
          {renderIt()}
        </div>
        <div className="col-6">
          {random}
        </div>
      </div>
    </div>
  )
}


export default Panel;
