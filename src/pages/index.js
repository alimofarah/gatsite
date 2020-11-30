import React from "react"
import Layout from '../component/Layout'
import Navphoto from "../component/HeaderFile/Navphoto"
import {graphql} from "gatsby"
import SliderShowSwiper from "../component/homepagelayout/SliderShowSwiper"
import SEO from "./SEO"
import LatestPost from "../component/homepagelayout/LatestPost"

const Index = (props) => {
    const {
        data: {
            wpgraphql: {
                posts: {
                    nodes
                }
            }
        }
    } = props

    return (
        <div className="w-full">
            <SEO/>
            <Layout>

                <SliderShowSwiper data={nodes}/>
                <LatestPost data={props}/>
                <Navphoto/>

            </Layout>
        </div>
    )
}
export default Index
export const query = graphql `
query MyQuery {
    wpgraphql {
      posts(first: 4) {
        nodes {
          date
          title
          excerpt
          id
          uri
          author {
            node {
              name
              id
            }
          }
          featuredImage {
            node {
              guid
            }
          }
        }
      }
    }
  }
  
`