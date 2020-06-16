// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as Styled from './header.styles'


const Header = ({ siteTitle }) => (
  <Styled.Header>
    <Styled.TitleWrapper padding="3rem">
      <Styled.StyledLink to="/">
        <Styled.Heading1>{siteTitle}</Styled.Heading1>
        <Styled.subHeader>
          I'm a styled <code>div</code>
        </Styled.subHeader>
        <Styled.subHeaderDiv>
          <strong css={theme => ({color: theme.color.secondary, fontFamily: theme.fonts.heading.family})}>HOMEWORK #1</strong>: Styled <code>div</code> from theme (see <code>header.styles.jsx</code>)
        </Styled.subHeaderDiv>
      </Styled.StyledLink>
    </Styled.TitleWrapper>
  </Styled.Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
