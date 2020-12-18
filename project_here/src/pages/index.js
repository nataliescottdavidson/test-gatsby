import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h2>
      🤓👽🤪
      This site shows multiple ways of using ENV variables as shown in the{' '}
      <a href="https://www.gatsbyjs.org/docs/environment-variables">
        documentation
      </a>
    </h2>
    <p>set by client-side ENV: {`${process.env.GATSBY_WELCOME_MESSAGE}`}</p>
    <p>
      Command line (develop script in package.json):{' '}
      {`${process.env.GATSBY_SOME_ENV_VAR}`}
    </p>
  </Layout>
)

export default IndexPage
