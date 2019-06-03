module.exports = {
  siteMetadata: {
      title: "Andrea's Blog",
      author: 'Andrea Nawara'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
        resolve: 'gatsby-source-contentful',
        options: {
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        }
    },
    'gatsby-plugin-sass',
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/`
        }
    },
    {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `limelight`,
            `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
          ]
        }
      },
    'gatsby-plugin-sharp',
    {
        resolve: 'gatsby-transformer-remark',
        options: {
            plugins: [
                'gatsby-remark-relative-images',
                {
                    resolve: 'gatsby-remark-images',
                    options: {
                        maxWidth: 750,
                        linkImagesToOriginal: false
                    }
                }
            ]
        }
    }
]
}