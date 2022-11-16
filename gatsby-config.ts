import type { GatsbyConfig } from "gatsby"
import "dotenv/config"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jakub Karaś`,
    siteUrl: `https://jakubkaras.pl`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-root-import",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: "./articles/"
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
          resolve: 'gatsby-remark-images',
          options: {
            quality: 100,
          },
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["300", "400", "500", "600", "700", "800"],
              subsets: ["latin-ext"]
            }
          ]
        },
        useMinify: true,
        usePreload: true,
        usePreconnect: true
      }
    }
  ]
}

export default config
