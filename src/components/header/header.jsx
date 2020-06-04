// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as Styled from './header.styles'

const Header = ({ siteTitle }) => (
  <Styled.Header>
    <Styled.TitleWrapper padding="3rem">
      <Styled.Header>
        <Styled.StyledLink to="/">
          {siteTitle}
        </Styled.StyledLink>
      </Styled.Header>
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
