import React from 'react'
import {graphql,StaticQuery} from "gatsby"
import { Helmet } from "react-helmet"
const SEO = ({ description,keywords,image,title,url,author }) => {
    return (
        <div>
            <StaticQuery
            query={dataquery} 
            render={data=>{
                
                const metaDescription =description || data.site.siteMetadata.description
                const metaTitle =title || data.site.siteMetadata.title
                const metaAuthor =author || data.site.siteMetadata.author
                const metaUrl =url || data.site.siteMetadata.url
                const metaImage =image || data.site.siteMetadata.image
                const metaKeywords =keywords || ["gatsby blog"]
                return(
                    <Helmet
                    title={title}
                    meta={[
                        {
                            property:`og:title` ,
                           content:metaTitle,
                        },
                        {
                            property:`og:image` ,
                           content:metaImage,
                        },
                        {
                            property:`og:url` ,
                            content:metaUrl,
                         },
                         {
                            name:`twitter:author` ,
                            content:metaAuthor,
                         },
                         {
                            name:`twitter:title` ,
                            content:metaTitle,
                         },
                         {
                            name:`twitter:description` ,
                            content:metaDescription,
                         },
                         {
                            name:`twitter:image` ,
                            content:metaImage,
                         },
                    ].concat(
                        metaKeywords && metaKeywords.length >0 ? {
                            name:`keywords` ,
                            content:metaKeywords.join(`, `),
                        } :[]
                    )
                }
                    
                    />
                )

            }}            
            />

            
        </div>
    )
}

export default SEO

const dataquery =graphql`
query data{
    site{
        siteMetadata{
            title
            titleTemplate
            description
            author
            url
            image
            twitterUsername
        }
    }
}

`