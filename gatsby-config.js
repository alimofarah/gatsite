/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

console.log(`This WordPress Endpoint is used: '${process.env.WORDPRESS_URL}'`)

module.exports = {
   pathPrefix: "/gatsite",
  siteMetadata:{
    title: "Severus Snape",
    titleTemplate: "%s · The Real Hero",
    author:'Ali mofarah',
    description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",

  },
  /* Your site config here */
  plugins: [`my-own-plugin`,`second-own-plugin`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `image`,
      path: `${__dirname}/src/image/`,
    },
  },
  {
    resolve:`gatsby-plugin-postcss`,
    options:{
      postCssPlugins:[require("tailwindcss")],
    },

  },
  {
    resolve: "gatsby-source-wordpress",
    options: {
      
      baseUrl: "http://gatsite.local/",
      protocol: "http",
      restApiRoutePrefix: "wp-json",
      hostingWPCOM: false,
      useACF: true,
      acfOptionPageIds: [],
      auth: {
        htaccess_user: "your-htaccess-username",
        htaccess_pass: "your-htaccess-password",
        htaccess_sendImmediately: false,
        wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
        wpcom_app_clientId: "54793",
        wpcom_user: "gatsbyjswpexample@gmail.com",
        wpcom_pass: process.env.WORDPRESS_PASSWORD,
        jwt_user: process.env.JWT_USER,
        jwt_pass: process.env.JWT_PASSWORD,
        jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
      },
      cookies: {},
      verboseOutput: false,
      perPage: 100,
      searchAndReplaceContentUrls: {
        sourceUrl: "https://source-url.com",
        replacementUrl: "https://replacement-url.com",
      },
      concurrentRequests: 10,
      includedRoutes: [
        "**/categories",
        "**/posts",
        "**/pages",
        "**/media",
        "**/tags",
        "**/taxonomies",
        "**/users",
        "**/searchResults",
      ],
      excludedRoutes: ["**/posts/1456"],
      keepMediaSizes: false,
      normalizer: function ({ entities }) {
        return entities
      },
      normalizers: normalizers => [
        ...normalizers,
        {
          name: "nameOfTheFunction",
          normalizer: function ({ entities }) {
            return entities
          },
        },
      ],
    },
  },
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "WPGraphQL",
      fieldName: "wpgraphql",
      url: `http://gatsite.local/graphql`,
    },
  },
  {
    resolve: 'gatsby-plugin-apollo',
    options: {
      uri: 'https://gatsite.local/graphql'
    }
  },
  
  
],
}


/*
${process.env.WORDPRESS_URL}/graphql
*/