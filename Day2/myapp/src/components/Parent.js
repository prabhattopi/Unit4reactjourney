import React,{useState} from 'react'
import { Child1 } from './Child1'
import { Child2 } from './Child2'

export const Parent = () => {
    // let information="xxxxxx"
    const[info,setInfo]=useState("")

  return (
    <div>
        Parent:{info}

  
  <Child1 info={info} setInfo={setInfo}/>
  <Child2 info={info}/>


    </div>
  )
}
//componets communication--->
// ptochil
// cildtoparent
// 
