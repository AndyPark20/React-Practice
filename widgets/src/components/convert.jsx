import React, {useState, useEffect} from 'react';


 const Convert =({language,text})=>{
  useEffect(()=>{

    console.log(`${language} detected`)
    console.log(`${text} detected`)

  },[language,text])

  return(
    <div />
  )
}

export default Convert;
