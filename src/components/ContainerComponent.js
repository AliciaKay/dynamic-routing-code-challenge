import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ImageComponent } from './ImageComponent'
import { TextRichComponent } from './TextRichComponent'

export const ContainerComponent = ({ details }) => {
  let assignedClass;
  details.className ? assignedClass = details.className : details.textType ? assignedClass = `outer-${details.textType}` : assignedClass = `outerDiv`
    return (
      <div key={uuidv4()} className={assignedClass}
      style={{
        'display': 'flex', 
        'flexDirection': details.flexDirection, 
        'flexWrap': details.flexWrap, 
        'justifyContent': details.justifyContent, 
        'alignItems': details.justifyContent,
        'width': `@debug math.percentage(${details.width})`}}>
          {details.items ? details.items.map((innerItem) => {
            return <ContainerComponent key={uuidv4()} details={innerItem} />
          }): null}
        {details.type === "image" ? <ImageComponent key={uuidv4()} imageData={details}/> : null }
        {details.type === "rich-text" ? <TextRichComponent key={uuidv4()} textData={details}/> : null }
        
      </div>
    )
  }