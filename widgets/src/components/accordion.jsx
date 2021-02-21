import { useState } from 'react';


const Accordion = ({ topics }) => {
const [valueShow,setShow] = useState("")


  const hide =(values) => {
    if(valueShow === values) {
      return "";
    }else {
      return "hidden";
    }
  }


  const valueSet =(values) =>{
    setShow(values)
  }

  const rendering = () => {

    const loop = topics.map((values, index) => {
      return (
        <div className="column" key={values.id}>
          <h3 onClick={() => valueSet(values.id)}>{values.title}</h3>
          <h4 className={hide(values.id)}>{values.information}</h4>
        </div>
      )
    })
    return loop;
  }

  return (
    <div>
      {rendering()}
    </div>
  )
}

export default Accordion
