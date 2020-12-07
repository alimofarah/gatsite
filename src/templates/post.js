import React from "react"
import {graphql} from "gatsby"
import Layout from "../component/Layout"
import {DiscussionEmbed} from "disqus-react"
import SEO from '../pages/SEO'

const Post = props => {
    const {
        data: {
            wpgraphql: {
                post
            }
        }
    } = props
    const {title, content} = post
    const disqusShortname = "gatsite"
    const baseurl = "http://localhost:8000/"

    const disqusConfig = {
        url: baseurl + `/blog${post.uri}`,
        identifier: post.id,
        title: post.title
    }

    return (
        <Layout>
            <SEO title={title} description={content}/>
            <div className="bg-gray-200 pb-6 leading-relaxed">
                <div className="mb-4 md:mb-0 max-w-screen-md mx-auto ">
                    <h1 className="text-blue-600 font-serif py-6 text-center text-2xl">{title}</h1>
                    <div
                        className="text-gray-700 font-sans"
                        dangerouslySetInnerHTML={{
                        __html: content
                    }}/>

                </div>

                <div>
                    <DiscussionEmbed
                        className="max-w-screen-md mx-auto my-16"
                        shortname={disqusShortname}
                        config={disqusConfig}/>
                </div>
            </div>
        </Layout>

    )
}

export default Post

export const pageQuery = graphql `
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        uri
        date
        id
        tags {
          nodes {
           
            link
          }
        }
        categories {
          nodes {
            
            link
          }
        }
      }
    }
  }
`