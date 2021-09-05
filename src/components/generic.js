import React from 'react'
import { Spinner } from './spinner'
import { useGetGenericQuery } from '../store/middleware/apiSlice'

export const ItemCard = (item) => {
    console.log("item:", item);
    return(
        <div>A Container for: {item}</div>
    )
}

const Generic = () => {
    const {
        data: genericItems = [],
        isFetching,
        isSuccess,
      } = useGetGenericQuery()

     let items = genericItems;

     let sortedItems = items.sort();

     let content;

     if (isFetching) {
        content = <Spinner text="Loading..." />
      } else if (isSuccess) {
        content = (
          <div className="allItems">
              {sortedItems.map((item) => 
                <ItemCard item={item}/>
              )}
          </div>
        )
      }
    
      return <section>{content}</section>

    return (
        <div>
            <h1>Books</h1>

        </div>
    );
};

export default Generic;