import { useMemo } from "react";

import { Spinner } from './Spinner'

import { useGetRoutesQuery } from "../store/middleware/apiSlice"; 


const Routes = () => {

    const {
        data: routes = [],
        isLoading,
        isFetching,
        isSuccess,
        isError,
        error,
      } = useGetRoutesQuery();

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
            content = <ul className="nav routes-list">
                {sortedRoutes.map((route, index) => 
                    <li className="nav-item" key={route[index]}>
                        <a className="nav-link" href={route[0]}>{route[1]}</a>
                    </li>
                )}
            </ul>
    
      } else if (isError) {
        content = <div>{error.toString()}</div>
      }

      if (isFetching) {
        content = <Spinner text="Loading..." />
      }
    
      return (
          <div role="navigation">
          {content}
          </div>
      )
    }

export default Routes;