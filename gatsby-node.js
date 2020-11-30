const createPosts = require(`./create/createPosts`)
const createPages = require(`./create/createPages`)
const createLatestpost = require(`./create/createLatestpost`)




exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createPages({ actions, graphql })
  await createLatestpost({ actions, graphql })

}


