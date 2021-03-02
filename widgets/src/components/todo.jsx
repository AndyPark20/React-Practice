import React, { useState,useEffect } from 'react';
import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import InputGroup, { prepend, Text } from 'react-bootstrap/InputGroup';

const Todo = () => {
  const [name,setName] = useState('')

// useEffect(()=>{

//   console.log(name)

// },[name])



  return (
    <div className="container">
      <div className="row w-100">
        <div className="col-12">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">Names</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl onChange={(e)=>setName(e.target.value)} aria-label="Default" aria-describedby="inputGroup-sizing-default" />
          </InputGroup>
        </div>
        <div className="col-12">
          <Button onClick={()=>{console.log(name)}} className="float-right w-25" variant="primary" type="submit">Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default Todo;
