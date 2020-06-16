import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import * as StyledImg from "../components/image/image.styles"
import Image from "../components/image/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1 css={theme => ({fontFamily: theme.fonts.heading.family})}>Homework</h1>

    <StyledImg.ImageContainer alignment="right" width="30%">
      <Image/>
    </StyledImg.ImageContainer>

    <StyledImg.ImageContainerAlt>
      <Image/>
    </StyledImg.ImageContainerAlt>

    <ul>
      <li><strong>BONUS: Use <code>theme</code> in component file with style prop.</strong>
        <ol>
          <li>See the <code>footer</code> element style attribute in <code>footer.jsx</code></li>
        </ol>
      </li>
      <li><strong>Create a styled div that uses preset styles from your <code>theme.js</code> file</strong>
        <ol>
          <li>Created <code>Styled.subHeaderDiv</code> in <code>header.styles.jsx</code></li>
        </ol>
      </li>
      <li><strong>Set up an object in <code>theme.js</code> that defines font sizes and then use this to style the header component.</strong>
        <ol>
          <li>See <code>theme.fonts.sizes</code> in <code>theme.js</code> for theme file setup</li>
          <li>See <code>subHeader</code> font size in <code>header.styles.js</code></li>
        </ol>
      </li>
      <li><strong>Turn inline styles in default <code>layout.js</code> and <code>index.js</code> into styled components <a href="https://emotion.sh/docs/styled" target="_blank" rel="noreferrer">https://emotion.sh/docs/styled</a></strong>
        <ol>
          <li>Created wrapper component used in <code>layout.js</code> (<code>/components/wrapper</code>)</li>
          <li>Moved Image wrapping div into /<code>components/image.styles</code></li>
        </ol>
      </li>
      <li><strong>Use the css prop to modify an element <a href="https://emotion.sh/docs/css-prop" target="_blank" rel="noreferrer">https://emotion.sh/docs/css-prop</a></strong>
        <ol>
          <li>Created footer component with css prop: <code>/components/footer/footer</code></li>
        </ol>
      </li>
      <li><strong>Set up a styled component in object format to accept a passed prop
        &nbsp;<a href="https://emotion.sh/docs/object-styles" target="_blank" rel="noreferrer">https://emotion.sh/docs/object-styles</a></strong>
        <ol>
          <li>Passed width and alignment props to styled image container: <code>/components/image/image.styles</code></li>
        </ol>
      </li>
    </ul>

    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
