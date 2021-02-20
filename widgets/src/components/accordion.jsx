import React, {useState} from 'react';



const Accordion = ({items}) => {
  const [showIndex,setIndex]= useState(null);

  const onTitleClick =(index) => {
    setIndex(index)
  }

  const renderedItems = items.map((item,index)=>{
    return (
      <React.Fragment key={item.title}>
        <div
        onClick = {() =>onTitleClick(index)}
         className="title active" >
          <i className ="dropdown icon"></i>
          {item.title}
        </div>
        <div className='content active'>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })

  return (
  <div className="ui styled accordion">
    {renderedItems}
    <h1>{showIndex}</h1>
  </div>);
}


export default Accordion;
