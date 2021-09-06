import React from 'react'
import { Spinner } from './Spinner'
import { useGetGenericQuery } from '../store/middleware/apiSlice'
import { ContainerComponent } from './ContainerComponent';
import { TextRichComponent } from './TextRichComponent';
import { ImageComponent } from './ImageComponent';

const Generic = ({match}) => {
    const type = match.path;
    const {
        data,
        isFetching,
        isSuccess,
      } = useGetGenericQuery(type)

      console.log(data);

      let items = data;

     let content = <h1>testing...</h1>

      if (isFetching) {
         content = <Spinner text="Loading..." />
       } else if (isSuccess) {
         content = (
           <div className="allItems">
               {items.map((item, index) => 
                <div key={item.type+item[index]} >
                    {item.type === 'rich-text' ? <TextRichComponent textData={item}/> : 
                    item.type === 'container' ? <ContainerComponent details={item} /> : <ImageComponent imageData={item}/>}
                    </div>)}
           </div>
         )
       }
    
      return <section>{content}</section>
};
export default Generic
