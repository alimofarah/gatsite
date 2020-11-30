import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from "../component/Layout"
import PreviousLink from "./PreviousLink"
import NextLink from "./NextLink"
import SEO from '../pages/SEO'


const blog = (props) => {
    const {hasNextPage, pageNumber} = props.pageContext;
    const datas = props.data
console.log(props);
    return (

        <Layout className="">
            <div
                className="xl:w-4/6 xl:mx-auto md:w-4/6 md:mx-auto sm:w-4/6 sm:mx-auto lg:w-4/6 lg:mx-auto  container leading-relaxed py-16 ">
                <div>{datas
                        .wpgraphql
                        .posts
                        .nodes
                        .map((node) => (
                            <div
                                className="py-6 border rounded-lg mx-auto my-16 shadow-2xl bg-gray-200"
                                key={node.id}>
                                <SEO
                                    title={node.title}
                                    description={node.excerpt}
                                    author={node.author.node.name}
                                    image={node.featuredImage.node.guid}/>

                                <div className="flex flex-col  ">
                                    <img
                                        className="rounded shadow-xl object-cover  xl:mx-auto xl:w-4/5  xl:h-screen sm:w-4/5 sm:mx-auto "
                                        src={node.featuredImage.node.guid}
                                        alt={node.featuredImage.node.guid}/>
                                    <div className="px-6 ">
                                        <div className="text-blue-600 text-2xl font-serif text-center mt-8">
                                            <Link to={`/blog${node.uri}`}>{node.title}</Link>
                                        </div>
                                        <div
                                            className="font-sans mx-6 my-8"
                                            dangerouslySetInnerHTML={{
                                            __html: node.excerpt
                                        }}/>
                                        <div
                                            className="border focus:outline-none rounded-md bg-blue-500 hover:bg-blue-700 w-32 text-white px-6 mb-4 ml-6">
                                            <Link to={`/blog${node.uri}`}>
                                                Read More</Link>
                                        </div>
                                        <div className="">created by
                                            <Link className="text-blue-500" to="">
                                                @{node.author.node.name}</Link>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        ))}
                </div>

            </div>

            <div className="flex flex-row justify-between mx-32 mb-32">
                <PreviousLink pageNumber={pageNumber}/>
                <NextLink pageNumber={pageNumber} hasNextPage={hasNextPage}/>
            </div>
        </Layout>
    )
}
export default blog

export const query = graphql `
  query GET_POSTS($ids: [ID]) {
    wpgraphql {
      posts(where: { in: $ids }) {
        nodes {
          id
          uri
          postId
          title
          date
          excerpt
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
