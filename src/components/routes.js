import { useMemo } from "react";
import classnames from 'classnames'

import { Spinner } from './spinner'

import { useGetRoutesQuery, useGetGenericQuery } from "../store/middleware/apiSlice"; 


const Routes = () => {

    const {
        data: routes = [],
        isLoading,
        isFetching,
        isSuccess,
        isError,
        error,
      } = useGetRoutesQuery();

      console.log('query:', useGetRoutesQuery());

    const sendRouteSelection = (selection)  => {
        return useGetGenericQuery(selection)
    }

    //useMemo to avoid re-sorting on every render
    const sortedRoutes = useMemo(() => {
        const sortedRoutes = Object.entries(routes);
        // Sort routes by default alphabetical order
        sortedRoutes.sort()
        return sortedRoutes
      }, [routes])

    let content

    if (isLoading) {
        content = <Spinner text="Loading..." />
      } else if (isSuccess) {
        const routesButtons = sortedRoutes.map((route, index) => (
               <button key={route[index]} className="routeNavButton" onClick={() => sendRouteSelection(route[0])}>{route[1]}</button>
        ))
    
        const containerClassname = classnames('routes-container', {
          disabled: isFetching,
        })
    
        content = <div className={containerClassname}>{routesButtons}</div>
      } else if (isError) {
        content = <div>{error.toString()}</div>
      }
    
      return (
        <section className="routes-list">
          <h2>Routes:</h2>
          {content}
        </section>
      )
    }

export default Routes;