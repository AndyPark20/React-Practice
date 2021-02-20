import React, {useState} from 'react';



const Accordion = ({items}) => {
 const [stateValue, ChangeState] =useState(null);

  const increment = (index) => {
    ChangeState(index)
  }

  const renderedItems = items.map((item,index)=>{
    const active = index === stateValue ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div
        onClick = {() => increment(index)}
         className={`title ${active}`} >
          <i className ="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })

  return (
  <div className="ui styled accordion">
    {renderedItems}
  </div>);
}


export default Accordion;
