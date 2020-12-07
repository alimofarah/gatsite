const path = require(`path`)
module.exports = async ({ graphql, actions }) => {
  const GET_POSTS = `
  query MyQuery {
      wpgraphql {
        posts(first: 4) {
          nodes {
            date
            title
            id
            excerpt
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
              sourceUrl
              link
              slug
              uri
            }
          }
          }
        }
      }
    }
    
  `
  const allLatestPosts = []
  const LatestPost = []
 

  const fetchPosts = async variables =>
  await graphql(GET_POSTS, variables).then(({ data }) =>{
    const {
        wpgraphql: {
          posts: {
            nodes,
          },
        },
      } = data


      const LatestPostTempalte = path.resolve(`./src/pages/index.js`)
      LatestPost[0] = {
        path: `/`,
        component: LatestPostTempalte,
        context: {
            product: data,
            id:nodes.id,
            
      }
    }
      nodes.map(post => {
        allLatestPosts.push(post)
      })
      
      return allLatestPosts
  }) 
  
}
