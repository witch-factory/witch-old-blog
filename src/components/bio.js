/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
    const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            comment
            info
            contact
          }
          social {
            twitter
          }
        }
      }
    }
  `)

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author
    //const social = data.site.siteMetadata?.social

    return (
        <div className="bio">
            <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["AUTO", "WEBP", "AVIF"]}
                src="../images/witch.jpg"
                width={50}
                height={50}
                quality={95}
                alt="Profile picture"
            />
            {author?.name && (
                <p>
                    <p><strong>{author.name}</strong>입니다. {author?.comment || null}</p>
                    {` `}
                    <br></br>
                    <p><strong>Info : </strong>{author.info||null}</p>
                    <p><strong>Contact : </strong>{author.contact||null}</p>
                </p>
            )}
        </div>
    )
}

export default Bio
