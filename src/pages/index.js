import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="M.Sri Santhosh Reddy">
      <StaticImage
        alt="Display profile"
        src="../images/me.jpeg" width="130" height="100"
      />
      <h1>Welcome to my site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      
    </Layout>
  )
}

export default IndexPage