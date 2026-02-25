import React, { useState } from 'react'

interface Property
{
    children:string;
    maxChars?:number;
}

const ExpandableText = ({children,maxChars=100}:Property) => 
{
    const [isExpanded,setExpanded] = useState(false);

    if(children.length<=100) return <p>{children}</p>;
    const text = isExpanded?children:children.substring(0,maxChars);

  return (
    <p>{text} ...<button onClick={()=>setExpanded(!isExpanded)} >{isExpanded?'Less':'More'}</button></p>
  )
}

export default ExpandableText