import React from 'react'
import {useStaticQuery, graphql, navigate} from "gatsby";
import SearchComponent from "./SearchComponent";

const Searche = () => {
    const data = useStaticQuery(graphql `
    {
      allWordpressWpSearchResults {
        edges {
          node {
            id
            post_title
            searchData
            pathname
          }
        }
      }
    }
  `)

    //   console.log(data);

    return (
        <div>

            <SearchComponent
                data={data}
                minCharacters={4}
                contentCharacters={100}
                maxResults={10}
                placeholder='Search'
                onSelect={object => navigate(object.pathname)}/>

        </div>
    )
}

export default Searche
