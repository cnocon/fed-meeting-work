import PropTypes from "prop-types"
import React from "react"
import * as Styled from './wrapper.styles'

const Wrapper = ({ children }) => (
  <Styled.Wrapper>
    {children}
  </Styled.Wrapper>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
