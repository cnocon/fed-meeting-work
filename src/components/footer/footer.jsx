/** @jsx jsx */
import { jsx } from '@emotion/core'

const Footer = () => (
  <footer
    css={{
      backgroundColor: 'hotpink',
      marginTop: '1rem',
      padding: '.5rem',
      '&:hover': {
        color: 'lightgreen'
      }
    }}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer


