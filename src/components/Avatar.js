import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Avatar = () => {
    const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "profo-el-pictuehero.jpg"}){
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return(
        <div className="avatar">
            <Img 
                fluid={data.image.childImageSharp.fluid} 
                alt="Picture of Joachim the hero" />
        </div>
    )
}

export default Avatar