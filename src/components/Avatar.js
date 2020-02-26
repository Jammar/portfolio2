import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Avatar = () => {
    const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "profo-el-pictuehero.png"}){
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
                durationFadeIn="5000" 
                alt="Picture of Joachim the hero" />
        </div>
    )
}

export default Avatar