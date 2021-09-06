import React from 'react'
import { ImageComponent } from './ImageComponent'
import { TextRichComponent } from './TextRichComponent'

export const ContainerComponent = ({ item }) => {
    return (
      <container className={item.className} 
      style={{
        'display': 'flex', 
        'flexDirection': item.flexDirection, 
        'flexWrap': item.flexWrap, 
        'justifyContent': item.justifyContent, 
        'alignItems': item.justifyContent}}>
        <ImageComponent imageData={item}/>
        <TextRichComponent textData={item}/>
      </container>
    )
  }