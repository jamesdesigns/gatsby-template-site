import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import img from '../images/aquaman.jpg'
import img2 from '../images/pulpfiction.jpg'
// import { node } from "prop-types"


const DownloadsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "jpg" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>All WebM Downloads</h1>
      <img src={img} alt="Aquaman"  />
      <img src={img2} alt="Pulp Fiction"  />
      {/* <ul>
        {data.allFile.edges.map((file, index) => {
          return (
            <li key={`jpg-${index}`}>
              <a href={file.node.publicURL} download>
                {file.node.name}
              </a>
              <img src={img}  alt="text" /> 
            </li>
          )
        })}

      </ul> */}
    </Layout>
   
  )
}
export default DownloadsPage