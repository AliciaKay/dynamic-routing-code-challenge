import React from 'react'
import { Spinner } from './Spinner'
import { useGetGenericQuery } from '../store/middleware/apiSlice'
import { ContainerComponent } from './ContainerComponent';

const Generic = ({match}) => {
    const type = match.params;
    const {
        data: genericItems = [],
        isFetching,
        isSuccess,
      } = useGetGenericQuery(type)

     let items = genericItems;

     let sortedItems = Object.entries(items)

     let content;

     if (isFetching) {
        content = <Spinner text="Loading..." />
      } else if (isSuccess) {
        content = (
          <div className="allItems">
              {sortedItems.map((item, index) => 
               <div key={item[index]} ><ContainerComponent details={item} /></div>)}
          </div>
        )
      }
    
      return <section>{content}</section>
};
export default Generic
