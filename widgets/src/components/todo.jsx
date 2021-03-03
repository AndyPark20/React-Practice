import React, { useState,useEffect } from 'react';
import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Panel from './panel';

const Todo = () => {
  const [name,setName] = useState([])
  const [type, setType] = useState('')


  const test=(type)=>{
    setName([...name,type])
  }

  return (
    <div className="container">
      <div className="row w-100">
        <div className="col-12">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">Names</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl onChange={(e)=>setType(e.target.value)} aria-label="Default" aria-describedby="inputGroup-sizing-default" />
          </InputGroup>
        </div>
        <div className="col-12">
          <Button onClick={()=>{test(type)}} className="float-right w-25" variant="primary" type="submit">Submit</Button>
        </div>
        <div className="col-12">
          <Panel value={name} />
        </div>
      </div>
    </div>
  )
}

export default Todo;
