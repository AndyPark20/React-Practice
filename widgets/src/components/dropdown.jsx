
import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSetChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();


  useEffect(() => {
    console.log('AFTER RENDER', open)
    document.body.addEventListener('click', (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        console.log('ELEMENT', open)
        return
      }
      setOpen(false)

    }, { capture: true })
  },[]);


  const toggle = () => {
    console.log('toggle!',open)
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }

  }

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    } else {
      return (
        <div onClick={() => onSetChange(option)} key={option.value} className="item">
          {option.label}
        </div>
      )
    }
  })


  const hide = () => {
    if (!open) {
      return ''
    } else {
      return 'visible transition'
    }
  }
  return (
    <div ref={ref} className="ui form">
      <div onClick={() => toggle()} className="field">
        <label className="label">Select a Color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${hide()}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
