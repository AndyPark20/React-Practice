import React, {useState} from 'react';
import Dropdown from './dropdown';


const options =[
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label:'Arabic',
    value:'ar'
  },
  {
    label:'Hindi',
    value:'hi'
  }
]


const Translate = ()=>{
  const [language,setLanguage]= useState(options[0])

  return (
    <div>
      <div><Dropdown selected={language} onSetChange={setLanguage} options={options}/></div>
    </div>
  )

};

export default Translate;
