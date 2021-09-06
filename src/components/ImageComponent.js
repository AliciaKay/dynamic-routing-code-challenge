import React from 'react'

export const ImageComponent = ({ imageData }) => {
    let srcString;
    imageData.src.length ? srcString = imageData.src : srcString = 'https://via.placeholder.com/100'
    return (
      <img className={imageData.className} src={srcString} alt={imageData.alt} style={{'alignSelf': 'center', 'maxHeight': imageData.height}}/>
    )
  }