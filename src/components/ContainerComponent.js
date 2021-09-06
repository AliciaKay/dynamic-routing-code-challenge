import React from 'react'
import { ImageComponent } from './ImageComponent'
import { TextRichComponent } from './TextRichComponent'

export const ContainerComponent = ({ details }) => {
    return (
      <div className={details.className} 
      style={{
        'display': 'flex', 
        'flexDirection': details.flexDirection, 
        'flexWrap': details.flexWrap, 
        'justifyContent': details.justifyContent, 
        'alignItems': details.justifyContent}}>
          {details.items.length ? details.items.map((innerItem) => {
            return <ContainerComponent details={innerItem} />
          }): null}
        {details.type === "image" ? <ImageComponent imageData={details}/> : null }
        {details.type === "rich-text" ? <TextRichComponent textData={details}/> : null }
        
      </div>
    )
  }