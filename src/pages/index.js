import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { ImageContainer } from "../components/image/image.styles"
import Image from "../components/image/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Homework</h1>

    <ImageContainer alignment="right" width="30%">
      <Image/>
    </ImageContainer>

    <ol>
      <li><strong>Turn inline styles in default layout.js and index.js into styled components <a href="https://emotion.sh/docs/styled" target="_blank" rel="noreferrer">https://emotion.sh/docs/styled</a></strong>
        <ul>
          <li>Created wrapper component used in layout.js (/components/wrapper)</li>
          <li>Moved Image wrapping div into /components/image.styles</li>
        </ul>
      </li>
      <li><strong>Use the css prop to modify an element <a href="https://emotion.sh/docs/css-prop" target="_blank" rel="noreferrer">https://emotion.sh/docs/css-prop</a></strong>
        <ul>
          <li>Created footer component with css prop: /components/footer/footer</li>
        </ul>
      </li>
      <li><strong>Set up a styled component in object format to accept a passed prop
      <a href="https://emotion.sh/docs/object-styles" target="_blank" rel="noreferrer">https://emotion.sh/docs/object-styles</a></strong>
        <ul>
          <li>Passed width and alignment props to styled image container: /components/image/image.styles</li>
        </ul>
      </li>
    </ol>

    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
