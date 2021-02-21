
import React, { useState } from 'react';

const Dropdown = ({ options, selected, onSetChange }) => {
  const [open, setOpen] = useState(true)

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

  const toggle = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  const hide = () => {
    if (open) {
      return ''
    } else {
      return 'visible transition'
    }
  }

  return (
    <div className="ui form">
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
