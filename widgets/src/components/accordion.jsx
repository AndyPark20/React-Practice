import { useState } from 'react';


const Accordion = ({ topics }) => {
  const [valueShow, setShow] = useState("")
  const [textShow, setText] = useState(false)
  const [countShow, setCount] = useState(0)

  const hide = (values) => {
    if (valueShow === values && !textShow) {
      return "";
    } else {
      return "hidden";
    }
  }

  const valueSet = (values) => {
    setShow(values)
    if (!textShow) {
      setText(true)
    } else {
      setText(false)
    }
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

  const counting = () => {
    let number = countShow;
    number++;
    setCount(number)
    console.log('number',number)

  }

  const letsCount = () => {
    return (
      <div className="btn">
        <button onClick={() => counting()}>click me</button>
        <h1>{`Count: ${countShow}`}</h1>
      </div>
    )
  }

  return (
    <div>
      {rendering()}
      <br />
      {letsCount()}
    </div>
  )
}

export default Accordion
