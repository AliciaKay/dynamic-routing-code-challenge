import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import parse from 'html-react-parser';

export const TextRichComponent = ({ textData }) => {
    let fieldFormat;
    textData.textType === "plain" ? 
    fieldFormat = <p>{textData.text}</p> : 
    fieldFormat = parse(textData.text)
    console.log(textData.textType, ':', textData.text)
    return (
     <div key={uuidv4()} className='textClass' style={{'textTransform': textData.style}}>{fieldFormat}</div>
    )
  }