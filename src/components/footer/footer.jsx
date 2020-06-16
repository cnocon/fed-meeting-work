/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as Styled from "./Footer.styles"

const Footer = () => (
  <footer
    css={theme => ({
      position: 'fixed',
      bottom: 0,
      width: '100%',
      textAlign: 'center',
      backgroundColor: `${theme.color.primary}`,
      marginTop: `${theme.fonts.sizes.xl}`,
      padding: `${theme.fonts.sizes.lg}`,
      color: '#fff'
    })}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org" css={Styled.Link}>Gatsby</a>
  </footer>
)

export default Footer


